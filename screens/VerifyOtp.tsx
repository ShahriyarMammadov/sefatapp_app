import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { useVerifyOtpMutation } from "@/store/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
} from "react-native";

interface FormData {
  email?: string;
  phoneNumber?: string;
  otp?: number;
}

interface SignupResponse {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
  ipAddress: string;
  profileImageURL: string;
  isActive: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState<number>(10);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [isResendAvailable, setIsResendAvailable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<SignupResponse>();
  const [verify, { isLoading, isError, isSuccess, data }] =
    useVerifyOtpMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo: any = await AsyncStorage.getItem("userInfo");
        setUserData(JSON.parse(userInfo));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendAvailable(true);
    }
  }, [timer]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerifyPress = async () => {
    Keyboard.dismiss();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // router.replace("/(auth)/new-password");
    }, 2000);

    const formData: FormData = {
      email: userData?.email,
      phoneNumber: userData?.phoneNumber,
      otp: Number(otp.join("")),
    };

    try {
      const result: SignupResponse = await verify(formData).unwrap();
      if (isSuccess) {
        const userInfo = JSON.stringify(result);
        await AsyncStorage.setItem("userInfo", userInfo);
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("OTP xəta");
    }
  };

  const handleResendPress = () => {
    setTimer(10);
    setIsResendAvailable(false);
    console.log("Yeni kod göndərildi");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.styletext}>Mailinizi yoxlayın {"\n"}</Text>
          <Text style={styles.infoText}>
            We sent a reset link to alpha...@gmail.com enter 5 digit code that
            mentioned in the email
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(e) => (inputs.current[index] = e)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleChangeText(text, index)}
                value={digit}
              />
            ))}
          </View>
          <CustomButton title="Kodu doğrulayın" onPress={handleVerifyPress} />

          <TouchableOpacity
            onPress={handleResendPress}
            disabled={!isResendAvailable}
            style={styles.resendButton}
          >
            <Text style={styles.message}>{"\n"}Haven’t got the email yet?</Text>
            <View style={styles.contain}>
              <Text
                style={[
                  styles.timerText,
                  isResendAvailable ? styles.activeText : styles.inactiveText,
                ]}
              >
                {" "}
                <Text style={styles.message}>
                  {"\n"}Haven’t got the email yet?
                </Text>
                Resend email{timer > 0 ? `: ${timer} sn` : ""}
              </Text>
            </View>
          </TouchableOpacity>

          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 13,
    width: "100%",
    marginTop: 50,
    marginBottom: 40,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: "#E1E1E1",
    borderRadius: 14,
    textAlign: "center",
    fontSize: 24,
    color: Colors.light.green,
  },
  resendButton: {
    marginBottom: 35,
  },
  timerText: {
    color: "#648DDB",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  activeText: {
    color: "#648DDB",
  },
  inactiveText: {
    color: "#999999",
  },
  infoText: {
    color: "#989898",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9,
  },
  styletext: {
    color: "#1E1E1E",
    fontFamily: "Poppins",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19.098,
  },
  contain: {
    flex: 1,
    alignItems: "flex-end",
  },
  message: {
    color: "#989898",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  resend: {
    color: "#648DDB",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});
