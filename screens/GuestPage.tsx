import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Burger from "@/components/Burger";
import { RootState } from "@/store/store";
import TabButton from "@/components/TabButton";
import { SvgXml } from "react-native-svg";
import CustomInput from "@/components/CustomInput";
import DoctorSection from "@/components/search/DoctorSection";
import ClinicSection from "@/components/search/ClinicSection";
import AptekSection from "@/components/search/AptekSection";
import AdSens from "@/components/search/AdSens";

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
        <CustomInput
          placeholderText="Axtaris"
          style={{
            width: 365,
            height: 44,
            marginLeft: 10,
            borderRadius: 6,
            backgroundColor: "#FFFFFF",
            shadowColor: "rgba(0, 0, 0, 0.08)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            shadowOpacity: 1,
          }}
          // onPress={}
        />
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/dr.walter.png")}
            style={styles.profileImage}
          />
          <Text style={styles.text}>Salam, Akif</Text>
        </View>
        <View style={styles.main}>
            <AdSens/>
            <ClinicSection/>
            <AptekSection/>
        </View>
      </ScrollView>

      <TabButton style={styles.tabButton} />
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
    paddingHorizontal: 16,
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
    width: 118,
    height: 32,
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 21,
    color: "#226D64",
  },
});

export default UserScreen;
