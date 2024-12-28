import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useSelector } from "react-redux";
import Burger from "@/components/Burger";
import { RootState } from "@/store/store";
import TabButton from "@/components/TabButton";
import { Dow } from "@/assets/svg/aysun";
import { SvgXml } from "react-native-svg";

const UserScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {isBurgerOpen ? <Burger /> : null}
        <Header />
        <Text style={styles.greeting}>
          Filan həkimdən analiz nəticəsini yoxlatmaq üçün aşağıdakı xanaları
          doldurun{" "}
        </Text>
        <View style={styles.main}>
          <CustomInput
            label="Ad/Soyad"
            placeholderText="Fidan Haqverdiyeva"
            style={{ marginBottom: 16 }}
          />

          <CustomInput
            label="Mobil nömrə"
            placeholderText="fidanhaqverdiyeva299gmail.com"
            style={{ marginBottom: 16 }}
          />

          <CustomInput
            label="Fin kod"
            placeholderText="45962"
            style={{ marginBottom: 16 }}
          />

          <CustomInput
            label="Analiz nəticəsini jpg formatında yerləşdirin"
            iconAfter={Dow}
            placeholderText="jpg"
            style={{ marginBottom: 16 }}
          />

          <View style={styles.button}>
            <CustomInput
              label="Şikayətinizi qeyd edin"
              placeholderText="San Jose, California, USA"
              style={{
                width: 370.0768737792969,
                height: 148.31663513183594,
                borderRadius: 19.999998092651367,
                borderWidth: 1.0513547658920288,
                // borderColor: "rgba(31, 136, 113, 1.0)",
              }}
            />
          </View>

          <CustomButton
            title={"Dəvam et"}
            buttonStyles={{
              marginTop: 19,
              marginBottom: 20,
              width: 183,
              borderRadius: 20,
              alignSelf: "center",
              color: "#226D64",
            }}
          />
        </View>
      </ScrollView>

      <TabButton style={styles.tabButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 80,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greeting: {
    width: 332,
    height: 114,
    top: 8,
    left: 28,
    fontFamily: "Poppins",
    fontSize: 25,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 25,
    textAlign: "center",
    color: "#000000",
  },

  main: {
    paddingHorizontal: 16,
  },
  tabButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  button: {
    width: 370.0768737792969,
    height: 180.72747802734375,
  },
});

export default UserScreen;
