import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = TextInputProps & {
    icon?: keyof typeof MaterialIcons.glyphMap
}

export function Input({ icon, ...rest }: Props) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialIcons
                    name={icon}
                    size={30}
                    color={colors.gray[600]}
                />
            )}

            <TextInput
                style={styles.input}
                autoCorrect={false}
                placeholderTextColor={colors.gray[500]}
                {...rest}
            />
        </View>
    )
}