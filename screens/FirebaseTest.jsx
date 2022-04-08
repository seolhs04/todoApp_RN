import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components";
import { useEffect } from "react";
import * as Analytics from "expo-firebase-analytics";
import getPushToken from "../test/getPushToken";
import usePushToken from "../store/usePushToken";

const FirebaseTest = () => {
  const sendLog = () => {
    Analytics.logEvent("log_event", { data: "hihi" });
  };

  const { pushToken, setPushToken } = usePushToken();

  useEffect(() => {
    getPushToken().then((res) => {
      setPushToken(res);
    });
  }, []);

  return (
    <Background>
      <Text>{pushToken && pushToken}</Text>
      <Button title="firebase 로그이벤트 보내기" onPress={sendLog} />
    </Background>
  );
};

export default FirebaseTest;

const Background = styled.View`
  flex: 1;
  padding: 50px;
  background-color: white;
  justify-content: center;
`;
