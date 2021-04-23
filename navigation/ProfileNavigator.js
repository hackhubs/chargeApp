import React from "react";
import { Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import ReportScreen from "../screens/ReportScreen";

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
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Report" component={ReportScreen} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
