import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import CustomInput from "@/components/CustomInput";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { eyeClose, eyeOpen } from "@/assets/svg/xml";
import { useRegisterMutation } from "@/store/appSlice";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): string | null => {
  const minLengthRegex = /^.{6,}$/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const firstCharUppercaseRegex = /^[A-Z]/;
  const digitRegex = /\d/;

  if (!minLengthRegex.test(password)) {
    return "Şifrə ən az 6 simvol uzunluğunda olmalıdır";
  }

  if (!specialCharRegex.test(password)) {
    return "Şifrə ən azı bir xüsusi simvoldan ibarət olmalıdır";
  }

  if (!firstCharUppercaseRegex.test(password)) {
    return "Şifrə böyük hərflə başlamalıdır";
  }

  if (!digitRegex.test(password)) {
    return "Şifrə ən az bir rəqəmdən ibarət olmalıdır";
  }

  return null;
};

const confirmationPassword = (
  password: string,
  repeatPassword: string
): boolean => {
  return password === repeatPassword;
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

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "+994",
    password: "",
    repeatPassword: "",
    ipAddress: "192.168.1.1",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    repeatPasswordError: "",
    phoneError: "",
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [register, { isLoading, isError, isSuccess, data }] =
    useRegisterMutation();

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

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

  const handleSignUp = async () => {
    const emailValid = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const passwordsMatch = confirmationPassword(
      formData.password,
      formData.repeatPassword
    );

    if (!emailValid) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Mail düzgün formatda deyil",
      }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: "" }));
    }

    if (passwordError) {
      setErrors((prev) => ({
        ...prev,
        passwordError: passwordError,
      }));
    } else {
      setErrors((prev) => ({ ...prev, passwordError: "" }));
    }

    if (!passwordsMatch) {
      setErrors((prev) => ({
        ...prev,
        repeatPasswordError: "Yeni şifrəni doğru yazın",
      }));
    } else {
      setErrors((prev) => ({ ...prev, repeatPasswordError: "" }));
    }

    if (
      emailValid &&
      !passwordError &&
      passwordsMatch &&
      isChecked &&
      errors.phoneError === ""
    ) {
      try {
        const result = await register(formData).unwrap();
        const userInfo = JSON.stringify(result);
        await AsyncStorage.setItem("userInfo", userInfo);
        if (isSuccess) {
          router.replace("/(auth)/verify-otp");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
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
                  placeholderText="+994 xx"
                  error={errors.phoneError}
                  helperText={errors.phoneError}
                  placeholderTextColor={Colors.light.lightGreenActive}
                  value={formData.phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  keyboardType="numeric"
                />
                <CustomInput
                  secureTextEntry={secureTextEntry}
                  iconAfter={secureTextEntry ? eyeOpen : eyeClose}
                  label="Şifrə"
                  placeholderText="Şifrə"
                  onCancel={() => setSecureTextEntry(!secureTextEntry)}
                  error={errors.passwordError}
                  helperText={errors.passwordError}
                  placeholderTextColor={Colors.light.lightGreenActive}
                  value={formData.password}
                  onChangeText={(text: string) =>
                    handleInputChange("password", text)
                  }
                />
                <CustomInput
                  secureTextEntry={secureTextEntryConfirm}
                  iconAfter={secureTextEntryConfirm ? eyeOpen : eyeClose}
                  label="Şifrəni yenidən daxil edin"
                  placeholderText="Şifrə"
                  onCancel={() =>
                    setSecureTextEntryConfirm(!secureTextEntryConfirm)
                  }
                  error={errors.repeatPasswordError}
                  helperText={errors.repeatPasswordError}
                  placeholderTextColor={Colors.light.lightGreenActive}
                  value={formData.repeatPassword}
                  onChangeText={(text: string) =>
                    handleInputChange("repeatPassword", text)
                  }
                />
                <CustomCheckbox
                  label="Şərtlər və məxfilik siyasətinizlə razılaşıram."
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  color="#226d64"
                />
              </View>
              <CustomButton
                title="Daxil ol"
                onPress={handleSignUp}
                disabled={!isChecked || errors.phoneError !== ""}
                buttonStyles={{ marginTop: 70 }}
              />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  inputsGroup: {
    flex: 1,
    gap: 12,
  },
});
