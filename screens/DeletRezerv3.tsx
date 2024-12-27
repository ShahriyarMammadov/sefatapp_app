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
        <Text style={styles.searchContainer}>
          Rezervasiyanızı ləğv etmək istəyirsiniz
        </Text>

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
          title="Tamamla"
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
    top: 90,
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
    top: 90,
    left: 10,
    width: 370,
    height: 50,
    borderRadius: 6,
    backgroundColor: "#226D64",
    borderWidth: 1,
    borderColor: "rgba(34, 109, 100, 1.0)",
  },
  input: {
    top: 60,
  },
});
