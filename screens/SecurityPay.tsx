import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import Header from "@/components/Header";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SecurityPay = () => {
  const [checkedOptions, setCheckedOptions] = useState({
    card: false,
    cash: false,
  });

  const toggleCheckbox = (option: "card" | "cash") => {
    setCheckedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Güvənli ödəniş</Text>
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
            <View style={styles.container}>
              <View style={styles.box}>
                <Text style={styles.title}>Ödəniş seçimləri :</Text>
                <View style={styles.option}>
                  <CustomCheckbox
                    checked={checkedOptions.card}
                    onChange={() => toggleCheckbox("card")}
                    color="#226d64"
                    label="Kart ilə ödə"
                    labelStyles={styles.optionText}
                  />
                </View>
                <View style={styles.option}>
                  <CustomCheckbox
                    checked={checkedOptions.cash}
                    onChange={() => toggleCheckbox("cash")}
                    color="#226d64"
                    label="Klinikada nəğd ödəniş"
                    labelStyles={styles.optionText}
                  />
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.title}>Kart Məlumatları:</Text>
                <CustomInput
                  label="Kart Nömrəsi"
                  style={{ paddingVertical: 12 }}
                />
                <View style={{ flexDirection: "row", gap: 46 }}>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <CustomInput
                        placeholderText="Ay"
                        style={{
                          width: 84,
                          borderRadius: 5,
                          paddingVertical: 12,
                        }}
                        label="Son istifadə tarixi"
                      />
                      <CustomInput
                        label=" "
                        placeholderText="İl"
                        style={{
                          width: 84,
                          borderRadius: 5,
                          paddingVertical: 12,
                        }}
                      />
                    </View>
                  </View>
                  <CustomInput
                    label="CVV"
                    placeholderText="CVV"
                    style={{ width: 84, borderRadius: 5, paddingVertical: 12 }}
                  />
                </View>
              </View>
              <View style={styles.total}>
                <Text style={styles.totalText}>
                  2 xidmət : Kardioloq müayinəsi, USM
                </Text>
                <Text style={styles.totalText}>Konsultasiya xidməti</Text>
                <Text style={styles.totalText}>Toplam : 120 ₼ </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <CustomInput
                  placeholderText="Promo kod daxil edin:"
                  style={{
                    width: 203,
                    paddingVertical: 12,
                    marginVertical: 10,
                  }}
                />
              </View>
              <View style={styles.endBox}>
                <View style={{ gap: 1 }}>
                  <Text
                    style={{
                      ...typography.headline400,
                      color: Colors.light.darkGreen,
                    }}
                  >
                    Toplam
                  </Text>
                  <Text>120 ₼</Text>
                </View>
                <CustomButton
                  title="Təsdiq et və bitir"
                  buttonStyles={{ width: 197 }}
                  textStyles={styles.btnText}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SecurityPay;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  box: {
    backgroundColor: Colors.light.lightGreenHover,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 5,
    marginVertical: 10,
  },
  title: {
    ...typography.titleSmall400,
    color: Colors.light.green,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  optionText: {
    ...typography.headline400,
    color: Colors.light.green,
  },
  total: {
    backgroundColor: Colors.light.green,
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 12,
  },
  totalText: {
    color: Colors.light.lightGreenActive,
  },
  endBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.light.lightGreenHover,
  },
  btnText: { ...typography.headline400 },
});
