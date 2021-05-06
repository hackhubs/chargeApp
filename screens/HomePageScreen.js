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
// import { Feather } from "@expo/vector-icons";
// import { Card, Button, Icon } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Carousel from "../components/Carousel";
import Details from "../Data/Details";
import RecentDetails from "../Data/RecentDetails";
import CarouselRecent from '../components/CarouselRecent'
import { HomeScreen, Host } from 'svg'
import { BoxShadow } from 'react-native-shadow'

const HomePageScreen = ({ navigation }) => {

  const shadowOpt = {
    width: wp("60%"),
    height: hp("5%"),
    color: "#069DFF",
    border: 12,
    // radius: 6,
    opacity: 0.2,
    x: 12,
    y: 24,
    style: { marginBottom: hp("8%") }


  }

  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView style={styles.cont}>
        <View>

          <HomeScreen
            width={wp("100%")}
            height={hp("22%")}
          />

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
                marginBottom: wp("15%"),
                fontFamily: "SF-Pro-Text-Bold",
              }}
            >
              Hello Moksh,
            </Text>
          </View>

        </View>


        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginLeft: wp("15%"), marginTop: -wp("6%") }}
          >
            <BoxShadow setting={shadowOpt}>


              <Host
                width={wp("70%")}
                height={hp("12%")}
              />
            </BoxShadow>
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
              data={Details}
              keyExtractor={(details) => details.id}
              horizontal={true}
              renderItem={({ item }) => (
                <Card1 status={item.status} dis={item.dis} loc={item.loc} />
              )}
            />
          </ScrollView> */}
        </View>

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
          <CarouselRecent data={RecentDetails} />

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
