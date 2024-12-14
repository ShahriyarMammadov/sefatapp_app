import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { Hour } from "@/assets/svg/aysun";
import CustomButton from "./CustomButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { typography } from "@/constants/Typography";

const DoctorCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.drdoctorImg}
        source={require("@/assets/images/dr.doctor.png")}
      />
      <CustomButton
        title="Familiya"
        textStyles={styles.btnText}
        buttonStyles={styles.imageBtn}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>67352</Text>
        <Text style={styles.specialty}>Rezerv təsdiq olunub</Text>
        <Text style={styles.prescription}>Xidmət növü : Konsultasiya</Text>
        <Text style={styles.service}>Klinika: Bonadea</Text>
        {""}
        <Text style={styles.clinic}>Ödəniş : Ödənilib</Text>

        <View style={styles.dateContainer}>
          <SvgXml xml={Hour} />
          <Text style={styles.dateText}>15/09, Saat : 14:00</Text>
        </View>
        <Text>{""}</Text>
        <CustomButton
          title="imtina et"
          buttonStyles={styles.btn}
          textStyles={styles.btnText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    gap: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 15.600000381469727,
    shadowOpacity: 1,
  },
  infoContainer: {
    // padding: 19,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f312d",
    alignItems: "center",
  },
  specialty: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f312d",
    overflow: 'hidden'
  },
  prescription: {
    fontSize: 12,
    color: "#226D64",
    marginVertical: 5,
  },
  service: {
    fontSize: 14,
    color: "#226D64",
  },
  clinic: {
    fontSize: 14,
    color: "#226D64",
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
    marginTop: 10,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#0f312d",
  },
  drdoctorImg: {
    width: 201,
    height: 203,
    resizeMode: "cover",
    borderRadius: 9,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "flex-start",
  },
  btn: {
    backgroundColor: "#226D64",
    borderWidth: 1,
    borderColor: "#226D64",
    paddingVertical: 10,
    width: "50%",
    maxWidth: 160,
    minWidth: 100,
    borderRadius: 12,
    alignSelf: "flex-end",
    marginRight: 0,
  },
  btnText: {
    color: "#FFFFFF",
    ...typography.subhead400,
  },
  imageBtn: {
    position: "absolute",
    left: 20,
    bottom: 0,
    width: 133,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default DoctorCard;
