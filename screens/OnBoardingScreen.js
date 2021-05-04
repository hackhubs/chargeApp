import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Screen1, NextBtn, Screen2, Screen3, Screen4 }
  from '../images/svg';

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
  <TouchableOpacity style={styles.next} {...props}>

    <NextBtn
      width={wp("85%")}
      height={hp("7%")}
      marginTop={-wp("10%")}
      borderRadius={wp("60%") / 20}
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
          fontSize: wp("7%"),
          fontFamily: "Poppins-SemiBold",
          bottom: 200,
          color: "#012E41",
          marginTop: wp("2%"),
        }}
        // onDone={() => navigation.replace("LoginPage")}
        pages={[
          {
            backgroundColor: "#fff",
            image: (

              <Screen1
                width={wp("100%")}
                height={hp("50%")}
                marginBottom={140}
              />
            ),
            title: "CHECK PRICES",
            subtitle: "1",
            containerStyles: { paddingBottom: 30 },
          },
          {
            backgroundColor: "#fff",
            image: (

              <Screen2
                width={wp("100%")}
                height={hp("50%")}
                marginBottom={140}
              />
            ),
            title: "PRE-BOOK STATIONS",
            subtitle: "1",
          },
          {
            backgroundColor: "#fff",
            image: (

              <Screen3
                width={wp("100%")}
                height={hp("50%")}
                marginBottom={140}
              />
            ),
            title: "CONTROL & MONITOR",
            subtitle: "1",
          },
          {
            backgroundColor: "#fff",
            image: (

              <Screen4
                width={wp("100%")}
                height={hp("50%")}
                marginBottom={140}
              />
            ),
            title: "JOIN OUR NETWORK",
            subtitle: "1"
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
  // nextImage: {
  //   width: wp("85%"),
  //   height: hp("7%"),
  //   marginTop: -wp("10%"),
  //   borderRadius: wp("60%") / 20,
  // },
  image: {
    width: wp("100%"),
    height: hp("50%"),
    marginBottom: 140,
  },
});

export default OnBoardingScreen;
