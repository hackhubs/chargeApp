import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FeedbackScreen from "./FeedbackScreen";
import ReportScreen from "./ReportScreen";
import Editprofile from "./EditProfile";

function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            style={styles.imgCont}
            source={require("../images/profile.png")}
            resizeMode="cover"
          >
            <Text style={styles.textCont}>Moksh Garg</Text>
            <View flexDirection="column">
              <View flexDirection="row">
                <Image
                  source={require("../images/loc.png")}
                  style={styles.loc}
                />
                <Text style={styles.textCont2}>Rohini/City , Delhi/State</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
                <Text style={styles.textCont3}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.imgCont2}>
            Electrify your Establishment today
          </Text>

          <Image
            source={require("../images/profile2.png")}
            resizeMode="contain"
            style={styles.imgCont4}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Work")}
            activeOpacity={0.5}
          >
            <Image
              source={require("../images/img1.png")}
              style={styles.item1}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Refer")}
          >
            <Image
              source={require("../images/img2.png")}
              style={styles.item2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Report")}
          >
            <Image
              source={require("../images/img3.png")}
              style={styles.item2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Feedback")}
          >
            <Image
              source={require("../images/img4.png")}
              style={styles.item2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Rate")}
          >
            <Image
              source={require("../images/img5.png")}
              style={styles.item2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("About")}
          >
            <Image
              source={require("../images/img6.png")}
              style={{
                height: hp("6%"),
                width: wp("80%"),
                marginLeft: wp("8%"),
                marginTop: -wp("2%"),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>

          <View flexDirection="row">
            <Text
              style={{
                color: "#292929",
                marginLeft: wp("8%"),
                marginTop: wp("3%"),
              }}
            >
              Connect with us
            </Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                source={require("../images/twitter.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("btn clicked")}>
              <Image
                source={require("../images/fb.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../images/insta.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../images/in.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../images/net.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imgCont: {
    width: wp("100%"),
    height: hp("25%"),
  },
  textCont: {
    fontSize: wp("8%"),
    color: "white",
    marginTop: hp("3%"),
    marginLeft: hp("4%"),
    fontFamily: "SF-Pro-Text-Bold",
  },
  loc: {
    marginTop: hp("0.4%"),
    marginLeft: wp("8%"),
    height: hp("1.8%"),
    width: wp("2.6%"),
  },
  textCont2: {
    color: "white",
    fontSize: wp("3%"),
    marginLeft: wp("3%"),
    marginTop: wp("0.5%"),
    fontFamily: "SF-Pro-Text-Semibold",
  },
  textCont3: {
    marginLeft: wp("8%"),
    marginTop: wp("4%"),
    fontSize: wp("3.4%"),
    color: "white",
    textDecorationLine: "underline",
    fontFamily: "SF-Pro-Text-Semibold",
  },
  imgCont2: {
    fontSize: wp("4%"),
    color: "#292929",
    marginTop: -wp("8%"),
    marginLeft: wp("8%"),
    fontFamily: "SF-Pro-Text-Medium",
  },
  imgCont3: {
    height: hp("8%"),
    width: wp("80%"),
    marginLeft: wp("4%"),
  },
  imgCont4: {
    height: hp("8%"),
    width: wp("80%"),
    marginTop: wp("4%"),
    marginLeft: -wp("5%"),
  },
  item1: {
    height: hp("6%"),
    width: wp("80%"),
    marginLeft: wp("8%"),
    marginTop: wp("2%"),
  },
  item2: {
    height: hp("6%"),
    width: wp("80%"),
    marginLeft: wp("8%"),
    marginTop: -wp("2%"),
  },
  icon: {
    height: hp("3%"),
    width: wp("5%"),
    marginLeft: wp("4%"),
    marginTop: wp("2%"),
  },
  logout: {
    marginLeft: -wp("55%"),
    color: "white",
    textAlign: "center",
    marginBottom: wp("5%"),
    height: hp("4%"),
    width: wp("30%"),
    padding: 6,
    borderRadius: wp("8%") / 4,
    backgroundColor: "#069DFF",
    marginTop: wp("3%"),
  },
});

export default ProfileScreen;
