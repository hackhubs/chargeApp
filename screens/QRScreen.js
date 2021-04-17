import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Card, Button, Icon } from "react-native-elements";

const QRScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.cont}>
      <TouchableOpacity
        style={styles.scanner}
        onPress={() => navigation.navigate("Charge")}
      >
        <Image
          source={require("../images/scan.png")}
          style={{ width: 250, height: 250 }}
        />
      </TouchableOpacity>
      <View style={styles.cont2}>
        <Text style={{ fontSize: 24, marginLeft: 30, marginTop: 45 }}>
          Charge via Station ID
        </Text>
        <Text style={{ fontSize: 14, marginLeft: 30, marginTop: 35 }}>
          Enter code here
        </Text>
        <TextInput style={styles.input} placeholder="Enter station"></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default QRScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  scanner: {
    alignItems: "center",
    marginTop: 80,
  },
  cont2: {
    fontFamily: "SF Pro Display",
  },
  input: {
    marginLeft: 28,
    marginTop: 15,
    borderColor: "#e7e7e7",
    borderWidth: 2,
    marginRight: 30,
    borderRadius: 30,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#e7e7e7",
    color: "black",
  },
});
