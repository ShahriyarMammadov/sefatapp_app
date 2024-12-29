import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const MainDoctorCard = ({ data }: any) => {
  // const fullStars = Math.floor(data.rating);
  // const halfStar = data.rating % 1 !== 0;
  return (
    <View style={styles.doctorCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageURL }} style={styles.doctorImage} />
        <View style={styles.heartIcon}>
          <AntDesign name="hearto" size={18} color="black" />
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
            {/* {[...Array(fullStars)].map((_, index) => (
              <AntDesign key={index} name="star" size={16} color="#FFD557" />
            ))} */}
            {/* {halfStar && (
              <FontAwesome name="star-half-o" size={16} color="#FFD557" />
            )} */}
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
    width: 148,
    height: 207,
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
  },
  doctorImage: {
    width: 100,
    top: 3,
    height: 100,
    borderRadius: 50,
    left: 21,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 2,
    zIndex: 10,
    padding: 8,
  },
  doctorNameContainer: {
    width: 148,
    height: 24,
    top: 6,
    backgroundColor: "#E9F0F0",
    paddingVertical: 1,
    alignItems: "center",
  },
  doctorName: {
    color: "#226D64",
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
    // flexDirection: "row",
    gap: 4,
  },
  reviewText: {
    color: "#0F312D",
  },
  reserveButton: {
    width: 95.60420227050781,
    height: 23.03715705871582,
    borderRadius: 10,
    top: -4,
    left: 28,
    backgroundColor: "#226D64",
  },
  reserveButtonText: {
    width: 64,
    height: 17,
    top: 8,
    left: 15,
    fontFamily: "Poppins",
    fontSize: 11.51857852935791,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 11.51857852935791,
    color: "#FFFFFF",
  },
});
