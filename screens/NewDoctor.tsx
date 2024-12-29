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
import { router } from "expo-router";
import TabButton from "@/components/TabButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import BurgerMenu from "@/components/BurgerMenu";

const ProfileScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView   style={styles.container}
        contentContainerStyle={styles.content}>
           {isBurgerOpen ? <BurgerMenu /> : null}
        <Header />
        <Text style={styles.greeting}>Salam, Dr. Walter</Text>
        {/* <View style={styles.header}> */}
        {/* <FontAwesome
          name="bars"
          size={24}
          color="darkgreen"
          style={styles.menuIcon}
        /> */}
        {/* <Text style={styles.greeting}>Salam, Dr. Walter</Text>
      </View> */}
        <View style={styles.main}>
          <View style={styles.profileSection}>
            <Image
              source={require("@/assets/images/dr.walter.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity activeOpacity={0.8} style={styles.editIcon}>
              <FontAwesome name="pencil" size={16} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Ad</Text>
            <Text style={styles.info}>Fidan Haqverdiyeva</Text>

            <Text style={styles.label}>Cins</Text>
            <Text style={styles.info}>Qadın</Text>

            <Text style={styles.label}>Doğum Tarixi</Text>
            <Text style={styles.info}>Avqust 27, 1999</Text>

            <Text style={styles.label}>Milliyyət</Text>
            <Text style={styles.info}>Azərbaycan</Text>

            <Text style={styles.label}>İxtisas</Text>
            <Text style={styles.info}>Stomatoloq</Text>

            <Text style={styles.label}>İş Yeri</Text>
            <Text style={styles.info}>Yeni Klinika</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Telefon Nömrəsi</Text>
            <Text style={styles.info}>09034867566</Text>

            <Text style={styles.label}>Email</Text>
            <Text style={styles.info}>tomilola@me.com</Text>
          </View>

          <View style={styles.addressSection}>
            <Text style={styles.text}>Address</Text>

            <Text style={styles.label}>Address Line</Text>
            <Text style={styles.info}>No 35 Jimmy Ebi Küçəsi</Text>

            <Text style={styles.label}>Şəhər</Text>
            <Text style={styles.info}>Yenagoa</Text>

            <Text style={styles.label}>Ştat</Text>
            <Text style={styles.info}>Bayelsa</Text>

            <Text style={styles.label}>Ölkə</Text>
            <Text style={styles.info}>Nigeriya</Text>
          </View>

        </View>
      </ScrollView>
      <TabButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 80,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    paddingHorizontal: 16,
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
  tabButton: {
    position: "absolute", 
    bottom: 0, 
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#ffffff",
    borderTopWidth: 6,
    borderTopColor: "#E0E0E0",
  },
});

export default ProfileScreen;
