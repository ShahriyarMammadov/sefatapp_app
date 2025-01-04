import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Burger from "@/components/Burger";
import { RootState } from "@/store/store";
import ClinicSection from "@/components/search/ClinicSection";
import AptekSection from "@/components/search/AptekSection";
import AdSens from "@/components/search/AdSens";
import DoctorSection from "@/components/search/DoctorSection";
import TabMenu from "@/components/TabMenu";
import ScrollSvg from "@/components/ScrollSvg";
import { AntDesign } from "@expo/vector-icons";

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
        <View style={styles.searchContainer}>
            <TextInput
              placeholder="Axtarış..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.iconInsideInput}>
              <AntDesign name="search1" size={20} color="#0F312D" />
            </TouchableOpacity>
          </View>
        {/* <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/dr.walter.png")}
            style={styles.profileImage}
          />
          <Text style={styles.text}>Salam, Akif</Text>
        </View> */}
        <ScrollSvg/>
        <View style={styles.main}>
          <AdSens />
          <DoctorSection />
          <ClinicSection />
          <AdSens />
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 0,
  },
  iconInsideInput: {
    position: "absolute",
    right: 0,
    height: "100%",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E6E4",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default UserScreen;
