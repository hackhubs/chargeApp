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

const RecentCard = ({ days, dis, loc }) => {
  return (
    <View style={styles.cont}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../images/card-charge.png")}
          style={{ height: hp("4%"), width: wp("11%") }}
          resizeMode="contain"
        />
        <View style={{ flexDirection: "column", marginLeft: 30 }}>
          <Text style={{ fontSize: wp("2%"), right: wp("6%"), color: "black" }}>
            Charged {days} days ago
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: wp("3%"),
                right: wp("6%"),
                fontWeight: "bold",
              }}
            >
              PlugIn India
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#CAEAFF",
                padding: 3,
                borderRadius: 8,
                top: hp("0.1%"),
                right: wp("5%"),
              }}
            >
              <Text style={{ fontSize: wp("2%"), fontWeight: "bold" }}>
                {dis} km
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: wp("2%"),
                marginRight: 30,
                marginTop: hp("1%"),
                right: 60,
                width: 200,
                color: "#484848",
              }}
            >
              {loc}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", margin: wp("5%") }}>
        <TouchableOpacity activeOpacity={0.4}>
          <Image
            source={require("../images/navigate.png")}
            style={{
              height: hp("5%"),
              width: wp("15%"),
              borderRadius: hp("4%") / 4,
              top: -hp("2%"),
              right: hp("2%"),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4} style={{ left: wp("2%") }}>
          <Image
            source={require("../images/charge_now.png")}
            style={{
              height: hp("5%"),
              width: wp("15%"),
              borderRadius: hp("4%") / 4,
              top: -hp("2%"),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderRadius: 25,
    borderWidth: 1,
    overflow: Platform.OS === "android" ? "hidden" : "",
    padding: 5,
    marginRight: wp("2%"),
    marginTop: hp("3%"),
    height: hp("13%"),
    width: wp("40%"),
    left: wp("2%"),
    // elevation: 5,
    // shadowColor: "black",
    // shadowRadius: 4,
    // shadowOpacity: 0.25,
    // shadowOffset: {
    //   height: 2,
    //   width: 1,
    // },
  },
});

export default RecentCard;
