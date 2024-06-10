import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ElecFilsScreen() {
  const [nbrFils, setNbrFils] = useState(0);
  const [selectedFil, setSelectedFil] = useState(null);
  const [colors, setColors] = useState({});

  const handleNbrFilsChange = (text) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ""), 10);
    setNbrFils(Math.min(numericValue || 0, 6));
  };

  const handleColorSelect = (color) => {
    if (selectedFil !== null) {
      setColors((prev) => ({ ...prev, [selectedFil]: color }));
    }
  };

  const colorChoices = ["yellow", "red", "blue", "white", "black"];

  const filsButtons = Array.from({ length: nbrFils }, (_, index) => (
    <Button
      key={index}
      title={`Fils ${index + 1} ${colors[index] ? `(${colors[index]})` : ""}`}
      onPress={() => setSelectedFil(index)}
      color={selectedFil === index ? "blue" : undefined}
    />
  ));

  return (
    <SafeAreaProvider>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.label}>Entrer le nombre de fils:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={handleNbrFilsChange}
          style={styles.input}
          value={nbrFils.toString()}
          placeholder="Entrer le nombre de fils"
        />
        {filsButtons}
        <View style={styles.colorsContainer}>
          {colorChoices.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorSquare,
                {
                  backgroundColor: color,
                  borderColor: "black",
                  borderWidth: 1,
                },
              ]}
              onPress={() => handleColorSelect(color)}
            >
              <Text style={styles.colorText}>{color}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
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
  colorsContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  colorSquare: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
  },
  colorText: {
    color: "white",
    fontWeight: "bold",
  },
});
