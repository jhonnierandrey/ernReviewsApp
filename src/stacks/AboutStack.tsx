import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";
import Header from "../components/Header";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#eee", height: 120 },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="About" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
