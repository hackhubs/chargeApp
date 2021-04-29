import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SessionCard from "../components/SessionCard";
import DataSession from "../Data/DataSession";

function SessionScreen(props) {
  const header = () => {
    return (
      <View>
        <Image style={styles.img} source={require("../images/session.png")} />
        <View
          style={{
            position: "absolute",
            left: 10,
            top: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log("back btn")}
          >
            <Image
              source={require("../images/Back.png")}
              style={{ height: hp("4%"), width: wp("8%") }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={DataSession}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => (
            <SessionCard status={item.status} days={item.days} loc={item.loc} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  img: {
    height: hp("22%"),
    width: wp("100%"),
  },
});

export default SessionScreen;
