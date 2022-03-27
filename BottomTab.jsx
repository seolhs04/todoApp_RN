import styled from "styled-components";
import { Button, Text } from "react-native";

const BottomTab = ({ navigation }) => {
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
      <Button title="디테일" onPress={() => navigation.navigate("Detail")} />
    </BottomTab>
  );
};

export default BottomTab;
