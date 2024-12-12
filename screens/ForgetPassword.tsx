import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleConfirm = () => {
    if (!validateEmail(email)) {
      setEmailError("Mail düzgün formatda deyil");
    } else {
      setEmailError("");
      router.replace("/(auth)/verify-otp");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.customText}>Şifrənizi unutmusuz {"\n"} </Text>
        <Text style={styles.textstyles}>
          Mailinizi daxil edin və şifrənizi yeniləyin {"\n"}
        </Text>
        <View>
          <CustomInput
            label="Email"
            placeholderText="Email daxil edin"
            onCancel={() => setEmail("")}
            error={emailError ? emailError : undefined}
            helperText={emailError}
            style={
              emailError ? { borderColor: Colors.light.errorRed } : undefined
            }
            placeholderTextColor={Colors.light.lightGreenActive}
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <CustomButton
            title="Davam et"
            buttonStyles={styles.CustomButton}
            onPress={handleConfirm}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  inputsGroup: {
    flex: 1,
    gap: 12,
  },

  CustomButton: {
    gap: 12,
    marginTop: 20,
  },
  customText: {
    color: "#1E1E1E",
    fontFamily: "Poppins",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19.1,
  },
  textstyles: {
    color: "#989898",
    fontFamily: "Poppins", // Poppins fontunu layihəyə əlavə etdiyinizdən əmin olun
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19.1,
  },
});
