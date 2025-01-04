import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { Profileicon, Trednup, message, star } from "@/assets/svg/aysun";
import { typography } from "@/constants/Typography";

const MainDoctorCard = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsRow}>
        <View style={styles.doctorCardContainer}>
          <View style={styles.doctorCard}>
            <SvgXml xml={Profileicon} />
          </View>
          <Text style={styles.reviewText}>120+</Text>
          <Text style={styles.text}>Pasiyent</Text>
        </View>
        <View style={styles.doctorCardContainer}>
          <View style={styles.doctorCard}>
            <SvgXml xml={Trednup} />
          </View>
          <Text style={styles.reviewText}>7+</Text>
          <Text style={styles.text}>Təcrübə</Text>
        </View>
        <View style={styles.doctorCardContainer}>
          <View style={styles.doctorCard}>
            <SvgXml xml={star} />
          </View>
          <Text style={styles.reviewText}>4.9</Text>
          <Text style={styles.text}>Puanlama</Text>
        </View>
        <View style={styles.doctorCardContainer}>
          <View style={styles.doctorCard}>
            <SvgXml xml={message} />
          </View>
          <Text style={styles.reviewText}>100+</Text>
          <Text style={styles.text}>Rəy</Text>
        </View>
      </View>
    </View>
  );
};

export default MainDoctorCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  cardsRow: {
    flexDirection: "row",
  },
  doctorCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  doctorCard: {
    width: 40,
    height: 40,
    borderRadius: 56,
    backgroundColor: "#1F887117",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  reviewText: {
    marginBlockStart: 8,
    width: 78,
    height: 30,
    color: "darkblack",
    ...typography.titleSmall700,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    width: 80,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#939393",
    textAlign: "center",
  },
});
