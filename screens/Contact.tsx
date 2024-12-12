import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import {
  backIconGray,
  facebookSmallIcon,
  instagramIcon,
  linkIcon,
  logo,
  mailIcon,
  phoneIcon,
} from "@/assets/svg/xml";
import { Link, useNavigation, useRouter } from "expo-router";

const Contact = () => {
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
        <Text style={styles.headerText}>Bizimlə əlaqə</Text>
      </Pressable>

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SvgXml xml={logo} />
          <Text style={styles.welcome}>Xoş gəlmisiniz!</Text>
        </View>
        <View style={styles.contactRow}>
          <SvgXml xml={linkIcon} />
          <Link href="/" style={styles.contactText}>
            Vebsayt
          </Link>
        </View>
        <View style={styles.contactRow}>
          <SvgXml xml={phoneIcon} />
          <Link href="/" style={styles.contactText}>
            Əlaqə nömrəsi
          </Link>
        </View>
        <View style={styles.contactRow}>
          <SvgXml xml={mailIcon} />
          <Link href="/" style={styles.contactText}>
            Email
          </Link>
        </View>
        <View style={styles.contactRow}>
          <SvgXml xml={instagramIcon} />
          <Link href="/" style={styles.contactText}>
            instagram
          </Link>
        </View>
        <View style={styles.contactRow}>
          <SvgXml xml={facebookSmallIcon} />
          <Link href="/" style={styles.contactText}>
            Facebook
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginBottom: 60,
  },
  welcome: {
    ...typography.titleLarge400,
    color: Colors.light.green,
  },
  contactRow: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
  },
  contactText: {
    ...typography.headline400,
    color: Colors.light.green,
  },
});
