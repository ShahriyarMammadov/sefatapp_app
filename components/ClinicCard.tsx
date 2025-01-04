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
        <Image source={{ uri: data.imageURL }} style={styles.profileImage} />
        <Text style={styles.text}>Yeni Klinika</Text>
        <View style={styles.heartIcon}>
          <AntDesign name="hearto" size={15} color="black" />
        </View>
        {/* <Pressable
          onPress={() => router.replace(`/clinics/${data._id}`)}
          style={styles.clinicNameContainer}
        >
          <Text style={styles.clinicName}>{data.name}</Text>
        </Pressable> */}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.addressText} numberOfLines={2} ellipsizeMode="tail">Ünvan: {data.location.address}</Text>
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
    width: 170,
    borderWidth: 1,
    borderColor: "#E9F0F0",
    position: "relative",
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 21.399999618530273,
    shadowOpacity: 1,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: "auto",
  },
  heartIcon: {
    position: "absolute",
    top: 4,
    right: 4,
    zIndex: 10,
  },
  clinicName: {
    color: "#226D64",
    fontWeight: "500",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 8,
  },
  addressText: {
    color: "#0F312D",
    fontSize: 12,
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionButton: {
    borderRadius: 16,
    backgroundColor: "#226D64",
    margin: "auto",
  },
  optionText: {
    color: "#0F312D",
  },
  reserveButton: {
    borderRadius: 16,
    backgroundColor: "#226D64",
    margin: "auto",
    marginBlockStart: 12,
  },
  reserveButtonText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "center",
    paddingInlineStart: 24,
    paddingInlineEnd: 24,
    paddingBlockStart: 8,
    paddingBlockEnd: 8,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#000000",
    textAlign: "center",
  },
});
