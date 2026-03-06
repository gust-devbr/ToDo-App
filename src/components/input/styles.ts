import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: colors.gray[400],
        borderRadius: 8,
        paddingHorizontal: 10,
        width: "100%",
        height: 45,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#FFF"
    },
    input: {
        width: "100%",
        backgroundColor: "transparent",
        color: colors.gray[600],
        fontSize: 20,
        fontWeight: "600",
    }
})