import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function FinalCharge(props) {
  return (
    <ScrollView style={styles.cont}>
      <SafeAreaView style={styles.cont}>
        <View>
          <ImageBackground
            source={require("../images/finalCharge.png")}
            style={{ width: wp("100%"), height: hp("16%") }}
            resizeMode="cover"
          >
            <Image
              source={require("../images/Back.png")}
              style={{
                width: wp("5%"),
                height: hp("3%"),
                marginLeft: wp("3%"),
                marginTop: wp("9%"),
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
            <Text
              style={{
                fontSize: wp("8%"),
                color: "white",
                fontWeight: "bold",
                padding: wp("1%"),
                marginTop: wp("4%"),
                marginLeft: wp("3%"),
              }}
            >
              7.4 kWh
            </Text>
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
            <Text
              style={{
                fontSize: wp("8%"),
                color: "white",
                fontWeight: "bold",
                padding: wp("1%"),
                marginTop: wp("4%"),
                marginLeft: wp("4%"),
              }}
            >
              48 INR
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: wp("6%"),
            color: "#3D3D3D",
            marginTop: wp("4%"),
            marginLeft: wp("6%"),
          }}
        >
          14/03/21, 7:45 AM
        </Text>
        <Text
          style={{
            fontSize: wp("3.5%"),
            color: "#484848",
            marginTop: wp("2%"),
            marginRight: wp("20%"),
            marginLeft: wp("6%"),
          }}
        >
          Rohini Community Charging Station, B-5/30, New Delhi - 110034
        </Text>
        <View flexDirection="row">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log("receipt")}
          >
            <Image
              source={require("../images/receiptBtn.png")}
              style={styles.btn1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log("report ")}
          >
            <Image
              source={require("../images/reportbtn.png")}
              style={styles.btn2}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../images/continue.png")}
            style={styles.btn3}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
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
  btn1: {
    width: wp("38%"),
    height: hp("5%"),
    marginLeft: wp("8%"),
    borderRadius: wp("6%") / 2,
    marginTop: wp("10%"),
  },
  btn2: {
    width: wp("38%"),
    height: hp("5%"),
    marginLeft: wp("8%"),
    borderRadius: wp("6%") / 2,
    marginTop: wp("10%"),
  },
  btn3: {
    width: wp("60%"),
    height: hp("6%"),
    marginLeft: wp("20%"),
    borderRadius: wp("6%") / 2,
    marginTop: wp("16%"),
  },
});

export default FinalCharge;
