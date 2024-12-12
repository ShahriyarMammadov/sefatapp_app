import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { RootState } from "@/store/store";
import BurgerMenu from "@/components/BurgerMenu";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ReservationScreen = () => {
    const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      {isBurgerOpen ? <BurgerMenu /> : null}
        <Header />
        <Text style={styles.title}>Rezervasiyalar</Text>
        <Text style={styles.subtitle}>Rezervasiya nömrəsi 75864</Text>
        <Text style={styles.description}>
          Filan pasiyentin nəticəsini yoxlamaq
        </Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Ad Soyad" />
          <TextInput
            style={styles.input}
            placeholder="Mobil nömrə"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Fin kod"
            
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Şikayəti"
            multiline
          />
          <TouchableOpacity style={styles.fileUpload}>
            <FontAwesome name="upload" size={18} color="#226D64" />
            <Text style={styles.fileUploadText}>
              Analiz nəticəsini jpg formatında yerləşdirin
            </Text>
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Cavabınızı qeyd edin" />
          <View style={styles.responseIcons}>
            <FontAwesome name="paperclip" size={18} color="#226D64" />
            <FontAwesome name="image" size={18} color="#226D64" />
            <MaterialIcons name="send" size={20} color="#226D64" />
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Təsdiqlə</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Ödəniş üsulu: Kartla ödəniş</Text>
          <Text style={styles.footerText}>Xidmət: Rezervasiya təyin et</Text>
          <Text style={styles.footerText}>Rezervasiya tarixi : 03.10.24</Text>
          <Text style={styles.footerText}>Rezervasiya saatı: 14:00</Text>
          <Text style={styles.footerText}>Ödəniş məbləği: 60 azn</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#226D64",
  },
  menuButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#226D64",
    textAlign: "center",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#226D64",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#226D64",
    textAlign: "center",
    marginBottom: 15,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#226D64",
    borderRadius: 20,
    padding: 10,
    marginVertical: 11,
    fontSize: 18,
    color: "#226D64",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  fileUpload: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#226D64",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  fileUploadText: {
    marginLeft: 10,
    color: "#226D64",
    fontSize: 14,
  },
  responseIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: "#226D64",
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  footer: {
    backgroundColor: "#226D64",
    padding: 12,
    paddingVertical: 16,
    width: "100%",
    bottom: 0,
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginVertical: 2,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ReservationScreen;
