import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";

interface ButtonProps {
  title: string;
  buttonStyles?: object;
  textStyles?: object;
  onPress?: (event: GestureResponderEvent) => void;
  transparent?: boolean;
  svgStart?: string;
  svgEnd?: string;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton = ({
  title,
  buttonStyles,
  textStyles,
  onPress,
  transparent,
  svgStart,
  svgEnd,
  disabled = false,
  loading,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        disabled
          ? styles.disabledButton
          : transparent
          ? [styles.transparentBtn, pressed && styles.transparentBtnPressed]
          : [styles.button, pressed && styles.buttonPressed],
        buttonStyles,
      ]}
    >
      <View style={styles.innerBtn}>
        {svgStart && <SvgXml xml={svgStart} />}
        {loading ? (
          <ActivityIndicator size="small" style={{ marginVertical: 4 }} />
        ) : (
          <Text
            style={[
              transparent ? styles.transparentBtnText : styles.text,
              textStyles,
            ]}
          >
            {title}
          </Text>
        )}
        {svgEnd && <SvgXml xml={svgEnd} />}
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#248C76",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonPressed: {
    backgroundColor: "#D2EAEF45",
  },
  disabledButton: {
    backgroundColor: "#b0b0b0",
    borderRadius: 10,
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    ...typography.titleSmall400,
    color: "#fff",
  },
  transparentBtn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.light.green,
    borderRadius: 10,
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  transparentBtnPressed: {
    backgroundColor: Colors.light.lightGreenHover,
  },
  transparentBtnText: {
    ...typography.titleSmall400,
    color: Colors.light.green,
  },
  innerBtn: {
    flexDirection: "row",
    gap: 11,
  },
});
