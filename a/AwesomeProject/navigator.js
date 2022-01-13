import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from './login';
import sigin from './sigin';
import password from './password';
import forgetpassword from './forgetpassword';
 import forget from './forget';
const Init = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="login" component={login} />
                <Tab.Screen name="sigin" component={sigin} />
                <Tab.Screen name="password" component={password} />
                <Tab.Screen name="forgetpassword" component={forgetpassword} />
                <Tab.Screen name="forget" component={forget} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Init;