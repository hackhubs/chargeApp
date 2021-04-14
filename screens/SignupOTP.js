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

function SignupScreen(props) {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      {/* <ScrollView style={styles.container}> */}
      <Image
        source={require("../images/signup.png")}
        resizeMode="contain"
        style={{
          width: wp("100%"),
          height: hp("40%"),
          marginTop: hp("10%"),
        }}
      />
      <Text
        style={{
          fontSize: wp("5%"),
          color: "#181725",
          marginLeft: wp("10%"),
          marginTop: wp("8%"),
        }}
      >
        Enter your 4-digit code
      </Text>
      <Text
        style={{
          fontSize: wp("4%"),
          color: "#7C7C7C",
          marginLeft: wp("10%"),
          marginTop: wp("3%"),
        }}
      >
        code
      </Text>
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
        <Image
          source={require("../images/otp2.png")}
          resizeMode="contain"
          style={{
            height: hp("5%"),
            width: wp("40%"),
            marginLeft: wp("30%"),
            marginTop: wp("8%"),
          }}
        />
      </TouchableOpacity>
      {/* </ScrollView> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default SignupScreen;
