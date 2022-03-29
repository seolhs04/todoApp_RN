import styled from "styled-components";
import { Button, Text } from "react-native";
import { useEffect } from "react";

const BottomTab = ({ state, descriptors, navigation }) => {
  const BottomTab = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: tomato;
  `;

  return (
    <BottomTab>
      <Button title="홈" onPress={() => navigation.navigate("Home")} />
      <Button title="테스트" onPress={() => navigation.navigate("Test")} />
    </BottomTab>
  );
};

export default BottomTab;
