import { Text, TouchableOpacity, View } from "react-native";

import { tags } from "@/constants/tags";
import { styles } from "./styles";

type Props = {
    value: string,
    setValue: (value: string) => void
}

export function Select({ value, setValue }: Props) {
    return (
        <View style={styles.container}>
            {tags.map(tag => (
                <TouchableOpacity
                    key={tag.id}
                    style={[styles.tag, {
                        backgroundColor: value === tag.id ? tag.color : "#E4E4E7"
                    }
                    ]}
                    onPress={() => setValue(tag.id)}
                >
                    <Text
                        style={[styles.tagText, {
                            color: value === tag.id ? "#fff" : "#18181B"
                        }
                        ]}
                    >
                        {tag.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
