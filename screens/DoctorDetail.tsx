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
  {
    id: "4",
    name: "Nargiz",
    review:
      "Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.",
    image: require("@/assets/images/patient4.png"),
  },
  {
    id: "5",
    name: "Menzi",
    review:
      "Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas orci facilisis blandit. Vitae suspendisse blandit interdum phasellus.",
    image: require("@/assets/images/patient5.png"),
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
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
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
            <View style={styles.btnsGroup}>
              <Text style={styles.titleText}>Uzman Dr.Jalə</Text>
              <CustomButton
                title="Resept yazdır"
                buttonStyles={styles.btn}
                textStyles={styles.btnText}
              />
              <CustomButton
                title="Analiz cavabımı yoxla"
                buttonStyles={styles.btn}
                textStyles={styles.btnText}
              />
              <CustomButton
                title="Rezervasiya təyin et"
                buttonStyles={styles.btn}
                textStyles={styles.btnText}
              />
            </View>
          </View>
          <Text style={styles.title}>Reyting: </Text>
          <Text style={styles.Text}>İxtisas: Psixoloq</Text>
          <Text style={styles.title}>Xəstəxana: Baku Medical Center</Text>
          <Text style={styles.title}>
            Haqqında: Lorem ipsum dolor sit amet consectetur. Nisl leo laoreet
            cursus dis tellus amet nec sit. In sed enim quis suspendisse porta
            sit quis arcu amet. Sed accumsan eget at pulvinar. Enim erat
            consectetur sapien congue. Non pharetra iaculis vel faucibus amet
            suscipit a et. Urna diam nisl ipsum massa duis praesen
          </Text>

          <View style={styles.total}>
            <Text style={styles.totalText}>Resept Yazdır:</Text>
            <Text style={styles.totalText}>Analiz cavabını yoxla: 50 azn</Text>
            <Text style={styles.totalText}>Rezervasiya təyin et: 50 azn</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.Word}>Sertifikatlar</Text>
            <Text style={styles.Word}>Portfolio</Text>
          </View>

          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Rəyiniz</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Rəyinizi əlavə edin.."
                multiline
              />
              <Pressable style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Göndər</Text>
              </Pressable>
            </View>
            <FlatList
              data={reviews}
              renderItem={renderReview}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Pressable style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Hamısını gör</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
  },
  dooctorTop: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 19,
  },
  dooctorImgBox: {
    overflow: "hidden",
    borderRadius: 0,
    height: 251,
  },
  dooctorImg: {
    width: 181,
    height: "100%",
    resizeMode: "cover",
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
    ...typography.headline400,
    color: Colors.light.green,
  },
  Text: {
    ...typography.subhead700,
    color: Colors.light.green,
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
});

export default BlogDetail;
