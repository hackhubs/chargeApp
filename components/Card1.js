import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function Card1({ status, dis, loc }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../images/card-charge.png")}
          style={{ height: hp("8%"), width: wp("14%") }}
          resizeMode="contain"
        />

        <View style={{ flexDirection: "column", marginLeft: 30 }}>
          <Text
            style={{
              fontSize: wp("6%"),
              right: wp("6%"),
              color: "black",
              fontFamily: "SF-Pro-Display-Regular",
            }}
          >
            PlugIn India
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../images/tick.png")}
              style={{
                right: wp("6%"),
                top: hp("0.2%"),
                width: wp("5%"),
                height: hp("3%"),
              }}
            />
            <Text
              style={{
                color: "#333333",
                fontSize: wp("3.5%"),
                left: -wp("5%"),
                top: hp("0.4%"),
              }}
            >
              {status}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#CAEAFF",
                padding: wp("1.2%"),
                borderRadius: wp("10%") / 4,
                marginLeft: wp("18%"),
                marginTop: -wp("1%"),
              }}
            >
              <Text style={{ fontSize: wp("3%"), fontWeight: "bold" }}>
                {dis} km
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: wp("2.6%"),
          color: "#484848",
          marginLeft: wp("2%"),
          marginTop: hp("1.2%"),
          fontFamily: "SF-Pro-Display-Regular",
        }}
      >
        {loc}
      </Text>
      <View style={{ flexDirection: "row", margin: wp("2%") }}>
        <TouchableOpacity activeOpacity={0.4}>
          <Image
            source={require("../images/navigate.png")}
            style={{
              height: hp("8%"),
              width: wp("20%"),
              borderRadius: hp("4%") / 4,
              marginLeft: wp("7%"),
              marginTop: -wp("2%"),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} style={{ left: wp("3%") }}>
          <Image
            source={require("../images/charge_now.png")}
            style={{
              height: hp("8%"),
              width: wp("20%"),
              borderRadius: hp("4%") / 4,
              marginLeft: wp("12%"),
              marginTop: -wp("2%"),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderColor: "#7c7c7c",
    // borderWidth: 0.3,
    overflow: Platform.OS === "android" ? "hidden" : "",
    paddingLeft: wp("5%"),
    paddingTop: wp("3%"),
    paddingBottom: wp("5%"),
    marginRight: wp("2%"),
    marginTop: hp("3%"),
    height: hp("20%"),
    width: wp("90%"),
    left: wp("5%"),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },
});

export default Card1;
