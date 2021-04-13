/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
// import Poppins from '../../android/app/src/main/assets/fonts/Poppins/Poppins-SemiBold.ttf';

const dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#069DFF" : "#DBDBDB";

  return (
    <View
      style={{
        width: wp("2.6%"),
        height: hp("1.5%"),
        marginHorizontal: 5,
        backgroundColor,
        marginBottom: 250,
        borderRadius: wp("2.6%") / 2,
      }}
    />
  );
};

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.next} {...props}>
    <Image
      source={require("../images/next.png")}
      style={{ height: hp("6%"), width: wp("30%") }}
    />
  </TouchableOpacity>
);
function OnBoardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Onboarding
        DotComponent={dots}
        showSkip={false}
        bottomBarHighlight={false}
        NextButtonComponent={Next}
        titleStyles={{
          fontSize: 30,
          fontWeight: "bold",
          bottom: 190,
          fontFamily: "Poppins-SemiBold",
        }}
        onDone={() => navigation.replace("LoginPage")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../images/screen1.png")}
                style={styles.image}
              />
            ),
            title: "CHECK PRICES",
            containerStyles: { paddingBottom: 30 },
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../images/screen2.png")}
                style={styles.image}
              />
            ),
            title: "PRE-BOOK STATIONS",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../images/screen3.png")}
                style={styles.image}
              />
            ),
            title: "CONTROL & MONITOR",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../images/screen4.png")}
                style={styles.image}
              />
            ),
            title: "JOIN OUR NETWORK",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  next: {
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#069DFF",
    marginRight: 40,
    borderRadius: hp("7%") / 6,
    width: wp("80%"),
    height: hp("7%"),
  },
  txt: {
    fontSize: 20,
    color: "white",
  },
  image: {
    width: wp("100%"),
    height: hp("50%"),
    marginBottom: 150,
  },
});

export default OnBoardingScreen;
