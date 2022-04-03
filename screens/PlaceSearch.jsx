import React from "react";
import { Alert } from "react-native";
import WebView from "react-native-webview";

const PlaceSearch = () => {
  return (
    <>
      <WebView
        source={{ uri: "http://127.0.0.1:8084/placeTest.html" }}
        onMessage={(e) => Alert.alert(e.nativeEvent.data)}
      ></WebView>
    </>
  );
};

export default PlaceSearch;
