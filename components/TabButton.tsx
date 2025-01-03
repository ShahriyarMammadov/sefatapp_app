import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import { Four, Home, Three, Two } from "@/assets/svg/aysun";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Tabs = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);
  return (
    <View
      style={{ ...styles.container, display: isBurgerOpen ? "none" : "flex" }}
    >
      <TouchableOpacity
        style={styles.tabButton}
        // onPress={() => router.replace('/guest-page')}
      >
        <SvgXml xml={Home} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.replace("/reserve-2")}
      >
        <SvgXml xml={Two} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.replace("/statistics-page")}
      >
        <SvgXml xml={Three} />
      </TouchableOpacity>

      {/* Settings Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        // onPress={() => router.replace('/settings')}
      >
        <SvgXml xml={Four} />
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 90,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
