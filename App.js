import React from "react";
import { HeroProvider } from "./src/context/HeroContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <HeroProvider>
            <AppNavigator />
        </HeroProvider>
    );
}
