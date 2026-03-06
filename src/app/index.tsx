import { router } from "expo-router";
import { useEffect } from "react";

export default function RootPage() {
    useEffect(() => {
        router.push("/(stack)/home")
    }, [])
}