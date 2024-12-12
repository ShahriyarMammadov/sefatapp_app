import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import CustomInput from "@/components/CustomInput";
import { useLoginMutation } from "@/store/appSlice";
import CustomButton from "@/components/CustomButton";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const formatPhoneNumber = (phoneNumber: string): string => {
  const digits = phoneNumber.replace(/\D/g, "");
  let formatted = "+994";

  if (digits.length > 3) {
    formatted += ` (${digits.slice(3, 5)}`;
  }
  if (digits.length > 5) {
    formatted += `) ${digits.slice(5, 8)}`;
  }
  if (digits.length > 8) {
    formatted += ` ${digits.slice(8, 10)}`;
  }
  if (digits.length > 10) {
    formatted += ` ${digits.slice(10, 12)}`;
  }

  return formatted;
};

const BuyPrescription = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "+994",
    identify: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    phoneError: "",
  });

  const [updateProfile, { isLoading, isError, isSuccess, data }] =
    useLoginMutation();

  const handlePhoneNumberChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);

    if (formattedPhoneNumber.length < 19) {
      setErrors((prev) => ({
        ...prev,
        phoneError: "Mobil nömrə düzgün daxil edilməyib",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phoneError: "",
      }));
    }

    setFormData((prev) => ({
      ...prev,
      phoneNumber: formattedPhoneNumber,
    }));
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUpdateInfo = async () => {
    const emailValid = validateEmail(formData.email);

    if (!emailValid) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Mail düzgün formatda deyil",
      }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: "" }));
    }

    if (emailValid && errors.phoneError === "") {
      console.log("Form Data:", formData);
      // try {
      //   const result = await updateProfile(formData).unwrap();
      //   if (isSuccess) {
      //     console.log(result);
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Resept al</Text>
      </View>
      <View style={styles.userHeader}>
        <UserHeader />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text>
              Filan həkimnən resept almaq üçün aşağdakı xanaları doğru şəkildə
              doldurun
            </Text>
            <View style={styles.inputsGroup}>
              <CustomInput
                label="Ad və soyad"
                placeholderText="Ad və soyad"
                placeholderTextColor={Colors.light.lightGreenActive}
                value={formData.fullName}
                onChangeText={(text: string) =>
                  handleInputChange("fullName", text)
                }
              />
              <CustomInput
                label="E-mail"
                placeholderText="E-mail"
                error={errors.emailError}
                helperText={errors.emailError}
                placeholderTextColor={Colors.light.lightGreenActive}
                value={formData.email}
                onChangeText={(text: string) =>
                  handleInputChange("email", text)
                }
              />
              <CustomInput
                label="Mobil nömrə"
                placeholderText="Mobil nömrə"
                error={errors.phoneError}
                helperText={errors.phoneError}
                placeholderTextColor={Colors.light.lightGreenActive}
                value={formData.phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="numeric"
              />
              <CustomInput
                label="Fin kod"
                placeholderText="Fin kod"
                placeholderTextColor={Colors.light.lightGreenActive}
                value={formData.identify}
                onChangeText={(text: string) =>
                  handleInputChange("identify", text)
                }
              />
              {/* <UploadInput/> */}
              <CustomInput
                label="Müraciətinizi qeyd edin"
                placeholderText="Müraciətinizi qeyd edin"
                placeholderTextColor={Colors.light.lightGreenActive}
                value={formData.note}
                onChangeText={(text: string) => handleInputChange("note", text)}
                style={styles.textInput}
              />
              <CustomButton
                title="Resept al"
                onPress={handleUpdateInfo}
                buttonStyles={{ marginTop: 15, marginBottom: 20 }}
                loading={isLoading}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BuyPrescription;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    gap: 20,
  },
  inputsGroup: {
    flex: 1,
    gap: 12,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 173,
  },
});
