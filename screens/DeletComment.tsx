import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { typography } from "@/constants/Typography";

export default function DeletRezerv() {
    function handleSignIn(event: GestureResponderEvent): void {
        throw new Error("Function not implemented.");
    }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header />
        <Text style={styles.headrText}> Salam, Dr. Walter</Text>
        <Text style={styles.searchContainer}>İmtina edildi </Text>
        <View style={styles.icon}>
          <Image source={require("@/assets/images/refusal.png")} />
        </View>
        <CustomButton
            title="Əsas səhifəyə qayıt"
            buttonStyles={styles.CustomButton}
            onPress={handleSignIn}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    width: 123,
    height: 123,
    top: 100,
    left: 130,
    borderRadius: 178.75,
  },
  searchContainer: {
    width: 401,
    height: 132,
    top: 110,
    fontFamily: "Poppins",
    fontSize: 29,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 29,
    textAlign: "center",
    color: "#226D64",
  },
  icons: {
    width: 1541,
    height: 627,
    top: -280,
    left: -30,
    flexShrink: 0,
  },
  headrText: {
    fontSize: 25,
    color: "#226D64",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  btnText: {
    color: "#FFFFFF",
    ...typography.subhead400,
  },
  CustomButton: {
    width: 347,
    height: 37.006439208984375,
    top:120,
    left:20,
    borderRadius: 11.046697616577148,
    backgroundColor: "#226D64",
    borderStyle: "solid",
    borderWidth: 0.5523349046707153,
    borderColor: "rgba(34, 109, 100, 1.0)"
  },

});
