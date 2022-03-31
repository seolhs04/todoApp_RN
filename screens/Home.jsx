import { Button, Text } from "react-native";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

const Home = ({ navigation }) => {
  const Background = styled.View`
    flex: 1;
    padding: 50px;
    background-color: white;
    justify-content: center;
  `;
  const { isLoading, isError, data, error } = useQuery("adsfsa", () => {
    return axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res);
  });

  if (isLoading) {
    return (
      <Background>
        <Text>loading...</Text>
      </Background>
    );
  }

  if (isError) {
    return (
      <Background>
        <Text>{error}</Text>
      </Background>
    );
  }

  return (
    <Background>
      <Text>{data.archive_url}</Text>
    </Background>
  );
};

export default Home;
