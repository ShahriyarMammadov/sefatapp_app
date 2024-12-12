import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { heartIcon, starIcon } from "@/assets/svg/xml";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const DoctorCard = ({ data }: any) => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.cardLeftSide}>
        <Image
          style={styles.cardImg}
          source={require("@/assets/images/doctor.png")}
        />
      </View>
      <View style={styles.cardRightSide}>
        <View style={styles.cardInfo}>
          <Text style={styles.title}>Dr Jalə</Text>
          <Text style={styles.infoText}>İxtisas : Psixoloq </Text>
          <View style={styles.raiting}>
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
          </View>
          <Text style={styles.infoText}>Klinika: Bonadea</Text>
          <CustomButton
            title="Rezerv et"
            textStyles={styles.shoppingBtnText}
            // (dashboard)/reserve
            onPress={() => router.push("/(dashboard/reserve/:sadbadtrue)")}
          />
        </View>
      </View>
      <View style={styles.cardIcon}>
        <SvgXml xml={heartIcon} />
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 11,
    alignItems: "flex-start",
  },
  cardBox: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    borderColor: Colors.light.green,
    borderRadius: 20,
    paddingRight: 6,
    width: "100%",
    overflow: "hidden",
  },
  cardLeftSide: {
    overflow: "hidden",
    height: 200,
  },
  cardImg: {
    width: 130,
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
  },
  cardRightSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  cardInfo: {
    flexDirection: "column",
    gap: 16,
  },
  title: {
    ...typography.headline500,
    color: Colors.light.darkGreen,
  },
  infoText: {
    ...typography.caption400,
    color: Colors.light.darkGreen,
  },
  cardIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    right: 0,
  },
  raiting: {
    flexDirection: "row",
  },
  shoppingBtnText: {
    ...typography.headline500,
  },
});
