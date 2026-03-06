import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { Header } from "@/components/header";
import { Select } from "@/components/select";

import { Input } from "@/components/input";
import { api } from "@/services/api";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
    id: string
    name: string
    tag: string
}

export default function HomePage() {
    const [tag, setTag] = useState("")
    const [title, setTitle] = useState("")

    async function createTask() {
        try {
            if (!title) {
                return Alert.alert("Erro", "Título obrigatório")
            }

            if (!tag) {
                return Alert.alert("Erro", "Tag obrigatória")
            }

            await api.post("/tasks", { title: title, tag: tag });

            Alert.alert("Sucesso", "Nova tarefa adicionada", [
                {
                    text: "Ok",
                    onPress: () => router.back()
                }
            ])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar a tarefa");
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Header
                page="add"
                icon="arrow-back"
                onPress={() => router.back()}
                title="Nova Tarefa"
            />

            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.label}>Título</Text>
                    <Input
                        placeholder="Digite o título da tarefa"
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Categoria</Text>
                    <Select
                        value={tag}
                        setValue={setTag}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={createTask}>
                    <MaterialIcons name="add" size={40} color={colors.gray[200]} />

                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
