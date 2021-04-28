import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function BecomeHost(props) {
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView>
        <ImageBackground
          source={require("../images/becomeHost.png")}
          resizeMode="cover"
          style={styles.register}
        />
        <View
          style={{
            position: "absolute",
            left: 15,
            top: 30,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("host")}
          >
            <Image
              source={require("../images/Back.png")}
              style={{ height: hp("4%"), width: wp("8%") }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: wp("90%"),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("next")}
          >
            <Image
              source={require("../images/book.png")}
              style={{
                height: hp("7%"),
                width: wp("70%"),

                borderRadius: wp("40%") / 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  register: {
    height: hp("15%"),
    width: wp("100%"),
  },
  heading: {
    marginLeft: wp("11%"),
    marginTop: wp("10%"),
    fontSize: wp("4.3%"),
    color: "black",
    fontWeight: "bold",
  },
  input: {
    marginLeft: wp("10%"),
    marginTop: -wp("1%"),
    fontSize: wp("4%"),
    color: "#7C7C7C",
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 2,
    marginRight: wp("20%"),
    padding: wp("2%"),
  },
});

export default BecomeHost;
