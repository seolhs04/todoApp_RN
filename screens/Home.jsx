import { Button } from "react-native";
import styled from "styled-components";

const Home = ({ navigation }) => {
  const Background = styled.View`
    flex: 1;
    padding: 50px;
    background-color: white;
    justify-content: center;
  `;
  return (
    <Background>
      <Button
        title="디테일 페이지로 이동"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="ModalPage로 이동"
        onPress={() => navigation.navigate("ModalPage")}
      />
    </Background>
  );
};

export default Home;
