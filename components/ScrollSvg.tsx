import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Kardio, Nev, Stom } from "@/assets/svg/aysun";

const data = [
  { id: "1", name: "Stomatologiya", icon: Stom },
  { id: "2", name: "Nevrologiya", icon: Nev },
  { id: "3", name: "Kardiologiya", icon: Kardio },
  { id: "4", name: "Stomatologiya", icon: Stom },
  { id: "5", name: "Nevrologiya", icon: Nev },
  { id: "6", name: "Kardiologiya", icon: Kardio },
];

const MainDoctorCard = () => {
  const renderCard = ({ item }: any) => (
    <View style={styles.doctorCard}>
      <SvgXml xml={item.icon} />
      <Text style={styles.reviewText}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView>
      <FlatList
        data={data}
        horizontal
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        style={styles.cardsRow}
      />
    </ScrollView>
  );
};

export default MainDoctorCard;

const styles = StyleSheet.create({
  cardsRow: {
    padding: 12,
  },
  doctorCard: {
    width: 120,
    height: 90,
    padding: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 21.4,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  reviewText: {
    marginTop: 8,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "600",
    color: "#226D64",
    textAlign: "center",
  },
});
