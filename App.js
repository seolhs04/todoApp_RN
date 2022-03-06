import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import styled from "@emotion/native";

export default function App() {
  const [mode, setMode] = useState("work");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (payload) => setText(payload);
  const onSubmit = () => {
    if (text === "") {
      return;
    } else {
      const copy = [...todoList];
      copy.push({
        id: Date.now(),
        text: text,
        finished: false,
      });
      setTodoList(copy);
    }
    setText("");
  };

  return (
    <Background>
      <StatusBar style="light" />
      <Header>
        <TouchableOpacity onPress={() => setMode("work")}>
          <BtnText mode={mode === "work"}>Work</BtnText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode("travel")}>
          <BtnText mode={mode === "travel"}>Travel</BtnText>
        </TouchableOpacity>
      </Header>
      <View>
        <Input
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          value={text}
          placeholder="add to do"
        />
      </View>
      <ScrollView>
        {todoList.map((todo) => (
          <TodoCard key={todo.id}>
            <TodoText>{todo.text}</TodoText>
          </TodoCard>
        ))}
      </ScrollView>
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: black;
  padding: 20px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 66px;
`;
const BtnText = styled.Text`
  color: ${({ mode }) => (mode ? "white" : "gray")};
  font-size: 33px;
  font-weight: bold;
`;
const Input = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 30px;
  margin: 20px 0;
  font-size: 18px;
`;
const TodoCard = styled.View`
  background-color: gray;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;
const TodoText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
