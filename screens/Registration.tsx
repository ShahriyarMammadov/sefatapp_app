import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { useLoginMutation } from "@/store/appSlice";
import { typography } from "@/constants/Typography";
import ImageUploader from "@/components/ImageUploader";
import BurgerMenu from "@/components/BurgerMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

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

const Profile = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "+994",
    identify: "",
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
      try {
        const result = await updateProfile(formData).unwrap();
        if (isSuccess) {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {isBurgerOpen ? <BurgerMenu /> : null}
      <Header burger />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>
            <View style={styles.profileTop}>
              <View style={styles.profileImgBox}>
                <Image
                  style={styles.profileImg}
                  source={require("@/assets/images/profile.jpg")}
                />
                <View style={styles.imgEdit}>
                  <CustomButton
                    title="Şəklini Redaktə et"
                    buttonStyles={styles.uploadBtn}
                    textStyles={styles.uploadBtnText}
                  />
                </View>
              </View>
              <View style={styles.btnsGroup}>
                <CustomButton
                  title="Rezervasiyalarım"
                  buttonStyles={styles.btn}
                  textStyles={styles.btnText}
                />
                <CustomButton
                  title="Analiz Nəticələrim"
                  buttonStyles={styles.btn}
                  textStyles={styles.btnText}
                />
                <CustomButton
                  title="Reseptlərim"
                  buttonStyles={styles.btn}
                  textStyles={styles.btnText}
                />
                <CustomButton
                  title="Ünvan məlumatları"
                  buttonStyles={styles.btn}
                  textStyles={styles.btnText}
                />
                <CustomButton
                  title="Rəy bildirdiklərim"
                  buttonStyles={styles.btn}
                  textStyles={styles.btnText}
                />
              </View>
            </View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.inputsGroup}>
                <ImageUploader />
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
                <CustomButton
                  title="Yadda saxla"
                  onPress={handleUpdateInfo}
                  buttonStyles={{ marginTop: 15, marginBottom: 20 }}
                  loading={isLoading}
                />
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

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
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  inputsGroup: {
    flex: 1,
    gap: 12,
  },
  profileTop: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 19,
  },
  profileImg: {
    width: 181,
    height: "100%",
    resizeMode: "cover",
  },
  profileImgBox: {
    overflow: "hidden",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    height: 251,
  },
  btnsGroup: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
  },
  btn: {
    backgroundColor: "#BAD2CF",
    paddingVertical: 10,
    width: "100%",
  },
  btnText: {
    color: "#0C2623",
    ...typography.subhead400,
  },
  imgEdit: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  uploadBtn: {
    borderRadius: 0,
    paddingVertical: 15,
  },
  uploadBtnText: {
    ...typography.subhead400,
  },
});
