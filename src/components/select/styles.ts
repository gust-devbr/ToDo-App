import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 10,
        justifyContent: "space-around",
    },
    tag: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    tagText: {
        fontSize: 15,
        fontWeight: "500",
    },
})
