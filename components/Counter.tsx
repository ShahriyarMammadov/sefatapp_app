import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { decrement, increment } from "@/store/counterSlice";
import Colors from "@/constants/Colors";
import { SvgXml } from "react-native-svg";
import { minusIcon, plusIcon } from "@/assets/svg/xml";

interface CounterProps {
  id: number;
}

const Counter: React.FC<CounterProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector(
    (state: RootState) =>
      state.counters.find((counter: any) => counter.id === id)?.value || 1
  );

  return (
    <View style={styles.counter}>
      <Pressable
        style={styles.counterBtn}
        onPress={() => dispatch(decrement(id))}
      >
        <SvgXml xml={minusIcon} />
      </Pressable>
      <View style={styles.counterText}>
        <Text>{value}</Text>
      </View>
      <Pressable
        style={styles.counterBtn}
        onPress={() => dispatch(increment(id))}
      >
        <SvgXml xml={plusIcon} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  cardDeleteIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    right: 0,
  },
  counterBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.green,
  },
  counterText: {
    borderWidth: 1,
    borderColor: Colors.light.green,
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});
