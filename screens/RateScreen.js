import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function RateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Rate our app </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          width: "40%",
          marginLeft: 20,
          padding: 10,
        }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={{ color: "white" }}>go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default RateScreen;
