import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Resend, Signup1 } from 'svg';


function SignupScreen(props) {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      {/* <ScrollView style={styles.container}> */}
      {/* <Image
        source={require("../images/signupOTP.png")}
        resizeMode="contain"
        style={{
          width: wp("100%"),
          height: hp("40%"),
          marginTop: hp("10%"),
        }}
      /> */}
      <Signup1
        width={wp("100%")}
        height={hp("40%")}
        marginTop={hp("10%")}
      />
      <Text style={styles.txt}>Enter your 4-digit code</Text>
      <Text style={styles.code}>Code</Text>
      <View
        flexDirection="row"
        style={{
          marginLeft: wp("10%"),
        }}
      >
        <View style={styles.box}>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            placeholderTextColor="#787878"
          />
        </View>
        <View style={styles.box}>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            placeholderTextColor="#787878"
          />
        </View>
        <View style={styles.box}>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            placeholderTextColor="#787878"
          />
        </View>
        <View style={styles.box}>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            placeholderTextColor="#787878"
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        {/* <Image
          source={require("../images/otp2.png")}
          resizeMode="contain"
          style={styles.btn}
        /> */}
        <Resend
          height={hp("5%")}
          width={wp("40%")}
          marginLeft={wp("5%")}
          marginTop={wp("8%")}
        />
      </TouchableOpacity>
      {/* </ScrollView> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  txt: {
    fontSize: wp("4.8%"),
    color: "#181725",
    marginLeft: wp("10%"),
    marginTop: wp("8%"),
    fontFamily: "SF-Pro-Display-Semibold",
  },
  code: {
    fontSize: wp("4%"),
    color: "#7C7C7C",
    fontFamily: "SF-Pro-Display-Semibold",
    marginLeft: wp("10%"),
    marginTop: wp("3%"),
  },
  box: {
    height: hp("5%"),
    width: wp("10%"),
    borderWidth: 0.8,
    marginTop: wp("5%"),
    marginLeft: wp("1%"),
    margin: wp("2%"),
    borderRadius: wp("10%") / 6,
    borderColor: "#787878",
  },
  // btn: {
  //   height: hp("5%"),
  //   width: wp("40%"),
  //   marginLeft: wp("5%"),
  //   marginTop: wp("8%"),
  // },
});

export default SignupScreen;
