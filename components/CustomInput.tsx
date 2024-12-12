import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";
import { SvgXml } from "react-native-svg";

interface IProps extends TextInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  lableStyle?: StyleProp<ViewStyle>;
  error?: string;
  placeholderTextColor?: string;
  placeholderText?: string;
  helperText?: string;
  inputRef?: React.RefObject<TextInput>;
  helperTextStyles?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  iconAfter?: string;
  onCancel?: () => void;
}

const CustomInput: React.FC<IProps> = ({
  label,
  style,
  lableStyle,
  error,
  placeholderText,
  helperText,
  inputRef,
  helperTextStyles,
  secureTextEntry,
  iconAfter,
  onCancel,
  ...rest
}) => {
  return (
    <View>
      {label && (
        <Text
          style={[
            lableStyle,
            styles.inputLabel,
            error ? { color: Colors.light.errorRed } : undefined,
          ]}
        >
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholderText}
          placeholderTextColor={Colors.light.lightGreenActive}
          secureTextEntry={secureTextEntry}
          ref={inputRef}
          {...rest}
        />
        {iconAfter && (
          <Pressable onPress={onCancel} style={styles.eyeIcon}>
            <SvgXml xml={iconAfter} />
          </Pressable>
        )}
      </View>
      {error ? (
        <Text style={styles.errorMessage}>{error}</Text>
      ) : (
        helperText && (
          <Text style={[styles.helperText, helperTextStyles]}>
            {helperText}
          </Text>
        )
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  errorMessage: {
    ...typography.caption400,
    color: Colors.light.errorRed,
    marginTop: 5,
  },
  helperText: {
    color: "#226D64",
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#20897166",
    borderRadius: 11,
    width: "100%",
    color: "#248C76",
    paddingVertical: 11,
    paddingHorizontal: 22,
  },
  inputLabel: {
    ...typography.headline400,
    color: "#0C1421",
    height: 24,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
});
