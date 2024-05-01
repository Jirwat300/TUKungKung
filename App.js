import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import EditPersonalInfo from './src/pages/EditpersonalInfo';
import { Ionicons } from '@expo/vector-icons';
import FacilityHomepage from './src/pages/FacilityHomepage'; // Import is correct
import Bookingpage from './src/pages/Bookingpage.js';
import UserProfile from './src/pages/UserProfilePage'
import Home from './src/pages/Home'
import DemoScholar from './src/pages/DemoScholarPage'
import EvMapPage from './src/pages/EVmap.js';
import HornaiiPage from './src/pages/Hornaii.js';
import HealthyServicePage from './src/pages/HealthyService.js';
import Timetable from './src/pages/Timetable.js'
import Menubar from './src/pages/Menubar.js'
import UserInfopage from './src/pages/UserInfopage.js';
import StudentCardPage from './src/pages/StudentCard.js';
import SchoolRecordPage from './src/pages/SchoolRecordPage.js'
import ExamStudent from './src/pages/ExStudentCard.js'

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

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={UserProfile}
      options={{ title: 'Profile' }}
    />
    <Stack.Screen
      name="UserInfo"
      component={UserInfopage}
      options={{ title: 'UserInfo' }}
    />
    <Stack.Screen
      name="StudentCard"
      component={StudentCardPage}
      options={{ title: 'StudentCard' }}
    />
    <Stack.Screen
      name="EditInfo"
      component={EditPersonalInfo}
      options={{ title: 'EditInfo' }}
    />
    <Stack.Screen
      name="SchoolRecord"
      component={SchoolRecordPage}
      options={{ title: 'SchoolRecord' }}
    />
    <Stack.Screen
      name="ExamStudent"
      component={ExamStudent}
      options={{ title: 'ExamStudent' }}
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
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === 'Home') {
                focused ? iconName = 'home' : iconName = 'home-outline';
              } else if (route.name === 'Facility') {
                focused ? iconName = 'planet' : iconName = 'planet-outline';
              } else if (route.name === 'Timetable') {
                focused ? iconName = 'time' : iconName = 'time-outline';
              } else if (route.name === 'UserProfile') {
                focused ? iconName = 'person-circle' : iconName = 'person-circle-outline';
              } 
              return iconName ? <Ionicons name={iconName} size={24} color="black" /> : null;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          <Tab.Screen name="Facility" component={FacilityStack} options={{ headerShown: false }} />
          <Tab.Screen name="Timetable" component={Timetable} options={{ title: 'TimeTable' }} />
          <Tab.Screen name="UserProfile" component={ProfileStack} options={{ headerShown: false }} />
        </Tab.Navigator>
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
