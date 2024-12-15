import {
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { SvgXml } from "react-native-svg";
import { logo } from "@/assets/svg/xml";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";

export default function FirstPage() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.title}>
          <SvgXml xml={logo} />
          <Text style={styles.welcome}>Xoş gəlmisiniz!</Text>
        </View>
        <View style={styles.buttonGroup}>
          <CustomButton
            title=" Həkim kimi daxil ol"
            onPress={() => router.replace("/(auth)/sign-in")}
          />
          <CustomButton
            title="Pasiyent kimi daxil ol"
            onPress={() => router.replace("/(auth)/user-patient")}
          />
        
          <Button
            title="Qonaq kimi davam et"
            color={Colors.light.green}
            onPress={() => router.replace("/(dashboard)/blogs/blog")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 100,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  welcome: {
    ...typography.titleLarge400,
    color: Colors.light.green,
  },
  buttonGroup: {
    width: "100%",
    gap: 20,
  },
});
