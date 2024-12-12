import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Analysis = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.drdoctorImg}
        source={require("@/assets/images/dr.doctor.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>Dr. Jalə</Text>
        <Text style={styles.specialty}>İxtisas: Psixoloq</Text>
        <Text style={styles.prescription}>Reseptiniz göndərilib.</Text>
        <Text style={styles.service}>Konsultasiya xidməti: 60 azn</Text>
        <Text style={styles.clinic}>Klinika: Bonadea</Text>

        <View style={styles.dateContainer}>
          <FontAwesome name="refresh" size={18} color="#14413c" />
          <Text style={styles.dateText}>15/09, Saat : 14:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#d9e7e3",
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f312d",
  },
  specialty: {
    fontSize: 14,
    color: "#0f312d",
  },
  prescription: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f312d",
    marginVertical: 5,
  },
  service: {
    fontSize: 14,
    color: "#0f312d",
  },
  clinic: {
    fontSize: 14,
    color: "#0f312d",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#14413c",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: "#14413c",
    fontSize: 14,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#0f312d",
  },
  drdoctorImg: {
    width: 170,
    height: "115%",
    resizeMode: "cover",
    borderRadius: 9,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "flex-start",
  },
});

export default Analysis;
