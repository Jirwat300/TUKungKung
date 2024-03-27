import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DemoScholarPage from './src/pages/DemoScholarPage';
import LoginPage from './src/pages/LoginPage';
import PersonalInfo from './src/pages/EditpersonalInfo'; // Import your PersonalInfoPage
<<<<<<< Updated upstream
import UserProfilePage from './src/pages/UserProfilePage';
=======
import SchoolRecordPage from './src/pages/SchoolRecordPage';
>>>>>>> Stashed changes
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

              if (route.name === 'DemoScholar') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'PersonalInfo') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
              }

              // Only return an icon if one is set
              return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="DemoScholar" component={DemoScholarPage} options={{ title: 'Scholarships' }} />
          {/* Add the PersonalInfoPage to the Tab.Navigator */}
          <Tab.Screen name="PersonalInfo" component={PersonalInfo} options={{ title: 'Edit User Profile' }} />
<<<<<<< Updated upstream
          <Tab.Screen name="UserInfo" component={UserProfilePage} options={{ title: 'User Profile' }} />
=======
          <Tab.Screen name="SchoolRecord" component={SchoolRecordPage} options={{ title: 'School Record' }} />
>>>>>>> Stashed changes
        </Tab.Navigator>
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
