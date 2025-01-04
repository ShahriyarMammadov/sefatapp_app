import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import UserHeader from "@/components/UserHeader";
import { doctors } from "@/constants/DoctorsData";
import { SvgXml } from "react-native-svg";
import {
  Medicalfiles,
  Profileicon,
  analysis,
  calendaroutline,
} from "@/assets/svg/aysun";
import SvgIcon from "@/components/SvgIcon";
import TabMenu from "@/components/TabMenu";

const reviews = [
  {
    id: "1",
    name: "Fatima Huseynova",
    review:
      "Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.",
    image: require("@/assets/images/patient1.png"),
  },
  {
    id: "2",
    name: "Narmin",
    review:
      "Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.",
    image: require("@/assets/images/patient2.png"),
  },
  {
    id: "3",
    name: "Lala",
    review:
      "Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.",
    image: require("@/assets/images/patient3.png"),
  },
];

const BlogDetail = () => {
  const selectedDoctor = doctors.find((item: any) => item.id === 1);

  const renderReview = ({ item }: any) => (
    <View style={styles.reviewContainer}>
      <Image style={styles.patientImage} source={item.image} />
      <View style={styles.reviewContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.reviewText}>{item.review}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <View style={styles.userHeader}></View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.dooctorTop}>
            <View style={styles.dooctorImgBox}>
              <Image
                style={styles.dooctorImg}
                source={require("@/assets/images/doctor.png")}
              />
            </View>
          </View>
          <Text style={styles.title}>Dr. Jenny Wilson </Text>
          <SvgIcon />
          <Text style={styles.text}>Xidmətlər</Text>

          {/* <Text style={styles.title}>Xəstəxana: Baku Medical Center</Text>
          <Text style={styles.title}>
            Haqqında: Lorem ipsum dolor sit amet consectetur. Nisl leo laoreet
            cursus dis tellus amet nec sit. In sed enim quis suspendisse porta
            sit quis arcu amet. Sed accumsan eget at pulvinar. Enim erat
            consectetur sapien congue. Non pharetra iaculis vel faucibus amet
            suscipit a et. Urna diam nisl ipsum massa duis praesen
          </Text> */}

          {/* <View style={styles.total}>
            <Text style={styles.totalText}>Resept Yazdır:</Text>
            <Text style={styles.totalText}>Analiz cavabını yoxla: 50 azn</Text>
            <Text style={styles.totalText}>Rezervasiya təyin et: 50 azn</Text>
          </View> */}
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.Word}>Sertifikatlar</Text>
            <Text style={styles.Word}>Portfolio</Text>
          </View> */}
          <View style={styles.cardsRow}>
            <View style={styles.xidmetCard}>
              <Pressable style={styles.cardContent}>
                <SvgXml xml={Medicalfiles} />
                <Text style={styles.cardPrice}>50 azn</Text>
              </Pressable>
              <Text style={styles.sendButtonText}>Resept yazdır</Text>
            </View>
            <View style={styles.xidmetCard}>
              <Pressable style={styles.cardContent}>
                <SvgXml xml={analysis} />
                <Text style={styles.cardPrice}>50 azn</Text>
              </Pressable>
              <Text style={styles.sendButtonText}>Analiz cavabını yoxla</Text>
            </View>
            <View style={styles.xidmetCard}>
              <Pressable style={styles.cardContent}>
                <SvgXml xml={calendaroutline} />
                <Text style={styles.cardPrice}>50 azn</Text>
              </Pressable>
              <Text style={styles.sendButtonText}>Rezervasiya təyin et</Text>
            </View>
          </View>
          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Rəyiniz</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Rəyinizi əlavə edin.."
                multiline
              />
            </View>
            <FlatList
              data={reviews}
              renderItem={renderReview}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <TabMenu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBlockEnd: 100,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  userHeader: {
    paddingTop: 0,
    paddingBottom: 36,
  },
  dooctorTop: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 19,
  },
  dooctorImgBox: {
    overflow: "hidden",
    height: 251,
  },
  dooctorImg: {
    width: 375,
    height: 300.501220703125,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnsGroup: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
  },
  btn: {
    backgroundColor: "#1F8871",
    paddingVertical: 10,
    width: "100%",
  },
  btnText: {
    color: "#fff",
    ...typography.subhead400,
  },
  title: {
    ...typography.titleMedium700,
    color: "black",
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#101010",
    marginBlock: 16,
  },
  titleText: {
    ...typography.titleSmall700,
    color: Colors.light.green,
  },
  total: {
    backgroundColor: Colors.light.green,
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 12,
    borderRadius: 10,
  },
  totalText: {
    color: "#fff",
  },
  Word: {
    ...typography.headline500,
  },
  reviewSection: {
    marginTop: 20,
  },
  reviewTitle: {
    ...typography.headline400,
    color: "#208971",
  },
  inputContainer: {
    backgroundColor: "#f3f1ec",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 100,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#f3f1ec",
    marginRight: 10,
  },
  reviewContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    ...typography.titleXSmall400,
  },
  reviewText: {
    fontSize: 14,
    color: "#272727",
  },
  patientImage: {
    width: 34.19,
    height: 34.19,
    borderRadius: 50,
    objectFit: "cover",
  },
  value: {
    ...typography.headline700,
  },
  cardsRow: {
    flexDirection: "row",
    gap: 8,
  },
  xidmetCard: {
    flex: 1,
    padding: 8,
    backgroundColor: "#248C76",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 8,
  },
  sendButtonText: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#FFFFFF",
    marginTop: 8,
  },
  cardPrice: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#FFFFFF",
    marginTop: 8,
  },
});

export default BlogDetail;
