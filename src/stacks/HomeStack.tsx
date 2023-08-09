import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import Header from "../components/Header";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#eee", height: 110 },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="Home" />,
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Reviews Details" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
