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

const MainDoctorCard = ({ data }: any) => {
  const fullStars = Math.floor(data.rating);
  const halfStar = data.rating % 1 !== 0;
  return (
    <View style={styles.doctorCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageURL }} style={styles.doctorImage} />
        <View style={styles.heartIcon}>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <Pressable
          onPress={() => router.replace(`/doctors/${data._id}`)}
          style={styles.doctorNameContainer}
        >
          <Text style={styles.doctorName}>
            {data.name} {data.surname}
          </Text>
        </Pressable>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.specialtyText}>İxtisas : {data.specialty}</Text>
        <Text style={styles.clinicText}>Klinika : {data.hospitalName}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {[...Array(fullStars)].map((_, index) => (
              <AntDesign key={index} name="star" size={16} color="#FFD557" />
            ))}
            {halfStar && (
              <FontAwesome name="star-half-o" size={16} color="#FFD557" />
            )}
          </View>
          <Text style={styles.reviewText}>{data.rating} rəy</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.reserveButton}>
        <Text
          style={styles.reserveButtonText}
          onPress={() => router.push("/(dashboard)/reserve/2")}
        >
          Rezerv Et
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainDoctorCard;

const styles = StyleSheet.create({
  doctorCard: {
    // flex: 1,
    marginBottom: 24,
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
  },
  doctorImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 10,
    padding: 8,
  },
  doctorNameContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#226D64",
    padding: 12,
    borderTopLeftRadius: 12,
    alignItems: "center",
  },
  doctorName: {
    color: "white",
    fontWeight: "500",
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 8,
  },
  specialtyText: {
    color: "#0F312D",
  },
  clinicText: {
    color: "#0F312D",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 4,
  },
  reviewText: {
    color: "#0F312D",
  },
  reserveButton: {
    backgroundColor: "#1F8871",
    paddingVertical: 12,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  reserveButtonText: {
    color: "white",
    textAlign: "center",
  },
});
