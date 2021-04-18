import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ChargingStatus = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.cont}>
      <View>
        <ImageBackground
          source={require("../images/charge.png")}
          style={{ width: "100%", height: 150 }}
          resizeMode="cover"
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 34, color: "white" }}>
              Charging Station
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        <View
          style={{ flexDirection: "column", marginLeft: 30, marginRight: 60 }}
        >
          <Text style={styles.text}>Energy</Text>
          <Text style={styles.subText}>1.2kWh</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 80 }}>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.subText}>{"\u20B9"} 8.6</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ flexDirection: "column", marginLeft: 30, marginRight: 70 }}
        >
          <Text style={styles.text}>Voltage</Text>
          <Text style={styles.subText}>248V</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 80 }}>
          <Text style={styles.text}>Current</Text>
          <Text style={styles.subText}>7.2 Amp</Text>
        </View>
      </View>
      <View style={styles.cont3}>
        <View style={styles.circle}>
          <Text style={styles.charge}>CHARGING</Text>
          <Text style={styles.charge2}>ON</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Success")}>
          <Text style={{ marginTop: 20 }}>Go to payment</Text>
        </TouchableOpacity>
      </View>

      {/* <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 30,
              marginTop: 15,
            }}
          >
            Charging Profile
          </Text>
          <Image
            source={require("../images/Power.png")}
            style={{ width: "90%", height: 150, marginLeft: 20, marginTop: 10 }}
            resizeMode="cover"
          />
        </View> */}
    </SafeAreaView>
  );
};
export default ChargingStatus;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
  },
  subText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cont3: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: "#069DFF",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#069DFF",
    shadowColor: "#069DFF",
    shadowOffset: {
      width: 5.3,
      height: 5.3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 4,
  },
  charge: {
    fontSize: 12,
    color: "white",
    marginTop: 30,
  },
  charge2: {
    fontSize: 36,
    color: "white",
  },
});
