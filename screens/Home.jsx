import { Button, Text } from "react-native";
import styled from "styled-components";
import { useTest } from "../store/useTest";

const Home = ({ navigation }) => {
  const { number } = useTest();
  return (
    <Background>
      <Text>홈 화면</Text>
      <Text>전역 라이브러리 {number}</Text>
      <Button
        title="디테일 페이지 이동"
        onPress={() => navigation.navigate("Detail", 2)}
      />
      <Button
        title="애니메이션테스트 페이지 이동"
        onPress={() => navigation.navigate("AnimationTest")}
      />
      <Button
        title="Zustand 페이지 이동"
        onPress={() => navigation.navigate("ZustandTest")}
      />
      <Button
        title="PlaceSearch 페이지 이동"
        onPress={() => navigation.navigate("PlaceSearch")}
      />
      <Button
        title="FirebaseTest 페이지 이동"
        onPress={() => navigation.navigate("FirebaseTest")}
      />
    </Background>
  );
};

export default Home;

const Background = styled.View`
  flex: 1;
  padding: 50px;
  background-color: white;
  justify-content: center;
`;
