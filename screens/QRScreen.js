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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
        <Text
          style={{
            fontSize: wp("6%"),
            marginLeft: wp("8%"),
            marginTop: wp("15%"),
            fontFamily: "SF-Pro-Display-Bold",
            color: "black",
          }}
        >
          Charge via Station ID
        </Text>
        <Text
          style={{
            fontSize: wp("4%"),
            marginLeft: wp("8%"),
            marginTop: wp("6%"),
            color: "#3F3F3F",
            fontFamily: "SF-Pro-Display-Semibold",
          }}
        >
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
    backgroundColor: "white",
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
    fontFamily: "SF-Pro-Display-Regular",
  },
});
