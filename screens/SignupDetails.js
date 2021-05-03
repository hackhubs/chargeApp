import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SignupBtn } from 'svg';

function SignupDetails(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/valerio-logo.png")}
        resizeMode="contain"
        style={{
          width: wp("30%"),
          height: hp("30%"),
          marginLeft: wp("32%"),
          marginTop: wp("3%"),
        }}
      />
      <Image
        source={require("../images/signup-text.png")}
        resizeMode="contain"
        style={{ width: wp("60%"), height: hp("10%"), marginLeft: wp("10%") }}
      />
      <View style={{ marginTop: wp("8%"), marginLeft: wp("10%") }}>
        <Text style={styles.txt}>Username</Text>
        <TextInput placeholder="Enter Name" style={styles.input} />
      </View>

      <View style={{ marginTop: wp("4%"), marginLeft: wp("10%") }}>
        <Text style={styles.txt}>Phone Number</Text>
        <TextInput placeholder="Enter Phone Number" style={styles.input} />
      </View>
      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={{ color: "#069DFF" }}>Terms of Service </Text>
        and <Text style={{ color: "#069DFF" }}>Privacy Policy.</Text>
      </Text>
      <View>
        <TouchableOpacity activeOpacity={0.6}>

          <SignupBtn
            width={wp("60%")}
            height={hp("18%")}
            marginLeft={wp("20%")}
          />

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  txt: {
    fontSize: wp("4%"),
    color: "#7C7C7C",
    fontFamily: "SF-Pro-Display-Semibold",
  },
  input: {
    color: "#030303",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginRight: wp("10%"),
    fontFamily: "SF-Pro-Display-Regular",
  },
  terms: {
    marginTop: wp("6%"),
    marginLeft: wp("10%"),
    fontSize: wp("3.4%"),
    marginRight: wp("8%"),
    color: "#7C7C7C",
    fontFamily: "SF-Pro-Display-Regular",
  },
});

export default SignupDetails;
