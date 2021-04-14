import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RadioButton from "../components/RadioButton";

const PROP = [
  {
    key: "1",
    text: "Paytm",
  },
  {
    key: "2",
    text: "Google Pay",
  },
  {
    key: "3",
    text: "Net Banking",
  },
  {
    key: "4",
    text: "Card",
  },
];

function ChargingDetails(props) {
  return (
    <SafeAreaView style={styles.cont}>
      <View>
        <ImageBackground
          source={require("../images/details.png")}
          style={{ width: wp("100%"), height: hp("16%") }}
          resizeMode="cover"
        >
          <Image
            source={require("../images/Back.png")}
            style={{
              width: wp("5%"),
              height: hp("3%"),
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
          />
        </ImageBackground>
      </View>

      <View flexDirection="row">
        <View style={styles.box1} flexDirection="column">
          <View flexDirection="row">
            <Image
              source={require("../images/energy-icon.png")}
              style={{
                height: hp("5%"),
                width: wp("10%"),
                margin: wp("3%"),
                borderRadius: wp("10%") / 8,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: wp("5%"),
                  marginTop: wp("2%"),
                }}
              >
                Energy
              </Text>
              <Text style={{ fontSize: wp("3.5%"), color: "white" }}>
                Consumed
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: wp("9%"),
                color: "white",
                fontWeight: "bold",
                padding: wp("1%"),
                marginTop: wp("4%"),
              }}
            >
              7.4 kWh
            </Text>
          </View>
        </View>
        <View style={styles.box2} flexDirection="column">
          <View flexDirection="row">
            <Image
              source={require("../images/cost.png")}
              style={{
                height: hp("5%"),
                width: wp("10%"),
                margin: wp("3%"),
                borderRadius: wp("10%") / 8,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: wp("5%"),
                  marginTop: wp("2%"),
                }}
              >
                Amount
              </Text>
              <Text style={{ fontSize: wp("3.5%"), color: "white" }}>
                Payable
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: wp("9%"),
                color: "white",
                fontWeight: "bold",
                padding: wp("1%"),
                marginTop: wp("4%"),
                marginLeft: wp("2%"),
              }}
            >
              48 INR
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginLeft: wp("5%"),
            marginTop: wp("3%"),
            fontWeight: "bold",
            color: "#3D3D3D",
            fontSize: wp("7%"),
          }}
        >
          Complete Payment
        </Text>
        <View style={styles.container}>
          <RadioButton PROP={PROP} />
        </View>
      </View>
      <View
        flexDirection="row"
        style={{
          alignItems: "center",
          marginTop: wp("30%"),
          borderRadius: 8,
          borderWidth: 0.3,
          height: hp("11%"),
        }}
      >
        <View flexDirection="column">
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: wp("5%"),
              fontSize: wp("8%"),
              color: "black",
            }}
          >
            {"\u20B9"} 48
          </Text>
          <Image
            source={require("../images/view.png")}
            style={{
              height: hp("1.3%"),
              width: wp("25%"),
              marginLeft: wp("3%"),
            }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require("../images/payNow.png")}
            style={{
              height: hp("6%"),
              width: wp("60%"),
              marginLeft: wp("7%"),
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  box1: {
    backgroundColor: "#03AD70",
    height: hp("19%"),
    width: wp("40%"),
    borderRadius: hp("20%") / 8,
    margin: wp("5%"),
    padding: 5,
    marginTop: hp("5%"),
  },
  box2: {
    backgroundColor: "#2D9CDB",
    height: hp("19%"),
    width: wp("40%"),
    borderRadius: hp("20%") / 8,
    margin: wp("5%"),
    padding: 5,
    marginTop: hp("5%"),
  },
});

export default ChargingDetails;
