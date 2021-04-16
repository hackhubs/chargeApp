import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function TestScreen(props) {
  return <LottieView source={require("../images/charge.json")} autoPlay loop />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestScreen;
