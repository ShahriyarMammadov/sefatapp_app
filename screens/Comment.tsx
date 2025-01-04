import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { typography } from "@/constants/Typography";
import Header from "@/components/Header";
import { doctors } from "@/constants/DoctorsData";
import { StarIcon } from "@/assets/svg/aysun";
import { SvgXml } from "react-native-svg";
import TabMenu from "@/components/TabMenu";
import BurgerMenu from "@/components/Burger";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const reviews = [
  {
    id: "1",
    name: "Rihanna Josephine",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lobortis nibh. Duis porta justo vitae est bibendum, vel cursus sapien viverra.",
    time: "2 hours ago",
    rating: 4,
  },
  {
    id: "1",
    name: "Rihanna Josephine",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lobortis nibh. Duis porta justo vitae est bibendum, vel cursus sapien viverra.",
    time: "2 hours ago",
    rating: 4,
  },
  {
    id: "1",
    name: "Rihanna Josephine",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lobortis nibh. Duis porta justo vitae est bibendum, vel cursus sapien viverra.",
    time: "2 hours ago",
    rating: 4,
  },
  {
    id: "1",
    name: "Rihanna Josephine",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lobortis nibh. Duis porta justo vitae est bibendum, vel cursus sapien viverra.",
    time: "2 hours ago",
    rating: 4,
  },
  {
    id: "1",
    name: "Rihanna Josephine",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lobortis nibh. Duis porta justo vitae est bibendum, vel cursus sapien viverra.",
    time: "2 hours ago",
    rating: 4,
  },
];

const BlogDetail = () => {
  const selectedDoctor = doctors.find((item: any) => item.id === 1);
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  const renderReview = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>
            {item.name}{" "}
            <Text style={styles.link}>sənin haqqında rəy bildirdi</Text>
          </Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.moreOptions}>•••</Text>
      </View>
      <View style={styles.rating}>
        <SvgXml xml={StarIcon} />
      </View>
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.Text}>Salam, Dr. Walter</Text>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.reviewSection}>
            <FlatList
              data={reviews}
              renderItem={renderReview}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
      <TabMenu />
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
  Text: {
    ...typography.titleMedium400,
    color: "#1F8871",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#1F8871",
  },
  time: {
    fontSize: 12,
    color: "#777",
  },
  moreOptions: {
    fontSize: 18,
    color: "#777",
  },
  rating: {
    flexDirection: "row",
    marginBottom: 5,
  },
  comment: {
    fontSize: 12,
    color: "#555",
  },
  reviewSection: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default BlogDetail;
