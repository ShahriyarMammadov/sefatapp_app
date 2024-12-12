import { StyleSheet, SafeAreaView, View, ScrollView, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import MedicineCard from "@/components/MedicineCard";

const Medicines = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Dərmanlar</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <MedicineCard />
          <MedicineCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Medicines;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    left: 0,
    bottom: 7.8,
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
  },
});
