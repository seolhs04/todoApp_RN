import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Deatil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <Background>
      <Text>{Math.round(Math.random() * 10)}</Text>
      <Button
        title="디테일 페이지로 이동"
        onPress={() => navigation.navigate("detail")}
      />
    </Background>
  );
};

const Deatil = ({ navigation }) => {
  return (
    <Background>
      <Button
        title="홈페이지로 이동"
        onPress={() => navigation.navigate("home")}
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
