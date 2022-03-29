import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 0;
  const maxHeaderHeight = 100;

  const headerHeight = scrollY.interpolate({
    inputRange: [100, 110],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView>
      <View>
        <Animated.View
          style={{
            zIndex: 10,
            height: headerHeight,
            backgroundColor: "lightblue",
          }}
        ></Animated.View>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.scrollView]}
        >
          {Array.from(Array(100), (e, key) => {
            return <Text key={key}>Item {key}</Text>;
          })}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
