import { Button, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";

export default function ClavierScreen() {
  const [selectedList, setSelectedList] = useState(null);
  const premiereListe = [
    { name: "symbol1" },
    { name: "symbol2" },
    { name: "symbol3" },
    { name: "symbol4" },
    { name: "symbol5" },
    { name: "symbol6" },
    { name: "symbol7" },
  ];

  const secondeListe = [
    { name: "symbol8" },
    { name: "symbol1" },
    { name: "symbol7" },
    { name: "symbol9" },
    { name: "symbol10" },
    { name: "symbol7" },
    { name: "symbol11" },
  ];

  const linkImage = {
    symbol1: require("./assets/symbol1.jpeg"),
    symbol2: require("./assets/symbol2.jpeg"),
    symbol3: require("./assets/symbol3.jpeg"),
    symbol4: require("./assets/symbol4.jpeg"),
    symbol5: require("./assets/symbol5.jpeg"),
    symbol6: require("./assets/symbol6.jpeg"),
    symbol7: require("./assets/symbol7.jpeg"),
    symbol8: require("./assets/symbol8.jpeg"),
    symbol9: require("./assets/symbol9.jpeg"),
    symbol10: require("./assets/symbol10.jpeg"),
    symbol11: require("./assets/symbol11.jpeg"),
  };
  return (
    <View style={styles.container}>
      <View
        style={
          selectedList === 1
            ? styles.selectedListContainer
            : styles.listContainer
        }
      >
        {premiereListe.map((item, index) => (
          <Image
            key={index}
            source={linkImage[item.name]}
            style={styles.imageStyle}
          />
        ))}
        <Button title="Select List 1" onPress={() => setSelectedList(1)} />
      </View>
      <View
        style={
          selectedList === 2
            ? styles.selectedListContainer
            : styles.listContainer
        }
      >
        {secondeListe.map((item, index) => (
          <Image
            key={`second-${index}`}
            source={linkImage[item.name]}
            style={styles.imageStyle}
          />
        ))}
        <Button title="Select List 2" onPress={() => setSelectedList(2)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  listContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  selectedListContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "green",
  },
});
