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
        title="디테일 페이지1로 이동"
        onPress={() => navigation.navigate("Detail", 1)}
      />
      <Button
        title="디테일 페이지2로 이동"
        onPress={() => navigation.navigate("Detail", 2)}
      />
      <Button
        title="디테일 페이지3로 이동"
        onPress={() => navigation.navigate("Detail", 3)}
      />
      <Button
        title="디테일 페이지4로 이동"
        onPress={() => navigation.navigate("Detail", 4)}
      />
    </Background>
  );
};

export default Home;
