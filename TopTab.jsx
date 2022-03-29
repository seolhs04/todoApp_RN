import { Animated, View } from "react-native";

const TobTab = () => {
  return (
    <Animated.View
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 100,
        backgroundColor: "lightblue",
      }}
    />
  );
};
export default TobTab;
