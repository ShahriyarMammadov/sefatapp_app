import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { eyeClose, eyeOpen } from "@/assets/svg/xml";

const NewPassword = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] =
    useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const confirmationPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignIn = (): void => {
    if (password.length < 6) {
      setPasswordError("Şifrə ən az 6 simvol olmalıdır");
    } else {
      setPasswordError("");
    }

    if (!confirmationPassword() || password.length < 6) {
      setConfirmPasswordError("Yeni şifrəni doğru yazın");
    } else {
      setConfirmPasswordError("");
      console.log("Form Data:");
      console.log("Password:", password);
      console.log("confirmPassword:", confirmPassword);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputsGroup}>
          <Text style={styles.registerText}>Yeni şifrə</Text>
          <CustomInput
            secureTextEntry={secureTextEntry}
            iconAfter={secureTextEntry ? eyeOpen : eyeClose}
            label="Yeni şifrə"
            placeholderText="Yeni şifrə"
            onCancel={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            error={passwordError ? passwordError : undefined}
            helperText={passwordError}
            style={
              passwordError ? { borderColor: Colors.light.errorRed } : undefined
            }
            placeholderTextColor={Colors.light.lightGreenActive}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
          <CustomInput
            secureTextEntry={secureTextEntryConfirm}
            iconAfter={secureTextEntryConfirm ? eyeOpen : eyeClose}
            label="Şifrəni təsdiqlə"
            placeholderText="Yeni şifrə"
            onCancel={() => {
              setSecureTextEntryConfirm(!secureTextEntryConfirm);
            }}
            error={confirmPasswordError ? confirmPasswordError : undefined}
            helperText={confirmPasswordError}
            style={
              confirmPasswordError
                ? { borderColor: Colors.light.errorRed }
                : undefined
            }
            placeholderTextColor={Colors.light.lightGreenActive}
            value={confirmPassword}
            onChangeText={(text: string) => setConfirmPassword(text)}
          />
          <CustomButton
            title="Yadda saxla"
            buttonStyles={styles.CustomButton}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;

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
  registerText: {
    ...typography.titleSmall600,
    color: Colors.light.greenActive,
  },
  CustomButton: {
    gap: 12,
    marginTop: 30,
  },
});
