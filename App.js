import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";
import {
  NavigationContainer,
  Link,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styled from "styled-components/native";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style="dark" />
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Deatil} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Test1" component={Test1} />
            <Stack.Screen name="Test2" component={Test2} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <BottomTab navigation={navigationRef} />
    </>
  );
}

const Home = ({ navigation }) => {
  return (
    <Background>
      <Button
        title="디테일 페이지로 이동"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="Test1로 이동"
        onPress={() => navigation.navigate("Test1")}
      />
      <Button title="Test2 이동" onPress={() => navigation.navigate("Test2")} />
    </Background>
  );
};

const Deatil = ({ navigation, route }) => {
  console.log(route);
  return (
    <Background>
      <Button
        title="홈페이지로 이동"
        onPress={() => navigation.navigate("Home")}
      />
    </Background>
  );
};

const Test1 = ({ navigation, route }) => {
  return (
    <Background>
      <Button
        title="홈페이지로 이동"
        onPress={() => navigation.navigate("Home")}
      />
    </Background>
  );
};

const Test2 = ({ navigation, route }) => {
  return (
    <Background>
      <Button
        title="홈페이지로 이동"
        onPress={() => navigation.navigate("Home")}
      />
    </Background>
  );
};

const Background = styled.View`
  flex: 1;
  padding: 50px;
  background-color: white;
  justify-content: center;
`;
