import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { clinics } from "@/constants/ClinicsData";
import { router } from "expo-router";

const AptekSection = () => {
  const renderAptek = ({ item }:any) => {
    const fullStars = Math.floor(item.rate);
    const halfStar = item.rate % 1 !== 0;

    return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.heartIcon}>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          <View style={styles.openBadge}>
            <Text>7/24</Text>
          </View>
          <View style={styles.aptekNameContainer}>
            <Text style={styles.aptekName}>{item.aptek}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.addressText}>Ünvan: {item.adress}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {[...Array(fullStars)].map((_, index) => (
                <AntDesign key={index} name="star" size={16} color="#FFD557" />
              ))}
              {halfStar && (
                <FontAwesome name="star-half-o" size={16} color="#FFD557" />
              )}
            </View>
            <Text style={styles.reviewsText}>{item.rate_limit} rəy</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alış Veriş Et</Text>
          <Feather name="shopping-cart" size={12} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.replace("/pharmacies/pharmacies")}
        style={styles.header}
      >
        <Text style={styles.headerText}>Aptekler</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={clinics}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <View>{renderAptek({ item })}</View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    color: "#0F312D",
    marginRight: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 10,
  },
  cardContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#1B5750",
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  openBadge: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  aptekNameContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#226D64",
    padding: 8,
    alignItems: "center",
  },
  aptekName: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  infoContainer: {
    marginTop: 8,
  },
  addressText: {
    color: "#0F312D",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
  },
  reviewsText: {
    color: "#0F312D",
  },
  button: {
    backgroundColor: "#1F8871",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },
});

export default AptekSection;
