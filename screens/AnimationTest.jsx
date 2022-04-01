import React, { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  View,
} from "react-native";

const HEADER_HEIGHT = 100;

const AnimationTest = () => {
  const [offset, setOffset] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);
  const animationRef = useRef(new Animated.Value(0)).current;

  const translateY = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setScrollUp(offset >= currentOffset);
    setOffset(currentOffset);
  };

  useEffect(() => {
    Animated.timing(animationRef, {
      toValue: scrollUp ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scrollUp]);

  return (
    <SafeAreaView>
      <View>
        <Animated.View
          style={{
            height: HEADER_HEIGHT,
            backgroundColor: "lightblue",
            transform: [{ translateY: translateY }],
          }}
        ></Animated.View>
        <Animated.ScrollView
          onScroll={onScroll}
          style={{
            transform: [{ translateY: translateY }],
            marginBottom: HEADER_HEIGHT,
          }}
          scrollEventThrottle={16}
          bounces={false}
        >
          {Array.from(Array(100), (e, key) => (
            <Text key={key}>Item {key}</Text>
          ))}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AnimationTest;
