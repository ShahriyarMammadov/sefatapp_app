import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { RootState } from "@/store/store";
import BurgerMenu from "@/components/BurgerMenu";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AnalysisCard from "@/components/AnalysisCard";
import { typography } from "@/constants/Typography";
import TabButton from "@/components/TabButton";
import Burger from "@/components/Burger";
import TabMenu from "@/components/TabMenu";

const ReservationScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {isBurgerOpen ? <Burger /> : null}
        <Header />
        <View>
          <Text style={[styles.Text, { marginBottom: 20 }]}>
            Salam, Dr.Walter
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
        </View>
      </ScrollView>
      <TabMenu />/
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Text: {
    ...typography.titleMedium400,
    color: "#1F8871",
    textAlign: "center",
  },
  cardsContainer: {
    marginBottom: 40,
  },
});

export default ReservationScreen;
