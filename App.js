import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import CardScreen from "./components/CardScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./navigation/AppNavigator";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import ChargingDetails from "./screens/ChargingDetails";
import SignupScreen from "./screens/SignupScreen";
import SignupOTP from "./screens/SignupOTP";
import SignupDetails from "./screens/SignupDetails";
import ProfileScreen from "./screens/ProfileScreen";
import ChargeSuccess from "./screens/ChargeSuccess";
import ChargingStatus from "./screens/ChargingStatus";
import FeedbackScreen from "./screens/FeedbackScreen";
import FinalCharge from "./screens/FinalCharge";
import BillingScreen from "./screens/BillingScreen";
import EditProfile from "./screens/EditProfile";
import ReportScreen from "./screens/ReportScreen";
import ProfileNavigator from "./navigation/ProfileNavigator";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <BillingScreen />
    // <EditProfile />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="AppBottom" component={AppNavigator} />
    //     {/* <Stack.Screen name="Edit" component={EditProfile} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
