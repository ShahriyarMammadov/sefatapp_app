import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { EllipseIcon, EllipsesIcon } from "@/assets/svg/aysun";

const data = [
  {
    id: "1",
    title: "Top. qazanc",
    value: "1250 azn",
    color: "##FFFFFF",
    icon: "💰",
width: 177.78639221191406,
height: 95.81302642822266,
borderRadius: 21.291784286499023,
backgroundColor: "#FFFFFF",
shadowColor: "rgba(218, 221, 232, 0.8)",
shadowOffset: {
	width: 4.258357048034668,
	height: 4.258357048034668
},
shadowRadius: 19.16260528564453,
shadowOpacity: 1,
  },
  {
    id: "2",
    title: "Pasiyent sayı",
    value: "15 nəfər",
    // color: "#E1EAFE",
    icon: "👥",
    width: 177.786,
    height: 95.813,
    flexShrink: 0,
    borderRadius: 21.292,
    background: "##FFFFFF",
  },
  {
    id: "3",
    title: "Rezerv et",
    value: "6 nəfər",
    // color: "#FFD7E3",
    icon: "📅",
    width: 177.786,
    height: 95.813,
    flexShrink: 0,
    borderRadius: 21.292,
    background: "##FFFFFF",
  },
  {
    id: "4",
    title: "Resept al",
    value: "4 nəfər",
    // color: "#D3F1F7",
    icon: "📄",
    width: 177.786,
    height: 95.813,
    flexShrink: 0,
    borderRadius: 21.292,
    background: "##FFFFFF",
  },
  {
    id: "5",
    title: "Analiz yoxla",
    value: "5 nəfər",
    // color: "#DBFEE5",
    icon: "🔬",
    width: 177.786,
    height: 95.813,
    flexShrink: 0,
    borderRadius: 21.292,
    background: "##FFFFFF",
  },
  {
    id: "6",
    title: "Reytinq",
    value: "4.5",
    //  color: "#FDF1C1",
    icon: "⭐",
    width: 177.786,
    height: 95.813,
    flexShrink: 0,
    borderRadius: 21.292,
    background: "##FFFFFF",
  },
];

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />

        <View style={styles.container}>
          <Text style={styles.subHeader}>Salam, Dr. Walter</Text>
          <Text style={styles.sectionTitle}>Statistika</Text>

          <View style={styles.gridContainer}>
            {data.map((item) => (
              <View
                key={item.id}
                style={[styles.card, { backgroundColor: item.color }]}
              >
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionText}>Expense Statistics</Text>
        </View>
        <View style={styles.topContainer}>
          <SvgXml xml={EllipseIcon} />
          <SvgXml xml={EllipsesIcon} style={styles.iconEllip} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    color: "#14413c",
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: {
    color: "#226D64",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 25,
  },
  sectionTitle: {
    color: "#226D64",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  sectionText: {
    color: "#4E8A83",
    fontFamily: " Inter",
    fontSize: 16.851,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
  },
  topContainer: {
    width: 691,
    height: 104,
    paddingVertical: 56,
    paddingHorizontal: 100,
  },
  iconEllip: {
    marginLeft: -33,
    marginTop: -55,
    paddingHorizontal: 100,
  },
  toptext: {
    color: " #FFF",
    fontFamily: "Inter",
    fontSize: 11.808,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 15.351,
  },
});

export default Dashboard;
