import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modal: {
        width: "90%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
        gap: 10,
    },
    modalButton: {
        width: "100%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
    },
    textModalButton: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",
    },
    modalTitle: {
        textAlign: "left",
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "600",
    },
    card: {
        flexDirection: "column",
    },
})
