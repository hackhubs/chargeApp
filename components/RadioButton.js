import React, { Component } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const { PROP } = this.props;
    const { value } = this.state;

    return (
      <View>
        {PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}
              >
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: wp("5%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: wp("3%"),
  },
  radioText: {
    marginRight: wp("4%"),
    fontSize: wp("4.5%"),
    marginLeft: wp("5%"),
    color: "#031925",
  },
  radioCircle: {
    height: hp("2.6%"),
    width: wp("5%"),
    borderRadius: wp("6%") / 2,
    borderWidth: 2,
    borderColor: "#9F9F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: wp("3%"),
    height: hp("2%"),
    borderRadius: wp("4%") / 2,
    backgroundColor: "#28A7EB",
    borderColor: "#28A7EB",
  },
});
