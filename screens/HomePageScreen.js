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
import { Searchbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Card, Button, Icon } from "react-native-elements";
import CardScreen from "../components/CardScreen";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RecentCard from "../components/RecentCard";

const details = [
  {
    id: "1",
    status: "Available",
    dis: "1.3",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
  {
    id: "2",
    status: "Available",
    dis: "12.4",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
  {
    id: "3",
    status: "Available",
    dis: "1.3",
    loc: "Rohini Community Charging Station,..",
  },
];

const recentDetails = [
  {
    id: "1",
    days: "3",
    dis: "1.3",
    loc: "Rohini Community Charging Station,....",
  },
  {
    id: "2",
    days: "3",
    dis: "12.4",
    loc: "Rohini Community Charging Station,...",
  },
  {
    id: "3",
    days: "3",
    dis: "1.3",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
];

const HomePageScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.cont}>
        <View>
          <ImageBackground
            source={require("../images/chargeScreen1.png")}
            style={{ width: wp("100%"), height: hp("20%") }}
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
              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  marginRight: wp("47%"),
                  marginBottom: wp("20%"),
                  fontWeight: "bold",
                }}
              >
                Hello Moksh,
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            marginTop: -50,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Searchbar
            placeholder="Search for Charging Ports"
            icon={<Feather name="search" size={40} color="#D2D2D2" />}
            iconColor="#D2D2D2"
            style={{ borderRadius: 25 }}
          />
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={require("../images/host.png")}
              style={{
                width: wp("70%"),
                height: hp("10%"),
                marginLeft: 60,
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 15,
              marginLeft: 30,
            }}
          >
            Charging Points Near Me
          </Text>
          <ScrollView>
            <FlatList
              data={details}
              keyExtractor={(details) => details.id}
              horizontal={true}
              renderItem={({ item }) => (
                <CardScreen
                  status={item.status}
                  dis={item.dis}
                  loc={item.loc}
                />
              )}
            />
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginTop: 15,
              marginLeft: 30,
              marginTop: 20,
            }}
          >
            Recent Sessions
          </Text>
          <ScrollView>
            <FlatList
              data={recentDetails}
              keyExtractor={(details) => details.id}
              horizontal={true}
              renderItem={({ item }) => (
                <RecentCard days={item.days} dis={item.dis} loc={item.loc} />
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // marginBottom: 50,
    backgroundColor: "white",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});

export default HomePageScreen;
