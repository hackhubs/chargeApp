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
import StationCard from "../components/StationCard";
import DummyData from "../Data/DummyData";

function StationScreen(props) {
  const header = () => {
    return (
      <View>
        <Image style={styles.img} source={require("../images/stations.png")} />
        <View
          style={{
            position: "absolute",
            left: 15,
            top: 30,
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
          data={DummyData}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => (
            <StationCard status={item.status} dis={item.dis} loc={item.loc} />
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
    height: hp("16%"),
    width: wp("100%"),
  },
  headerStyle: {
    flex: 1,
    height: 40,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: "white",
  },
});

export default StationScreen;
