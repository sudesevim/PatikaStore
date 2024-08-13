import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, Image, View, FlatList, TextInput, Dimensions } from 'react-native';
import StoreScreen from './pages/StoreScreen';
import CartScreen from './pages/CartScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name= "Store" component={StoreScreen} />
            <Tab.Screen name='Cart'component={CartScreen} />
        </Tab.Navigator>
    )
}
export default App;