import React from "react";
import { Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import ReportScreen from "../screens/ReportScreen";
import WorkingScreen from "../screens/WorkingScreen";
import ReferScreen from "../screens/ReferScreen";
import About from "../screens/About";
import RateScreen from "../screens/RateScreen";
import EditProfile from "../screens/EditProfile";

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      showLabel="false"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Work"
        component={WorkingScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Refer"
        component={ReferScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Rate"
        component={RateScreen}
        options={{
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
