import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonBar from './components/ButtonBar';
import HomeScreen from './pages/HomeScreen';
import Chat from './pages/Chat';
import ProfileScreen from './pages/Profile';
import LoginScreen from './pages/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <ButtonBar {...props} activeScreen={props.state.routeNames[props.state.index]} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from local storage or other persistent storage
    // For simplicity, assuming a function checkLoginStatus that returns true or false
    const checkLoginStatus = async () => {
      // Simulate a login check
      const loggedIn = await fakeLoginCheck();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const fakeLoginCheck = async () => {
    // Replace with actual login status check logic
    return false;
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MyTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
