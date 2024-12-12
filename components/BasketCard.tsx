import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { SvgXml } from "react-native-svg";
import { deleteIcon } from "@/assets/svg/xml";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { SCREEN_WIDTH } from "@/constants/Screen";
import Counter from "./Counter";

interface DataProps {
  id: number;
  title: string;
  image: string;
}

const BasketCard: React.FC<DataProps> = ({ data }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={[styles.cardContainer, { width: SCREEN_WIDTH - 68 }]}>
      <CustomCheckbox
        checked={isChecked}
        onChange={toggleCheckbox}
        color="#226d64"
      />
      <View style={styles.cardBox}>
        <View style={styles.cardLeftSide}>
          <Image
            style={styles.cardImg}
            source={require("@/assets/images/medicine.png")}
          />
        </View>
        <View style={styles.cardRightSide}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.infoText}>Tabletka:550gr</Text>
            <Text style={styles.infoText}>Qiymət - 5 ₼</Text>
            <View style={styles.counter}>
              <Counter id={data.id} />
            </View>
          </View>
        </View>
        <View style={styles.cardDeleteIcon}>
          <SvgXml xml={deleteIcon} />
        </View>
      </View>
    </View>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 11,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  cardBox: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    borderColor: Colors.light.green,
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 15,
    width: "100%",
  },
  cardLeftSide: {
    overflow: "hidden",
    borderRadius: 20,
    height: 146,
  },
  cardImg: {
    width: 122,
    height: "100%",
    resizeMode: "cover",
  },
  cardRightSide: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  counter: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  cardDeleteIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    right: 0,
  },
  counterBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.green,
  },
  counterText: {
    borderWidth: 1,
    borderColor: Colors.light.green,
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});
