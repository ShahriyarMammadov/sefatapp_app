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
          <AntDesign name="hearto" size={24} color="black" />
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
            {[...Array(fullStars)].map((_, index) => (
              <AntDesign key={index} name="star" size={16} color="#FFD557" />
            ))}
            {halfStar && (
              <FontAwesome name="star-half-o" size={16} color="#FFD557" />
            )}
          </View>
          <Text style={styles.ratingText}>{data.rate_limit} rəy</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Alış Veriş Et</Text>
        <Feather name="shopping-cart" size={12} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({
  clinicContainer: {
    flex: 1,
    borderColor: "#1B5750",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    marginBottom: 24,
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  availableText: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  clinicNameContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#226D64",
    paddingVertical: 12,
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
    flexDirection: "row",
    backgroundColor: "#1F8871",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  shopButtonText: {
    color: "white",
    fontSize: 14,
    marginRight: 8,
  },
});
