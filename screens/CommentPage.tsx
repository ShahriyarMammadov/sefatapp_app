import React from "react";
import {
    View,
    Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { RootState } from "@/store/store";
import BurgerMenu from "@/components/BurgerMenu";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { typography } from "@/constants/Typography";

const ReservationScreen = () => {
    const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView style={styles.container}> */}
      {isBurgerOpen ? <BurgerMenu /> : null}
        <Header />
        <View>
        <Text style={styles.Text}>Salam, Dr.Aydin</Text>
        <Text>{''}</Text>
        <Text>{''}</Text>
        <Text style={styles.Text}>İmtina et</Text>
        </View>
        <View>
            
        </View>
     
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Text: {
    ...typography.titleMedium700,
    color: "#1F8871",
    textAlign: "center",
  },
});

export default ReservationScreen;