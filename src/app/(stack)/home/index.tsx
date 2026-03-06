import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Modal, Text, TouchableOpacity, View } from "react-native";

import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Tasks } from "@/components/tasks";

import { api } from '@/services/api';

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Task = {
    id: string
    title: string
    tag: string
    completed: boolean
}

type State = {
    search: string
    tag: string
    tasks: Task[]
    editVisible: boolean
    selectedTask: Task | null
    editTitle: string
    editTag: string
}

export default function HomePage() {
    const [state, setState] = useState<State>({
        tag: "all",
        search: "",
        tasks: [],
        editVisible: false,
        selectedTask: null,
        editTitle: "",
        editTag: ""
    })

    async function loadTasks() {
        try {
            const res = await api.get("/tasks", {
                params: {
                    search: state.search,
                    tag: state.tag === "all" ? undefined : state.tag
                }
            });
            const data = Array.isArray(res.data) ? res.data : res.data.tasks || [];
            setState(prev => ({ ...prev, tasks: data }));
        } catch (error) {
            Alert.alert("Erro", "Não foi possível buscar as tarefas");
            console.log(error);
        }
    }

    async function updateTasks(id: string) {
        try {
            await api.patch(`/tasks/${id}`);
            loadTasks();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível atualizar a tarefa");
            console.log(error);
        }
    }

    async function renameTasks() {
        try {
            if (!state.selectedTask) return;

            await api.put(`/tasks/${state.selectedTask.id}`, {
                title: state.editTitle,
                tag: state.editTag
            });

            setState(prev => ({ ...prev, editVisible: false }));

            loadTasks();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível editar a tarefa");
            console.log(error);
        }
    }

    async function deleteTasks(id: string) {
        try {
            await api.delete(`/tasks/${id}`);
            loadTasks();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir a tarefa");
            console.log(error);
        }
    }

    function confirmDelete(id: string) {
        Alert.alert(
            "Excluir tarefa",
            "Deseja realmente excluir essa tarefa?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", onPress: () => deleteTasks(id) }
            ]
        );
    }

    useFocusEffect(useCallback(() => {
        loadTasks()
    }, [state.tag, state.search])
    )

    function handleEdit(task: Task) {
        setState(prev => ({
            ...prev,
            selectedTask: task,
            editTitle: task.title,
            editTag: task.tag,
            editVisible: true
        }))
    }

    return (
        <View style={styles.container}>
            <Header
                page="home"
                icon="add"
                onPress={() => router.push("/create")}
                title="ToDo App"
            />

            <View style={styles.content}>
                <Input
                    icon="search"
                    placeholder="Buscar tarefas..."
                    value={state.search}
                    onChangeText={(value) => setState(prev => ({ ...prev, search: value }))}
                />

                <Select
                    value={state.tag}
                    setValue={(value: string) => setState(prev => ({ ...prev, tag: value }))}
                />

                <FlatList
                    data={state.tasks}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Tasks
                            name={item.title}
                            tag={item.tag}
                            onUpdate={() => updateTasks(item.id)}
                            onEdit={() => handleEdit(item)}
                            onDelete={() => confirmDelete(item.id)}
                            checkIcon={item.completed ? "check-box" : "check-box-outline-blank"}
                        />
                    )}
                />
            </View>

            <Modal visible={state.editVisible} transparent animationType="slide">
                <View
                    style={styles.modalOverlay}>
                    <View style={styles.modal}>

                        <Text style={styles.modalTitle}>Editar tarefa</Text>

                        <View style={styles.card}>
                            <Text style={styles.label}>Novo Título</Text>
                            <Input
                                placeholder="Título"
                                value={state.editTitle}
                                onChangeText={(value) => setState(prev => ({ ...prev, editTitle: value }))}
                            />
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.label}>Nova Categoria</Text>
                            <Select
                                value={state.editTag}
                                setValue={(value: string) => setState(prev => ({ ...prev, editTag: value }))}
                            />
                        </View>

                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: colors.blue[700], marginTop: 20 }]}
                            onPress={() => renameTasks()}
                        >
                            <Text style={styles.textModalButton}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: colors.red[700] }]}
                            onPress={() => setState(prev => ({ ...prev, editVisible: false }))}
                        >
                            <Text style={styles.textModalButton}>Cancelar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}
