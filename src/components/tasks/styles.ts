import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingVertical: 10,
        alignItems: "center",
    },
    content: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 7,
        paddingTop: 10,
    },
    name: {
        color: colors.gray[800],
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 7,
    },
    details: {
        flex: 1,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    actions: {
        flexDirection: "row",
        gap: 4,
    },
    detailsContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    borderFooter: {
        width: "100%",
        borderWidth: 0.4,
        borderColor: colors.gray[400],
        marginTop: 20,
    },
})