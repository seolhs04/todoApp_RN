import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Detail from "./screens/Detail";
import Home from "./screens/Home";
import AnimationTest from "./screens/AnimationTest";
import ZustandTest from "./screens/ZustandTest";
import { QueryClientProvider, QueryClient } from "react-query";

const Stack = createBottomTabNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={() => null}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="AnimationTest" component={AnimationTest} />
            <Stack.Screen name="ZustandTest" component={ZustandTest} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
