import { Text, View } from "react-native"

import { tags } from "@/constants/tags"
import { styles } from "./styles"

type Props = {
    tagId: string
}

export function TagBadge({ tagId }: Props) {

    const tag = tags.find(t => t.id === tagId)

    if (!tag) return null

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: tag.color }
            ]}
        >
            <Text style={styles.text}>
                {tag.label}
            </Text>
        </View>
    )
}