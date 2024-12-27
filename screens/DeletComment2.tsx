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
import CustomInput from "@/components/CustomInput";

export default function DeletRezerv() {
  function handleSignIn(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Header />
        <Text style={styles.headrText}> Salam, Dr. Walter</Text>
        <Text style={styles.searchContainer}>İmtina et </Text>
        <View style={styles.icon}>
          <Image source={require("@/assets/images/refusal.png")} />
        </View>
        <View style={styles.input}>
          <CustomInput
            label=""
            placeholderText="Səbəbini qeyd edin...."
            style={{
              width: 328,
              left: 28,
              borderRadius: 10,
              paddingVertical: 55,
              backgroundColor: "#FFFFFF",
            }}
          />
        </View>

        <CustomButton
          title="Göndərin"
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
    top: 10,
    left: 130,
    borderRadius: 178.75,
  },
  searchContainer: {
    width: 401,
    height: 132,
    top: 55,
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
    top: 90,
    left: 20,
    borderRadius: 11.046697616577148,
    backgroundColor: "#226D64",
    borderStyle: "solid",
    borderWidth: 0.5523349046707153,
    borderColor: "rgba(34, 109, 100, 1.0)",
  },
  input: {
    top: 60,
  },
});
