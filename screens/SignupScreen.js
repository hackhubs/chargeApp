import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function SignupScreen(props) {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      {/* // <SafeAreaView style={styles.container}> */}
      <View>
        <Image
          source={require("../images/signupOTP.png")}
          resizeMode="contain"
          style={{ width: wp("100%"), height: hp("40%"), marginTop: hp("10%") }}
        />
        <Image
          source={require("../images/text.png")}
          style={{
            marginLeft: wp("2%"),
            marginTop: wp("5%"),
            height: hp("8%"),
            width: wp("100%"),
          }}
          resizeMode="contain"
        />
        <View
          flexDirection="row"
          style={{
            borderBottomWidth: 0.5,
            color: "#E2E2E2",
            width: wp("70%"),
            marginLeft: wp("10%"),
          }}
        >
          <Image
            source={require("../images/India.png")}
            style={{
              width: wp("8%"),
              height: hp("3%"),
              marginLeft: wp("3%"),
              marginTop: wp("5%"),
              marginBottom: wp("2%"),
              borderRadius: wp("8%") / 8,
            }}
          />
          <Text
            style={{
              marginLeft: wp("3%"),
              marginTop: wp("5%"),
              color: "#030303",
              fontFamily: "SF-Pro-Display-Regular",
            }}
          >
            +91
          </Text>
          <TextInput
            style={{
              marginLeft: wp("3%"),
              marginTop: wp("1%"),
              color: "#828282",
            }}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require("../images/otp1.png")}
            resizeMode="contain"
            style={{
              height: hp("5%"),
              width: wp("30%"),
              marginLeft: wp("30%"),
              marginTop: wp("6%"),
            }}
          />
        </TouchableOpacity>
      </View>
      {/* </SafeAreaView> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default SignupScreen;
