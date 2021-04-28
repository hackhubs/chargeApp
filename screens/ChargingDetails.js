import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
// import LinearGradient from "react-native-linear-gradient";
// import RadioButton from "../components/RadioButton";

// const PROP = [
//   {
//     key: "1",
//     text: "Paytm",
//   },
//   {
//     key: "2",
//     text: "Google Pay",
//   },
//   {
//     key: "3",
//     text: "Net Banking",
//   },
//   {
//     key: "4",
//     text: "Card",
//   },
// ];

function ChargingDetails({ navigation }) {
  return (
    <ScrollView style={styles.cont}>
      <SafeAreaView style={styles.cont}>
        <View>
          <ImageBackground
            source={require("../images/chargeHeader.png")}
            style={{ width: wp("100%"), height: hp("16%") }}
            resizeMode="cover"
          >
            <View flexDirection="row">
              <TouchableOpacity onPress={() => console.log("btn ")}>
                <Image
                  source={require("../images/Back.png")}
                  style={{
                    width: wp("7%"),
                    height: hp("4%"),
                    marginLeft: wp("6%"),
                    marginTop: wp("8%"),
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.txt}>Charging Details</Text>
            </View>
          </ImageBackground>
        </View>

        <View flexDirection="column">
          <View style={styles.box3} flexDirection="row">
            <View flexDirection="row" style={{ marginRight: wp("4%") }}>
              <Image
                source={require("../images/time.png")}
                style={{
                  height: hp("6%"),
                  width: wp("11%"),
                  margin: wp("3%"),
                  borderRadius: wp("10%") / 8,
                }}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: wp("5.2%"),
                    marginTop: wp("2%"),
                  }}
                >
                  Time
                </Text>
                <Text style={{ fontSize: wp("3.4%"), color: "white" }}>
                  Changed
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: wp("6%"),
                  color: "white",
                  fontWeight: "bold",
                  padding: wp("1%"),
                  marginTop: wp("1.4%"),
                  marginLeft: wp("6%"),
                }}
              >
                2h 35min
              </Text>
            </View>
          </View>

          <View style={styles.box1} flexDirection="column">
            <View flexDirection="row">
              <Image
                source={require("../images/energy-icon.png")}
                style={{
                  height: hp("6%"),
                  width: wp("11%"),
                  margin: wp("3%"),
                  borderRadius: wp("10%") / 8,
                }}
              />
              <View style={{ marginRight: wp("4%") }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: wp("5.2%"),
                    marginTop: wp("2%"),
                  }}
                >
                  Energy
                </Text>
                <Text style={{ fontSize: wp("3.4%"), color: "white" }}>
                  Consumed
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: wp("6%"),
                    color: "white",
                    fontWeight: "bold",
                    padding: wp("1%"),
                    marginTop: wp("2%"),
                    marginLeft: wp("6%"),
                  }}
                >
                  7.4 kWh
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.box2} flexDirection="row">
            <View flexDirection="row" style={{ marginRight: wp("4%") }}>
              <Image
                source={require("../images/cost.png")}
                style={{
                  height: hp("6%"),
                  width: wp("11%"),
                  margin: wp("3%"),
                  borderRadius: wp("10%") / 8,
                }}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: wp("5.2%"),
                    marginTop: wp("2%"),
                  }}
                >
                  Amount
                </Text>
                <Text style={{ fontSize: wp("3.4%"), color: "white" }}>
                  Payable
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: wp("6%"),
                  color: "white",
                  fontWeight: "bold",
                  padding: wp("1%"),
                  marginTop: wp("2%"),
                  marginLeft: wp("5%"),
                }}
              >
                {"\u20B9"} 148.45
              </Text>
            </View>
          </View>
        </View>

        <View
          flexDirection="row"
          style={{
            alignItems: "center",
            borderRadius: 8,
            borderWidth: 0.3,
            height: hp("10%"),
            marginTop: wp("15%"),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginTop: wp("40%"),
              marginLeft: wp("5%"),
              fontSize: wp("6%"),
              marginTop: wp("2%"),
              color: "black",
            }}
          >
            {"\u20B9"} 148.45
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("AppBottom")}>
            <Image
              source={require("../images/payNow.png")}
              style={{
                height: hp("6%"),
                width: wp("50%"),
                marginLeft: wp("12%"),
                marginTop: wp("3%"),
                borderRadius: wp("8%") / 4,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  txt: {
    color: "white",
    fontSize: wp("8%"),
    fontWeight: "bold",
    letterSpacing: 2,
    marginLeft: wp("5%"),
    marginTop: wp("7%"),
  },
  box1: {
    backgroundColor: "#03AD70",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("10%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    backgroundColor: "#2D9CDB",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("10%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    backgroundColor: "#4B5358",
    height: hp("16%"),
    width: wp("70%"),
    borderRadius: hp("20%") / 8,
    marginLeft: wp("10%"),
    padding: 5,
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChargingDetails;
