import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[100]
    },
    content: {
        gap: 10,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    card: {
        flexDirection: "column",
    },
    label: {
        fontSize: 25,
        fontWeight: "600",
        marginLeft: 5,
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: colors.blue[700],
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        borderRadius: 8,
        marginTop: 15,
    },
    textButton: {
        fontSize: 25,
        color: colors.gray[100],
        fontWeight: "600",
    },
})