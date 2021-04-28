import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#069DFF" : "#DBDBDB";

  return (
    <View
      style={{
        width: wp("1.8%"),
        height: hp("1%"),
        marginHorizontal: 5,
        backgroundColor,
        marginBottom: 250,
        marginTop: -wp("8%"),
        borderRadius: wp("2.6%") / 2,
      }}
    />
  );
};

const Next = ({ ...props }) => (
  <TouchableHighlight style={styles.next} {...props}>
    <Image source={require("../images/next.png")} style={styles.nextImage} />
  </TouchableHighlight>
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
          fontSize: wp("7%"),
          fontFamily: "Poppins-SemiBold",
          bottom: 200,
          color: "#012E41",
          marginTop: wp("2%"),
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
    backgroundColor: "white",
  },
  next: {
    marginBottom: 70,
    width: wp("80%"),
    marginRight: wp("12%"),
  },
  nextImage: {
    width: wp("85%"),
    height: hp("7%"),
    marginTop: -wp("10%"),
    borderRadius: wp("60%") / 20,
  },
  image: {
    width: wp("100%"),
    height: hp("50%"),
    marginBottom: 140,
  },
});

export default OnBoardingScreen;
