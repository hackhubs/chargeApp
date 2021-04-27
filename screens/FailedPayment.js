import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function FailedPayment(props) {
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView style={styles.cont}>
        <View>
          <ImageBackground
            style={styles.img}
            resizeMode="cover"
            source={require("../images/failedPayment.png")}
          >
            <Text style={styles.txt}>{"\u20B9"} 321.52</Text>
            <Image source={require("../images/payFail.png")} />
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    width: wp("100%"),
    height: hp("100%"),
  },
  txt: {
    fontSize: wp("6%"),
    marginTop: wp("90%"),
  },
});

export default FailedPayment;
