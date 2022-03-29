import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTab from "./BottomTab";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Test from "./screens/Test";

const Stack = createBottomTabNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator tabBar={(props) => <BottomTab {...props} />}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen
            name="Test"
            component={Test}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
