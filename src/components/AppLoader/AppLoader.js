import React, { memo } from "react";
import { View, StyleSheet } from "react-native";

const AppLoader = (props) => {
  return (
    <View style={styles.loaderView}>
      {/* <AnimatedLottieView
        source={require("../../assets/lottieanimation/animationLoader.json")}
        style={props.styleLoader}
        autoPlay
      /> */}
    </View>
  );
};

export default memo(AppLoader);

export const styles = StyleSheet.create({
  loaderView: {
    height: 80,
    width: 80,
  },
});
