import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import { backIconGray, logo } from "@/assets/svg/xml";
import { useNavigation, useRouter } from "expo-router";

const About = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace("/(auth)/first-page");
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.header} onPress={handleBackPress}>
        <SvgXml xml={backIconGray} style={styles.backIcon} />
        <Text style={styles.headerText}>Haqqımızda</Text>
      </Pressable>

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topContainer}>
            <SvgXml xml={logo} />
            <Text style={styles.welcome}>Xoş gəlmisiniz!</Text>
          </View>
          <Text style={styles.firstText}>
            Bizim onlayn qəbul portalımız, sizə ən yaxşı tibbi xidmətləri təqdim
            etmək üçün yaradılmışdır. Məqsədimiz, keyfiyyətli və rahat tibbi
            yardımı hər kəsə əlçatan etməkdir. Peşəkar həkimlərimiz və təcrübəli
            tibbi personalımız, sizin sağlamlığınızı qorumaq və yaxşılaşdırmaq
            üçün həmişə yanınızdadır.
          </Text>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Bizim missiyamız</Text>
          </View>
          <Text style={styles.secondText}>
            - Sürətli və etibarlı tibbi məsləhətləri onlayn olaraq təqdim etmək{" "}
            {"\n"}- Pasiyentlərə fərdi yanaşma ilə xidmət göstərmək {"\n"}- Ən
            son texnologiyalardan istifadə edərək müasir tibbi xidmətlər
            göstərmək
          </Text>
          <View style={styles.titleBox}>
            <Text style={styles.title}> Niyə biz?</Text>
          </View>
          <Text style={styles.thirdText}>
            <Text style={styles.strongText}>- Peşəkar həkimlər:</Text>
            Təcrübəli və sertifikatlı mütəxəssislər{"\n"}
            <Text style={styles.strongText}>- Rahatlıq:</Text> Onlayn
            məsləhətlərin rahatlığı və əlçatanlığı{"\n"} -
            <Text style={styles.strongText}> Təhlükəsizlik:</Text>
            Məlumatlarınızın gizliliyi və təhlükəsizliyi təmin edilir
          </Text>
          <Text style={styles.endText}>
            Bizimlə əlaqə saxlayın və sağlıq problemlərinizin həllini bir kliklə
            tapın. Sağlam gələcək üçün birlikdə addımlayaq.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;

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
    gap: 20,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    left: 0,
    bottom: 7.8,
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },
  welcome: {
    ...typography.titleLarge400,
    color: Colors.light.green,
  },
  firstText: {
    ...typography.headline400,
    color: Colors.light.greenHover,
    alignSelf: "flex-start",
  },
  title: {
    ...typography.titleSmall400,
    color: Colors.light.lightGreenHover,
    textAlign: "center",
  },
  titleBox: {
    borderRadius: 20,
    backgroundColor: Colors.light.green,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginVertical: 24,
  },
  secondText: {
    ...typography.headline400,
    color: Colors.light.darkGreen,
    alignSelf: "flex-start",
  },
  thirdText: {
    ...typography.headline400,
    color: Colors.light.greenHover,
  },
  strongText: {
    ...typography.headline500,
  },
  endText: {
    ...typography.headline500,
    color: Colors.light.greenHover,
  },
});
