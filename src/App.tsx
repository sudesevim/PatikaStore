import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreScreen from './pages/StoreScreen';
import AccountScreen from './pages/AccountScreen';
import MemberSign from './pages/MemberSign';
import MemberDetail from './pages/MemberDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="MemberSign" component={MemberSign} />
            <Stack.Screen name="MemberDetail" component={MemberDetail} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
           <Tab.Navigator>
               <Tab.Screen name="Store" component={StoreScreen} />
               <Tab.Screen name='My Account'component={AccountStack} />
           </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;