import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const PharmacyCard = ({ data }: any) => {
  const fullStars = Math.floor(data.rate);
  const halfStar = data.rate % 1 !== 0;
  return (
    <View style={styles.clinicContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.heartIcon}>
          <AntDesign name="hearto" size={15} color="black" />
        </View>
        <View style={styles.availableText}>
          <Text>7/24</Text>
        </View>
        <Pressable
          onPress={() => router.replace(`/pharmacies/${data.id}`)}
          style={styles.clinicNameContainer}
        >
          <Text style={styles.clinicName}>{data.aptek}</Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.addressText}>Ünvan : {data.adress}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {/* {[...Array(fullStars)].map((_, index) => (
              <AntDesign key={index} name="star" size={16} color="#FFD557" />
            ))} */}
            {halfStar && (
              <FontAwesome name="star-half-o" size={16} color="#FFD557" />
            )}
          </View>
          <Text style={styles.ratingText}>{data.rate_limit} rəy</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Alış Veriş Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({
  clinicContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 21.399999618530273,
    shadowOpacity: 1
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100,
    top:3,
    height: 100,
    borderRadius: 50,
    left: 29,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  availableText: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  clinicNameContainer: {
    width: 148,
    height: 24,
    top:6,
    backgroundColor: "#E9F0F0",
    paddingVertical: 1,
    alignItems: "center",
  },
  clinicName: {
    color: "white",
    fontWeight: "500",
  },
  infoContainer: {
    marginVertical: 12,
  },
  addressText: {
    color: "#0F312D",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
  },
  ratingText: {
    color: "#0F312D",
  },
  shopButton: {
    paddingBlock: 8,
    paddingInline: 16,
    borderRadius: 10,
    backgroundColor: "#226D64",
    margin: 'auto'
  },
  shopButtonText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14,
    color: "#FFFFFF"
  },
});
