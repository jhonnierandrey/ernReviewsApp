import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/stacks/HomeStack";
import AboutStack from "./src/stacks/AboutStack";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="About Stack"
          component={AboutStack}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
