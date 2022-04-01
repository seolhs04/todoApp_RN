import { Text, Button } from "react-native";
import styled from "styled-components";

const Detail = ({ navigation, route }) => {
  const Background = styled.View`
    flex: 1;
    padding: 50px;
    background-color: white;
    justify-content: center;
  `;

  return (
    <Background>
      <Text>{route.params}</Text>
      <Button
        title="홈페이지로 이동"
        onPress={() => navigation.navigate("Home")}
      />
    </Background>
  );
};

export default Detail;
