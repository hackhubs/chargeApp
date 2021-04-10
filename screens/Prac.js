import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CardScreen from "../components/CardScreen";

const details = [
  {
    id: "1",
    status: "available",
    dis: "1.3",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
  {
    id: "2",
    status: "available",
    dis: "1.3",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
  {
    id: "3",
    status: "available",
    dis: "1.3",
    loc: "Rohini Community Charging Station, B-5/30, 2nd Floor, Delhi",
  },
];

function Prac(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={details}
        keyExtractor={(details) => details.id}
        renderItem={({ item }) => (
          <CardScreen status={item.status} dis={item.dis} loc={item.loc} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Prac;
