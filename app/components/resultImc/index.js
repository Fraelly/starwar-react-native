import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ResultIMC(props) {
  return (
    <View>
      <Text style={styles.titleResult}>{props.messageResultImc}</Text>
      <Text style={styles.textResult}>{props.resultImc}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleResult: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  textResult: {
    fontSize: 50,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
});
