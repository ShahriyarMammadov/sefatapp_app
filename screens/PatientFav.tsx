import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Burger from "@/components/Burger";
import { RootState } from "@/store/store";
import ClinicSection from "@/components/search/ClinicSection";
import AptekSection from "@/components/search/AptekSection";
import DoctorSection from "@/components/search/DoctorSection";
import TabMenu from "@/components/TabMenu";

const UserScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {isBurgerOpen ? <Burger /> : null}
        <Header />
        <Text style={styles.greeting}>Favoritlərim</Text>

        <View style={styles.main}>
          <DoctorSection />
          <ClinicSection />
          <AptekSection />
        </View>
      </ScrollView>
      <TabMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 80,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    gap: 16,
  },
  tabButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  button: {
    width: 370.0768737792969,
    height: 180.72747802734375,
  },
  profileSection: {
    alignItems: "flex-start",
    marginVertical: 36,
    marginLeft: 16,
    flexDirection: "row",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#226D64",
  },
  greeting:{
    color: "#226C63",
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default UserScreen;
