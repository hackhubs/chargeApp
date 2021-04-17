import React from "react";
import { Image, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from "../screens/HomePageScreen";
import PaymentScreen from "../screens/PaymentScreen";
import QRScreen from "../screens/QRScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import ReportScreen from "../screens/ReportScreen";

const Tab = createBottomTabNavigator();
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

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "#069DFF",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "black",
      showLabel: false,
      style: {
        height: 60,
        backgroundColor: "white",
        // elevation: 3,
      },
    }}
  >
    <Tab.Screen
      name="home"
      component={HomePageScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require("../images/explore-icon.png")}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginTop: 4,
                tintColor: focused ? "#069DFF" : "#000000",
              }}
            />
            <Text
              style={{
                color: focused ? "#069DFF" : "#000000",
                fontSize: 10,
                marginTop: 4,
                marginLeft: -6,
              }}
            >
              EXPLORE
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="QR"
      component={QRScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              // height: 120,
              // borderRadius: 40,
              // backgroundColor: "white",
              // padding: 15,
              width: "100%",
              height: 120,
              borderRadius: 0.7 * 120,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "white",
              padding: 16,
            }}
          >
            <Image
              source={require("../images/scan-icon.png")}
              resizeMode="contain"
              style={{
                width: 60,
                height: 55,
                marginTop: 2,
                marginLeft: 20,
                tintColor: focused ? "#069DFF" : "#000000",
              }}
            />
            <Text
              style={{
                color: focused ? "#069DFF" : "#000000",
                fontSize: 10,
                marginTop: 4,
                marginLeft: 36,
                height: 50,
              }}
            >
              SCAN
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require("../images/profile-icon.png")}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginTop: 4,
                tintColor: focused ? "#069DFF" : "#000000",
              }}
            />
            <Text
              style={{
                color: focused ? "#069DFF" : "#000000",
                fontSize: 10,
                marginTop: 4,
                marginLeft: -6,
              }}
            >
              PROFILE
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
