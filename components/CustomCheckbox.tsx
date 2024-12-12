import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { typography } from "@/constants/Typography";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: () => void;
  color: string;
  labelStyles?: object;
}

const CustomCheckbox = ({
  label,
  checked,
  onChange,
  color,
  labelStyles,
}: CheckboxProps) => {
  return (
    <>
      <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: checked ? color : "transparent",
              borderColor: color,
            },
          ]}
        >
          {checked && <MaterialIcons name="check" size={12} color="white" />}
        </View>
        {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}
      </TouchableOpacity>
    </>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    ...typography.caption400,
  },
});
