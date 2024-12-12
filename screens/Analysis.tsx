import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { typography } from "@/constants/Typography";
import Header from "@/components/Header";
import UserHeader from "@/components/UserHeader";
import Colors from "@/constants/Colors";
import { useGetClinicsQuery } from "@/store/appSlice";
import AnalysisCard from "@/components/AnalysisCard";
import CustomButton from "@/components/CustomButton";
import HospitalCard from "@/components/HospitalCard";

export default function Clinics() {
  const { data, error, isLoading } = useGetClinicsQuery({});
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Rezervlərim</Text>
      </View>
      <View style={styles.userHeader}>
        <UserHeader />
      </View>
      <View style={styles.btnsGroup}>
        <CustomButton
          title="Klinkadan gələn nəticələr"
          buttonStyles={styles.btn}
          textStyles={styles.btnText}
        />
        <CustomButton
          title="Həkimnən gələn nəticələr"
          buttonStyles={styles.btn2}
          textStyles={styles.btnText2}
        />
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <AnalysisCard />
          <HospitalCard />
          <AnalysisCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "column",
    gap: 18,
    width: "100%",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
  },
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    color: "#0F312D",
  },
  username: {
    fontSize: 16,
    color: "#0F312D",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F312D",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  columnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },
  userHeader: {
    paddingTop: 20,
    // paddingBottom: 36,
  },
  text: {
    ...typography.subhead400,
  },

  scrollContainer: {
    // flexGrow: 1,
    paddingVertical: 20,
    gap: 20,
  },
  btnsGroup: {
    flexDirection: "row",
    gap: 19,
  },
  btn: {
    backgroundColor: Colors.light.green,
    borderWidth: 1,
    borderColor: Colors.light.green,
    paddingVertical: 10,
    width: 160,
    borderRadius: 12,
  },
  btn2: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    width: 160,
    borderRadius: 12,
  },
  btnText2: {
    color: "#226D64",
    ...typography.subhead400,
  },
  btnText: {
    color: Colors.light.lightGreenHover,
    ...typography.subhead400,
  },
});
