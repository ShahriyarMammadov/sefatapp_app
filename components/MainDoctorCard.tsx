import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const MainDoctorCard = ({ data }: any) => {
  // const fullStars = Math.floor(data.rating);
  // const halfStar = data.rating % 1 !== 0;
  return (
    <View style={styles.doctorCard}>
      <View>
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
    width: 170,
    padding: 8,
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
  doctorImage: {
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
  doctorNameContainer: {
    paddingBlock: 8,
    paddingInline: 8,
    backgroundColor: "#E9F0F0",
    alignItems: "center",
    marginBlockStart: 8,
    marginBlockEnd: 8,
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
    gap: 4,
  },
  reviewText: {
    color: "#0F312D",
  },
  reserveButton: {
    borderRadius: 16,
    backgroundColor: "#226D64",
    margin: 'auto',
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
});
