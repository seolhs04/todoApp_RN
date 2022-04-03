import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detail from "./screens/Detail";
import Home from "./screens/Home";
import AnimationTest from "./screens/AnimationTest";
import ZustandTest from "./screens/ZustandTest";
import { QueryClientProvider, QueryClient } from "react-query";
import PlaceSearch from "./screens/PlaceSearch";

const Stack = createNativeStackNavigator();

export default function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="AnimationTest" component={AnimationTest} />
            <Stack.Screen name="ZustandTest" component={ZustandTest} />
            <Stack.Screen name="PlaceSearch" component={PlaceSearch} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
