import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import Checkbox from "expo-checkbox";

export default function App() {
  const [mode, setMode] = useState("work");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (payload) => setText(payload);
  const saveTodo = async (toSave) => {
    try {
      await AsyncStorage.setItem("@todos", JSON.stringify(toSave));
    } catch {
      alert("ERROR", "error!");
    }
  };
  const loadTodo = async () => {
    try {
      const s = await AsyncStorage.getItem("@todos");
      if (s) {
        setTodoList(JSON.parse(s));
      } else {
        setTodoList([]);
      }
    } catch {
      alert("ERROR", "error!");
    }
  };
  const onSubmit = async () => {
    if (text === "") {
      return;
    } else {
      const copy = [...todoList];
      copy.push({
        id: Date.now(),
        text: text,
        finished: false,
      });
      await saveTodo(copy);
      setTodoList(copy);
    }
    setText("");
  };
  const checkFinish = async (currentId) => {
    const current = todoList.find((ele) => ele.id === currentId);
    const currentIdx = todoList.indexOf(current);
    current.finished = !current.finished;
    const copy = [...todoList];
    copy[currentIdx] = current;
    setTodoList(copy);
    await saveTodo(copy);
  };
  const deleteTodo = (key) => {
    Alert.alert("DELETE", "are you sure?", [
      { text: "Cancle" },
      {
        text: "Yes",
        onPress: async () => {
          const current = todoList.find((ele) => ele.id === key);
          const currentIdx = todoList.indexOf(current);
          const copy = [...todoList];
          copy.splice(currentIdx, 1);
          setTodoList(copy);
          await saveTodo(copy);
        },
      },
    ]);
  };
  useEffect(() => {
    loadTodo();
  }, []);
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
        {todoList &&
          todoList.map((todo) => (
            <TodoCard key={todo.id}>
              <Checkbox
                value={todo.finished}
                onValueChange={() => checkFinish(todo.id)}
              />
              <TodoText checked={todo.finished}>{todo.text}</TodoText>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Text>❌</Text>
              </TouchableOpacity>
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
  background-color: #c4c4c4;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TodoText = styled.Text`
  color: ${({ checked }) => (checked ? "gray" : "black")};
  font-size: 18px;
  font-weight: bold;
  ${({ checked }) => checked && "text-decoration: line-through"};
`;
