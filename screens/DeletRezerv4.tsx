import {
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    GestureResponderEvent,
  } from "react-native";
  import React from "react";
  import Header from "@/components/Header";
  import CustomButton from "@/components/CustomButton";
  import { typography } from "@/constants/Typography";
  
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
          <CustomButton
            title="Xeyr"
            buttonStyles={[styles.CustomButton, { marginBottom: 20 }]}
            onPress={handleSignIn}
          />
          
          <CustomButton
            title="Bəli"
            // textStyles={{Colors:"#226D64"}}
            buttonStyles={styles.Button}
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
    Button:{
        top: 90,
        left: 10,
        width: 370,
        height: 50,
        borderRadius: 6,
        backgroundColor: "#226D64",
        borderWidth: 1,
        borderColor: "rgba(34, 109, 100, 1.0)",
    }
  });
  