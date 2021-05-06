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
import {
  ProfileHeader, Loc, Icon1, Icon2, Icon3, Icon4,
  Host, Icon5, Icon6, Logout, Facebook, Instagram, Twitter, LinkedIn, Web
} from 'svg'
import { BoxShadow } from 'react-native-shadow'

function ProfileScreen({ navigation }) {

  const shadowOpt = {
    width: wp("52%"),
    height: hp("5%"),
    color: "#069DFF",
    border: 10,
    // radius: 6,
    opacity: 0.2,
    x: 30,
    y: 22,
    style: { marginBottom: hp("3%") }


  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <ProfileHeader
            width={wp("100%")}
            height={hp("28%")}
          />
          <Text style={styles.textCont}>Moksh Garg</Text>
          <View flexDirection="column">
            <View flexDirection="row">
              <Loc
                height={hp("5%")}
                width={wp("4%")}
                position={"absolute"}
                top={-hp("18.5%")}
                left={wp("14%")}

              />
              <Text style={styles.textCont2}>Rohini/City , Delhi/State</Text>
            </View>
            <View style={{
              position: "absolute",
              top: -hp("13%"),
              left: wp("16%"),
            }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => console.log("view")}>
                <Text style={styles.textCont3}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.imgCont2}>
            Electrify your Establishment today
          </Text>
          <BoxShadow setting={shadowOpt}>

            <Host
              height={hp("8%")}
              width={wp("80%")}
              marginTop={wp("3%")}
              marginLeft={-wp("5%")}
            />

          </BoxShadow>

        </View>
        <View style={{
          marginLeft: wp("8%"),
          marginTop: wp("2%"),

        }}>
          <TouchableOpacity
            onPress={() => console.log("work")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>how veCharge works</Text>
              <Icon1
                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("34%")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("refer")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>
                Refer a friend
                </Text>
              <Icon2

                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("46%")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("work")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>
                Report an issue
                </Text>
              <Icon3

                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("42")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("work")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>
                Give us feedback
                </Text>
              <Icon4

                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("40%")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("work")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>
                Rate us
                </Text>
              <Icon5

                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("56%")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("work")}
            activeOpacity={0.5}

          >

            <View flexDirection="row">
              <Text style={styles.item1}>
                About
                </Text>
              <Icon6

                height={hp("8%")}
                width={wp("5%")}
                marginTop={hp("0.2%")}
                marginLeft={wp("58%")}
              />
            </View>
            <View style={styles.line}></View>

          </TouchableOpacity>

        </View>


        {/* <View style={{
          marginLeft: wp("8%"),
          marginTop: -wp("2%"),
        }}>
          <TouchableOpacity

            activeOpacity={0.5}
            onPress={() => console.log("refer")}
          >

            <Icon2
              height={hp("6%")}
              width={wp("82%")}

            />
          </TouchableOpacity>
        </View>
        <View style={{
          marginLeft: wp("8%"),
          marginTop: -wp("2%"),
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Report")}
          >
            <Item3
              height={hp("6%")}
              width={wp("82%")}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          marginLeft: wp("8%"),
          marginTop: -wp("2%"),
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Feedback")}
          >
            <Item4
              height={hp("6%")}
              width={wp("82%")}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          marginLeft: wp("8%"),
          marginTop: -wp("2%"),
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Rate")}
          >
            <Item5
              height={hp("6%")}
              width={wp("82%")}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          marginLeft: wp("8%"),
          marginTop: -wp("2%"),
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("About")}
          >
            <Item6

              height={hp("6%")}
              width={wp("82%")}
            />
          </TouchableOpacity>
        </View> */}
        <View style={{
          marginLeft: wp("8%"),
          height: hp("10%"),
          width: wp("30%"),
        }}>
          <TouchableOpacity
            onPress={() => console.log("logout")}
            activeOpacity={0.5}

          >
            <Logout
              height={hp("10%")}
              width={wp("30%")}
            />
          </TouchableOpacity>
        </View>

        <View flexDirection="row">
          <Text
            style={{
              color: "#292929",
              fontSize: wp("3.6%"),
              marginLeft: wp("8%"),
              marginTop: wp("2%"),
            }}
          >
            Connect with us
            </Text>
          <TouchableOpacity
            onPress={() => console.log("twitter")}
            style={{
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
            activeOpacity={0.5}>
            <Twitter
              height={hp("4%")}
              width={wp("7%")}

            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("fb")}
            style={{
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
            activeOpacity={0.5}>
            <Facebook
              height={hp("3.6%")}
              width={wp("7%")}

            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("insta")}
            style={{
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
            activeOpacity={0.5}>
            <Instagram
              height={hp("3.6%")}
              width={wp("7%")}

            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("linkedin")}
            style={{
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
            activeOpacity={0.5}>
            <LinkedIn
              height={hp("3.6%")}
              width={wp("7%")}

            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("web")}
            style={{
              marginLeft: wp("4%"),
              marginTop: wp("2%"),
            }}
            activeOpacity={0.5}>
            <Web
              height={hp("3.6%")}
              width={wp("7%")}

            />
          </TouchableOpacity>

        </View>

      </SafeAreaView >
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  textCont: {
    fontSize: wp("8%"),
    color: "white",
    marginTop: hp("4%"),
    marginLeft: hp("8%"),
    position: "absolute",
    fontFamily: "SF-Pro-Text-Bold",
  },

  textCont2: {
    color: "white",
    fontSize: wp("3%"),
    position: "absolute",
    top: -hp("17%"),
    left: wp("20%"),

    fontFamily: "SF-Pro-Text-Semibold",
  },
  textCont3: {
    fontSize: wp("3.3%"),
    color: "white",
    textDecorationLine: "underline",
    fontFamily: "SF-Pro-Text-Semibold",
  },
  imgCont2: {
    fontSize: wp("4%"),
    color: "#292929",
    marginTop: -wp("12%"),
    marginLeft: wp("8%"),
    fontFamily: "SF-Pro-Text-Medium",
  },
  imgCont3: {
    height: hp("8%"),
    width: wp("80%"),
    marginLeft: wp("4%"),
  },
  item1: {
    fontFamily: "SF-Pro-Text-Regular",
    color: "#292929",
    marginTop: hp("2.5%"),
    fontSize: wp("3.4%")
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: wp("80%"),
    marginTop: -hp("2.5%"),
  }
  // logout: {
  //   marginLeft: -wp("55%"),
  //   color: "white",
  //   textAlign: "center",
  //   marginBottom: wp("5%"),
  //   height: hp("4%"),
  //   width: wp("30%"),
  //   padding: 6,
  //   borderRadius: wp("8%") / 4,
  //   backgroundColor: "#069DFF",
  //   marginTop: wp("3%"),
  // },
});

export default ProfileScreen;
