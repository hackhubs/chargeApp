// function FailedPayment(props) {
//   return (
//     <SafeAreaView style={styles.cont}>
//       <ScrollView style={styles.cont}>
//         <View>
//           <ImageBackground
//             style={styles.img}
//             resizeMode="cover"
//             source={require("../images/failedPayment.png")}
//           >
//             <Text style={styles.txt}>{"\u20B9"} 321.52</Text>
//             <Image source={require("../images/payFail.png")} />
//           </ImageBackground>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const FailedPayment = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/failedPayment.png")}
        style={{ width: wp("100%"), height: hp("94%") }}
        resizeMode="cover"
      />
      <Text style={styles.txt}>₹ 321.52</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require("../images/payFail.png")}
          style={{
            height: hp("5.5%"),
            width: wp("35%"),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    position: "absolute",
    marginTop: 346,
    marginLeft: 15,
  },
  txt: {
    position: "absolute",
    marginTop: 276,
    marginLeft: 20,
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
});

export default FailedPayment;
