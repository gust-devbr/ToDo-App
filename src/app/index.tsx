import { router } from "expo-router";
import * as Updates from 'expo-updates';
import { useEffect } from "react";

export default function RootPage() {
    useEffect(() => {
        router.push("/(stack)/home")
    }, [])

    useEffect(() => {
        async function updateApp() {
            const update = await Updates.checkForUpdateAsync();

            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        }

        updateApp();
    }, []);
}