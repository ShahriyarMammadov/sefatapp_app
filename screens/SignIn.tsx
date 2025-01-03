import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import Header from "@/components/Header";
import CustomCheckbox from "@/components/CustomCheckbox";
import { Link, useRouter } from "expo-router";
import { typography } from "@/constants/Typography";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import {
  appleIcon,
  eyeClose,
  eyeOpen,
  facebookIcon,
  googleIcon,
} from "@/assets/svg/xml";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLoginMutation } from "@/store/appSlice";
import { StatusBar } from "expo-status-bar";

interface LoginResponse {
  access_token: string;
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profileImageUrl?: string;
}

interface FormData {
  email: string;
  username: string;
  password: string;
}

interface Errors {
  emailError: string;
  passwordError: string;
}

const SignIn: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    emailError: "",
    passwordError: "",
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [login, { isLoading, isError, isSuccess, data }] = useLoginMutation();

  const toggleCheckbox = () => setIsChecked(!isChecked);

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Errors = { emailError: "", passwordError: "" };

    if (!validateEmail(formData.email)) {
      newErrors.emailError = "Mail düzgün formatda deyil";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.passwordError = "Şifrə ən az 6 simvol olmalıdır";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignIn = async () => {
    if (validateForm()) {
      try {
        const result: LoginResponse = await login(formData).unwrap();
        if (isSuccess) {
          const userInfo = JSON.stringify(result);
          await AsyncStorage.setItem("userInfo", userInfo);
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.log(error);
          Alert.alert(error?.data?.message )
        
      }
    }
  };

  const handleOutsidePress = () => {
    setShowPopup(false), Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <Header disabledBurger />
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.container}>
          <View style={styles.inputsGroup}>
            <CustomInput
              label="Email"
              placeholderText="Example@email.com"
              onCancel={() => handleInputChange("email", "")}
              error={errors.emailError}
              helperText={errors.emailError}
              style={
                errors.emailError
                  ? { borderColor: Colors.light.errorRed }
                  : undefined
              }
              placeholderTextColor={Colors.light.lightGreenActive}
              value={formData.email}
              onChangeText={(text: string) => handleInputChange("email", text)}
            />
            <CustomInput
              secureTextEntry={secureTextEntry}
              iconAfter={secureTextEntry ? eyeOpen : eyeClose}
              label="Şifrə"
              placeholderText="At least 8 characters"
              onCancel={() => setSecureTextEntry(!secureTextEntry)}
              error={errors.passwordError}
              helperText={errors.passwordError}
              style={
                errors.passwordError
                  ? { borderColor: Colors.light.errorRed }
                  : undefined
              }
              placeholderTextColor={Colors.light.lightGreenActive}
              value={formData.password}
              onChangeText={(text: string) =>
                handleInputChange("password", text)
              }
            />
            <View style={styles.rememberMe}>
              <CustomCheckbox
                label="Yadda saxla"
                checked={isChecked}
                onChange={toggleCheckbox}
                color="#226d64"
              />
              <Link
                href="/(auth)/forget-password"
                style={styles.forgetPassText}
              >
                Şifrəni unutmusunuz?
              </Link>
            </View>
            <CustomButton
              title="Daxil ol"
              // onPress={handleSignIn}
              loading={isLoading}
              onPress={() => router.replace("/(auth)/new-doctor")}
            />
            <Text style={styles.orText}>və ya</Text>
            <View style={styles.btnsGroup}>
              <CustomButton
                title="Google ilə daxil ol"
                transparent={true}
                svgStart={googleIcon}
              />

              <CustomButton
                title="Facebook ilə daxil ol"
                transparent={true}
                svgStart={facebookIcon}
              />
              <CustomButton
                title="Apple ilə daxil ol"
                transparent={true}
                svgStart={appleIcon}
              />
            </View>
            <Text style={styles.simpleText}>
              {" "}
              Hesabınız yoxdur?{" "}
              <Link href="/(auth)/sign-up" style={styles.registerText}>
                Daxil olun
              </Link>
            </Text>
          </View>

          {showPopup && (
            <Pressable
              style={styles.popupContainer}
              onPress={handleOutsidePress}
            >
              <View style={styles.popup}>
                <Text style={styles.popupText}>
                  İstifadəçi adı və ya şifrə yanlışdır.{"\n"}Yenidən cəhd edin.
                </Text>
              </View>
            </Pressable>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  inputsGroup: {
    flex: 1,
    gap: 12,
  },
  rememberMe: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetPassText: {
    ...typography.caption400,
  },
  orText: {
    ...typography.titleSmall400,
    alignSelf: "center",
  },
  btnsGroup: {
    gap: 12,
    marginBottom: 10,
  },
  registerText: {
    ...typography.caption500,
    color: Colors.light.greenActive,
    alignSelf: "center",
  },
  popupContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  popup: {
    backgroundColor: "#0C1421",
    borderRadius: 20,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  popupText: {
    ...typography.titleSmall400,
    color: "#fff",
    textAlign: "center",
  },
  simpleText: {
    ...typography.caption500,
    color: "#122B31",
    alignSelf: "center",
  },
});
