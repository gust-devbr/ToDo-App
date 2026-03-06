import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = {
    title: string
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
    page: "home" | "add"
}

export function Header({ icon, title, page, onPress, ...rest }: Props) {
    return (
        <View style={[
            styles.base,
            page === "home" && styles.containerPrimary,
            page === "add" && styles.containerSeconday
        ]}>
            <Text style={styles.text}>{title}</Text>

            <TouchableOpacity onPress={onPress} {...rest}>
                <MaterialIcons name={icon} size={35} color={colors.gray[100]} />
            </TouchableOpacity>
        </View>
    )
}