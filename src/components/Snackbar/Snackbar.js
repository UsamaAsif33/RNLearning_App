import React, { useEffect, useRef, memo } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { COLORS } from "../../shared/theme";
import { Text13 } from "../Text";
import SuccessIconSvg from "../../assets/svgs/SuccessIconSvg";
import FailureIconSvg from "../../assets/svgs/FailureIconSvg";
import { useDispatch } from "react-redux";
import { clearSnackBarAction } from "../../redux/actions/notifyAction";
import { isIOS } from "../../utils/platformUtils/platformCheck";

const Snackbar = ({ msg, result, showSnackBar }) => {
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showSnackbar = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        hideSnackbar();
      }, 3000); // Duration of 3 seconds
    });
  };

  const hideSnackbar = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      dispatch(clearSnackBarAction());
    });
  };

  useEffect(() => {
    showSnackbar();
  }, []);
  return (
    <View>
      {showSnackBar ? (
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
            ...styles.snackView,
          }}
        >
          {result ? <SuccessIconSvg /> : <FailureIconSvg />}
          <Text13 textStyle={{ color: COLORS.white, marginLeft: wp("2%") }}>
            {msg}
          </Text13>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default memo(Snackbar);

export const styles = StyleSheet.create({
  snackView: {
    top: isIOS() ? 60 : 20,
    borderRadius: 4,
    width: wp("85%"),
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.textSecondary,
    alignSelf: "center",
  },
});
