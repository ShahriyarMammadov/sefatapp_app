import { Image, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { heartIcon, shoppingCart, starIcon } from "@/assets/svg/xml";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useAddFavoriteMutation } from "@/store/appSlice";

const MedicineCard = ({ data }: any) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [addFavorite, { isLoading }] = useAddFavoriteMutation();
  // ........................ burda qalmisan
  const handleFavoritePress = async () => {
    try {
      const result = await addFavorite({ doctorId: data.id }).unwrap();
      if (result) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.error("Favori əlavə edərkən xəta oldu:", error);
    }
  };
  // ........................
  return (
    <View style={styles.cardBox}>
      <View style={styles.cardLeftSide}>
        <Image
          style={styles.cardImg}
          source={{ uri: data.medicineID.imageURL }}
        />
      </View>
      <View style={styles.cardRightSide}>
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{data.medicineID.name}</Text>
          <Text style={styles.infoText}>
            Tabletka:{data.medicineID.tablet}gr
          </Text>
          <Text style={styles.infoText}>{data.medicineID.price} ₼</Text>
          <View style={styles.raiting}>
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
            <SvgXml xml={starIcon} />
          </View>
          <CustomButton
            title="Səbətə əlavə et"
            svgEnd={shoppingCart}
            textStyles={styles.shoppingBtnText}
            buttonStyles={styles.shoppingBtn}
          />
        </View>
      </View>
      <View style={styles.cardIcon}>
        <SvgXml xml={heartIcon} />
      </View>
    </View>
  );
};

export default MedicineCard;

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
  shoppingBtn: {},
  shoppingBtnText: {
    ...typography.headline500,
  },
});
