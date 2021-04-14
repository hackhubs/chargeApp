import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageScreen from "./screens/HomePageScreen";
import CardScreen from "./components/CardScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import ChargingDetails from "./screens/ChargingDetails";

export default function App() {
  return (
    <ChargingDetails />
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
