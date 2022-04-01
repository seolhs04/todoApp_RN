import React from "react";
import { Button, Text, View } from "react-native";
import styled from "styled-components";
import { useTest } from "../store/useTest";

const ZustandTest = ({ navigation }) => {
  const { number, increaseNumber, decreaseNumber, resetNumber } = useTest();
  return (
    <Background>
      <Text>{number}</Text>
      <Button title="증가" onPress={increaseNumber} />
      <Button title="감소" onPress={decreaseNumber} />
      <Button title="리셋" onPress={resetNumber} />
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </Background>
  );
};

export default ZustandTest;

const Background = styled.View`
  flex: 1;
  padding: 50px;
  background-color: white;
  justify-content: center;
`;
