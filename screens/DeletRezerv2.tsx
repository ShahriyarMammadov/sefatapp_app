import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { SvgXml } from "react-native-svg";
import { Okey, Rope } from "@/assets/svg/aysun";

export default function DeletRezerv() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header />
        <View style={styles.icon}>
          <SvgXml xml={Okey} />
        </View>
        {/* <View style={styles.icons}>
          <SvgXml xml={Rope} />
        </View> */}
        <Text style={styles.searchContainer}>Rezervasiyanız ləğv olundu. </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    width: 123,
    height: 123,
    top: 100,
    left: 130,
    borderRadius: 178.75,
    backgroundColor: "#226D64",
  },
  searchContainer: {
    width: 401,
    height: 132,
    top: 170,
    fontFamily: "Poppins",
    fontSize: 29,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 29,
    textAlign: "center",
    color: "#226D64",
  },
  icons: {
    width: 1541,
    height: 627,
    top: -280,
    left: -30,
    flexShrink: 0,
  },
});
