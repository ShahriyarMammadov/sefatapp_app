import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";
import { Four, Home, Like, Notif, Two } from "@/assets/svg/aysun";

const Tabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.replace("/guest-page")}
      >
        <SvgXml xml={Home} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        // onPress={() => router.replace('/screen2')}
      >
        <SvgXml xml={Two} />
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        // onPress={() => router.replace('/profile')}
      >
        <SvgXml xml={Notif} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        // onPress={() => router.replace('/screen2')}
      >
        <SvgXml xml={Like} />
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
    zIndex: 100,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
