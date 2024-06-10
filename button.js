import { Button, StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function BouttonScreen() {
  const [color, setColor] = useState("");
  const [pile, setPile] = useState(0);
  const [valueBtn, setValueBtn] = useState("");
  const [useCase, setUseCase] = useState("");

  const handleSubmit = () => {
    console.log("Submitted values:", { color, pile, valueBtn });
    if (pile <= 1 && color === "red" && valueBtn === "exploser") {
      setUseCase("Relâcher le bouton immédiatement");
    } else {
      setUseCase("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {useCase ? <Text style={styles.result}>{useCase}</Text> : null}
      <Text style={styles.label}>Couleur du bouton:</Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={setColor}
        placeholder="Enter color"
      />
      <Text style={styles.label}>Valeur du bouton:</Text>
      <TextInput
        style={styles.input}
        value={valueBtn}
        onChangeText={setValueBtn}
        placeholder="Enter button value"
      />
      <Text style={styles.label}>Nombre de piles:</Text>
      <TextInput
        style={styles.input}
        value={pile.toString()}
        onChangeText={(text) => setPile(parseInt(text))}
        keyboardType="numeric"
        placeholder="Enter number of piles"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  label: {
    fontSize: 18,
  },
  result: {
    fontSize: 16,
    color: "red",
  },
});
