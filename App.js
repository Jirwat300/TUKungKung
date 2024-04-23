import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import PersonalInfo from './src/pages/EditpersonalInfo';
import { Ionicons } from '@expo/vector-icons';
import FacilityHomepage from './src/pages/FacilityHomepage'; // Import is correct
import Bookingpage from './src/pages/Bookingpage.js';
import UserProfile from './src/pages/UserProfilePage'
import Home from './src/pages/Home'
import DemoScholar from './src/pages/DemoScholarPage'
import EvMapPage from './src/pages/EVmap.js';
import HornaiiPage from './src/pages/Hornaii.js';
import HealthyServicePage from './src/pages/HealthyService.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FacilityStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FacilityHomepage"
      component={FacilityHomepage}
      options={{ title: 'Facility' }}
    />
    <Stack.Screen
      name="Booking"
      component={Bookingpage}
      options={{ title: 'Book Facility' }}
    />
    <Stack.Screen
      name="Scholar"
      component={DemoScholar}
      options={{ title: 'Demo Scholar' }}
    />
    <Stack.Screen
      name="Evmap"
      component={EvMapPage}
      options={{ title: 'Ev Map' }}
    />
    <Stack.Screen
      name="Hornaii"
      component={HornaiiPage}
      options={{ title: 'Hornaii' }}
    />
    <Stack.Screen
      name="HealthyService"
      component={HealthyServicePage}
      options={{ title: 'Healthy' }}
    />
  </Stack.Navigator>
);

// Auth stack for login and conditional rendering
const AuthStack = ({ setIsLoggedIn }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{ headerShown: false }}
      initialParams={{ setIsLoggedIn }}
    />
  </Stack.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Facility') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'PersonalInfo') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
              }
              return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Facility" component={FacilityStack} options={{ headerShown: false }} />
          <Tab.Screen name="PersonalInfo" component={PersonalInfo} options={{ title: 'Edit User Profile' }} />
        </Tab.Navigator>
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
