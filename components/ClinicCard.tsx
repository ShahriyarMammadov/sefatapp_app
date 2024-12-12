import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const ClinicCard = ({ data }: any) => {
  const fullStars = Math.floor(data.rating);
  const halfStar = data.rating % 1 !== 0;
  return (
    <View style={styles.clinicContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageURL }} style={styles.image} />
        <View style={styles.heartIcon}>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <Pressable
          onPress={() => router.replace(`/clinics/${data._id}`)}
          style={styles.clinicNameContainer}
        >
          <Text style={styles.clinicName}>{data.name}</Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.addressText}>Ünvan: {data.location.address}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {[...Array(fullStars)].map((_, index) => (
              <AntDesign key={index} name="star" size={16} color="#FFD557" />
            ))}
            {halfStar && (
              <FontAwesome name="star-half-o" size={16} color="#FFD557" />
            )}
          </View>
          <Text style={styles.ratingText}>{data.rating} rəy</Text>
        </View>
      </View>
      {/* API'de yoxdu bu hisse */}
      {/* <View style={styles.optionsContainer}>
        {data.option.map(
          (
            option:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <TouchableOpacity key={index} style={styles.optionButton}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          )
        )}
      </View> */}
      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Rezerv Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicCard;

const styles = StyleSheet.create({
  clinicContainer: {
    width: 175,
    height: 250,
    borderColor: "#1B5750",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  heartIcon: {
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
    padding: 8,
    alignItems: "center",
  },
  clinicName: {
    color: "white",
    fontWeight: "500",
  },
  infoContainer: {
    marginBottom: 8,
  },
  addressText: {
    color: "#0F312D",
    marginBottom: 8,
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
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  optionButton: {
    borderColor: "#0F312D",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  optionText: {
    color: "#0F312D",
  },
  reserveButton: {
    backgroundColor: "#1F8871",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  reserveButtonText: {
    color: "white",
    fontSize: 14,
  },
});
