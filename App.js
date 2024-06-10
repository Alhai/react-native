import { KeyboardAvoidingView, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import PlayScreen from "./Play";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function App() {
  const Stack =
    Platform.OS === "android"
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <Stack.Navigator>
            <Stack.Screen name="Ktane" component={PlayScreen} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
