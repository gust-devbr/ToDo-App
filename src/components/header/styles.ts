import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    base: {
        flex: 1,
        maxHeight: 70,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: colors.blue[500],
    },
    text: {
        fontSize: 27,
        fontWeight: "700",
        color: colors.gray[100],
    },
    containerPrimary: {
        flexDirection: "row",
    },
    containerSeconday: {
        flexDirection: "row-reverse",
    },
})