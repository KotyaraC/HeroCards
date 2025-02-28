import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import HeroDetailScreen from '../screens/HeroDetailScreen';
import React from "react";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#1e1e1e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🎮 Dota 2 Heroes' }} />
                <Stack.Screen name="HeroDetails" component={HeroDetailScreen} options={{ title: 'Hero Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
