import ElecFilsScreen from "./elec-fils";
import { SafeAreaProvider } from "react-native-safe-area-context";
import button from "./button";
import clavier from "./clavier";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function PlayScreen() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <Tab.Navigator>
        <Tab.Screen name="button" component={button} />
        <Tab.Screen name="fils" component={ElecFilsScreen} />
        <Tab.Screen name="clavier" component={clavier} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
