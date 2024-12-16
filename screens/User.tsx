import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useSelector } from "react-redux";
import ProfileScreen from "./NewDoctor";
import Burger from "@/components/Burger";
import { RootState } from "@/store/store";

const UserScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {isBurgerOpen ? <Burger /> : null}
        <Header />
        <Text style={styles.greeting}>Salam, Dr. Walter</Text>
        <View style={styles.main}>
          <View style={styles.profileSection}>
            <Image
              source={require("@/assets/images/dr.walter.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <FontAwesome name="pencil" size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <CustomInput label="Ad/Soyad" placeholderText="Fidan Haqverdiyeva" />

          <CustomInput
            label="Email"
            placeholderText="fidanhaqverdiyeva299gmail.com"
          />

          <CustomInput label="Doğum tarixi" placeholderText="25 January 1990" />

          <CustomInput label="Fin kod" placeholderText="45962" />

          <CustomInput
            label="Şəhər"
            placeholderText="San Jose, California, USA"
          />

          <CustomInput label="Rayon" placeholderText="San Jose " />

          <CustomInput label="Küçə" placeholderText="USA" />

          <CustomInput
            label="Mənzil"
            placeholderText="San Jose, California, USA"
          />

          <CustomButton
            title={"Yadda saxla"}
            buttonStyles={{
              marginTop: 19,
              marginBottom: 20,
              width: 200,
              alignSelf: "center",
              color: "#226D64",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f312d",
  },
  greeting: {
    fontSize: 25,
    color: "#226D64",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  menuIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 7,
    backgroundColor: "#248C76",
    right: 134,
    borderRadius: 12,
    padding: 4,
  },

  infoSection: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    opacity: 0.5,
  },
  info: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 10,
  },
  addressSection: {
    marginVertical: 20,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    color: "#226D64",
    fontFamily: "Poppins",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
    letterSpacing: 0.24,
  },
  main: {
    paddingHorizontal: 16,
  },
});

export default UserScreen;
