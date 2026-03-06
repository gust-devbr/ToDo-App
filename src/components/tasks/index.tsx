import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TagBadge } from "../tags";
import { styles } from "./styles";

type Props = {
    name: string
    tag: string
    onEdit?: () => void
    onDelete: () => void
    onUpdate: () => void
    checkIcon: keyof typeof MaterialIcons.glyphMap
}

export function Tasks({
    name,
    tag,
    onEdit,
    onDelete,
    onUpdate,
    checkIcon
}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.details}>

                    <View style={styles.detailsContent}>
                        <TouchableOpacity onPress={onUpdate}>
                            <MaterialIcons name={checkIcon} size={28} color={colors.green[500]} />
                        </TouchableOpacity>

                        <Text style={styles.name} numberOfLines={1}>
                            {name}
                        </Text>
                    </View>

                    <TagBadge tagId={tag} />
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity onPress={onEdit}>
                        <MaterialIcons name="edit" size={30} color={colors.gray[600]} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onDelete}>
                        <MaterialIcons name="delete" size={30} color={colors.red[700]} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.borderFooter} />
        </View>
    )
}