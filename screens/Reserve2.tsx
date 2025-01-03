import React, { useState } from "react";
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
import TabButton from "@/components/TabButton";
import { useCreateReservationMutation } from "@/store/appSlice";

interface FormData {
  fullName: string;
  phone: string;
  finCode: string;
  complaint: string;
  response: string;
}

const ReservationScreen = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);
  const [createReservation, { isLoading }] = useCreateReservationMutation({});

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    finCode: "",
    complaint: "",
    response: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createReservation(formData).unwrap();
      console.log("Rezervasiya yaradıldı");
    } catch (error) {
      // alert("Xəta baş verdi: " + error.message);
      console.error("Xəta baş verdi:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {isBurgerOpen ? <BurgerMenu /> : null}
        <Header />
        <View style={styles.main}>
          <Text style={styles.title}>Rezervasiyalar</Text>
          <Text style={styles.subtitle}>Rezervasiya nömrəsi 75864</Text>
          <Text style={styles.description}>
            Filan pasiyentin nəticəsini yoxlamaq
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Ad Soyad"
              onChangeText={(value) => handleInputChange("fullName", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobil nömrə"
              keyboardType="phone-pad"
              onChangeText={(value) => handleInputChange("phone", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fin kod"
              onChangeText={(value) => handleInputChange("finCode", value)}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Şikayəti"
              multiline
              onChangeText={(value) => handleInputChange("complaint", value)}
            />
            <TouchableOpacity style={styles.fileUpload}>
              <FontAwesome name="upload" size={18} color="#226D64" />
              <Text style={styles.fileUploadText}>
                Analiz nəticəsini jpg formatında yerləşdirin
              </Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Cavabınızı qeyd edin"
              onChangeText={(value) => handleInputChange("response", value)}
            />
            <View style={styles.responseIcons}>
              <FontAwesome name="paperclip" size={18} color="#226D64" />
              <FontAwesome name="image" size={18} color="#226D64" />
              <MaterialIcons name="send" size={20} color="#226D64" />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}
              disabled={isLoading}
            >
              <Text style={styles.submitText}>
                {isLoading ? "Yüklənir..." : "Təsdiqlə"}
              </Text>
            </TouchableOpacity>
          </View>
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
      <TabButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  main: { paddingHorizontal: 16 },
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
