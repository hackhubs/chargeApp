import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
// import { Searchbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Card, Button, Icon } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Recent from "../components/Recent";
import Card1 from "../components/Card1";
import Carousel from "../components/Carousel";
import Details from "../Data/Details";
import RecentDetails from "../Data/RecentDetails";

const HomePageScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView style={styles.cont}>
        <View>
          <ImageBackground
            source={require("../images/chargeScreen1.png")}
            style={{ width: wp("100%"), height: hp("18%") }}
            resizeMode="cover"
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                left: wp("5%"),
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  marginRight: wp("47%"),
                  marginBottom: wp("20%"),
                  fontFamily: "SF-Pro-Text-Bold",
                }}
              >
                Hello Moksh,
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* <View
          style={{
            marginTop: -50,
            marginLeft: 10,
            marginRight: 10,
          }}
        > */}
        {/* <Searchbar
            placeholder="Search for Charging Ports"
            icon={<Feather name="search" size={40} color="#D2D2D2" />}
            iconColor="#D2D2D2"
            style={{ borderRadius: 25 }}
          /> */}
        {/* </View> */}
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginLeft: wp("15%"), marginTop: -wp("4%") }}
          >
            <Image
              source={require("../images/host.png")}
              style={{
                width: wp("70%"),
                height: hp("10%"),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View flexDirection="row">
            <Text
              style={{
                fontFamily: "SF-Pro-Display-Semibold",
                color: "#181725",
                fontSize: wp("5%"),
                marginTop: wp("2%"),
                marginLeft: wp("5%"),
              }}
            >
              Charging Points Near Me
            </Text>
            <TouchableOpacity
              onPress={() => console.log("more")}
              activeOpacity={0.5}
              style={{ marginLeft: wp("10%"), marginTop: wp("2%") }}
            >
              <Image
                style={{
                  width: wp("20%"),
                  height: hp("3%"),

                  borderRadius: wp("6%") / 2,
                }}
                source={require("../images/more.png")}
              />
            </TouchableOpacity>
          </View>
          <Carousel data={Details} />
          {/* <ScrollView style={{ marginTop: -wp("2%") }}>
            <FlatList
              data={details}
              keyExtractor={(details) => details.id}
              horizontal={true}
              renderItem={({ item }) => (
                <Card1 status={item.status} dis={item.dis} loc={item.loc} />
              )}
            />
          </ScrollView> */}
        </View>
        {/* <View flexDirection="row" style={{ marginTop: wp("1%") }}>
          <View style={styles.activeCircle}></View>
          <View style={styles.inactiveCircle}></View>
          <View style={styles.inactiveCircle}></View>
        </View> */}
        <View>
          <View flexDirection="row">
            <Text
              style={{
                fontSize: 22,
                marginTop: 15,
                marginLeft: 30,
                marginTop: 20,
                fontFamily: "SF-Pro-Display-Semibold",
                color: "#181725",
              }}
            >
              Recent Sessions
            </Text>

            <TouchableOpacity
              onPress={() => console.log("more")}
              activeOpacity={0.5}
              style={{ marginLeft: wp("10%"), marginTop: wp("6%") }}
            >
              <Image
                style={{
                  width: wp("20%"),
                  height: hp("3%"),

                  borderRadius: wp("6%") / 2,
                }}
                source={require("../images/more.png")}
              />
            </TouchableOpacity>
          </View>

          {/* <ScrollView style={{ marginTop: -wp("2%") }}>
            <FlatList
              data={RecentDetails}
              keyExtractor={(RecentDetails) => RecentDetails.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Recent days={item.days} dis={item.dis} loc={item.loc} />
              )}
            />
          </ScrollView>
          <View flexDirection="row" style={{ marginTop: wp("1%") }}>
            <View style={styles.activeCircle}></View>
            <View style={styles.inactiveCircle}></View>
            <View style={styles.inactiveCircle}></View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: "#34495e",
  // },
  activeCircle: {
    borderRadius: wp("7%") / 2,
    width: wp("2%"),
    height: hp("1%"),
    backgroundColor: "#069DFF",
    marginLeft: wp("42%"),
    marginTop: wp("3%"),
  },
  inactiveCircle: {
    borderRadius: wp("7%") / 2,
    width: wp("2%"),
    height: hp("1%"),
    backgroundColor: "#DBDBDB",
    marginLeft: wp("3%"),
    marginTop: wp("3%"),
  },
});

export default HomePageScreen;
