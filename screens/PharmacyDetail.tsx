import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { useGlobalSearchParams } from "expo-router";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import { clinics } from "@/constants/ClinicsData";
import CustomButton from "@/components/CustomButton";
import { AntDesign } from "@expo/vector-icons";

const BlogDetail = () => {
  const { pharmacyId } = useGlobalSearchParams<any>();
  const selectedPharmacy = clinics.find(
    (item: any) => item.id === parseInt(pharmacyId)
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />

      <View style={styles.container}>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.pharmacyTop}>
            <View style={styles.pharmacyImgBox}>
              <Image
                style={styles.pharmacyImg}
                source={require("@/assets/images/pharmacy.png")}
              />
            </View>
            <View style={styles.btnsGroup}>
              <Text style={styles.titleText}>Zeytun Aptek</Text>
              <View style={styles.heartIcon}>
                <AntDesign name="hearto" size={16} color="black" />
              </View>
              <CustomButton
                title="Məhsullar"
                buttonStyles={styles.btn}
                textStyles={styles.btnText}
              />
              <View style={styles.mapImgBox}>
                <Image
                  style={styles.mapImg}
                  source={require("@/assets/images/map.png")}
                />
              </View>
            </View>
          </View>
          <Text>Ünvan:Heydər Əliyev prospekti</Text>
          <View>
            <Text style={styles.text}>
              Haqqında: Lorem ipsum dolor sit amet consectetur. Nisl leo laoreet
              cursus dis tellus amet nec sit. In sed enim quis suspendisse porta
              sit quis arcu amet. Sed accumsan eget at pulvinar. Enim erat
              consectetur sapien congue. Non pharetra iaculis vel faucibus amet
              suscipit a et. Urna diam nisl ipsum massa duis praesen
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.Word}>Sertifikatlar</Text>
            <Text style={styles.Word}>Qaleriya</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Daha çox</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BlogDetail;

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
    gap: 16,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
  },
  banner: {
    height: 154,
    overflow: "hidden",
    resizeMode: "contain",
  },
  bannerImg: {
    width: 398,
    height: 154,
  },
  title: {
    ...typography.titleMedium600,
    color: Colors.light.greenHover,
    alignSelf: "center",
  },
  description: {
    ...typography.titleSmall400,
    color: Colors.light.green,
  },
  pharmacyTop: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 19,
  },
  pharmacyImgBox: {
    overflow: "hidden",
    borderRadius: 12,
    height: 251,
  },
  pharmacyImg: {
    width: 181,
    height: "100%",
    resizeMode: "cover",
  },
  btnsGroup: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 60,
  },
  btn: {
    borderColor: "#bad2cf",
    paddingVertical: 10,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#bad2cf",
  },
  btnText: {
    color: "#0C2623",
    ...typography.subhead400,
  },
  // title: {
  //   ...typography.headline400,
  //   color: Colors.light.green,
  // },
  Text: {
    ...typography.subhead700,
    color: Colors.light.green,
  },
  titleText: {
    ...typography.titleSmall400,
    color: Colors.light.green,
  },
  mapImgBox: {
    overflow: "hidden",
    borderRadius: 0,
    height: 100,
  },
  mapImg: {
    width: 189,
    height: "112%",
    resizeMode: "cover",
  },
  text: {
    ...typography.headline400,
    color: Colors.light.green,
  },
  heartIcon: {
    position: "absolute",
    top: 6,
    right: 6,
  },
  Word: {
    ...typography.headline500,
  },
  sendButton: {
    backgroundColor: "#2d675d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
