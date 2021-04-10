import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "../screens/HomePageScreen";
import PaymentScreen from "../screens/PaymentScreen";
import QRScreen from "../screens/QRScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "#069DFF",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePageScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="battery-charging-full"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="QR"
      component={QRScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="scan" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Payment"
      component={PaymentScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
