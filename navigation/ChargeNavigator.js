import React from "react";
import { Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from "../screens/HomePageScreen";
import ChargingStatus from "../screens/ChargingStatus";
import QRScreen from "../screens/QRScreen";
import ChargingDetails from "../screens/ChargingDetails";
import ChargeSuccess from "../screens/ChargeSuccess";

const Stack = createStackNavigator();

function ChargeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="QR"
      showLabel="false"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="QR" component={QRScreen} />
      <Stack.Screen name="Charge" component={ChargingStatus} />
      <Stack.Screen name="Success" component={ChargeSuccess} />
    </Stack.Navigator>
  );
}

export default ChargeNavigator;
