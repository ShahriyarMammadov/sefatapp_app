import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { router, useGlobalSearchParams } from "expo-router";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import { blogs } from "@/constants/BlogData";
import CustomButton from "@/components/CustomButton";

const BlogDetail = () => {
  const { blogsId } = useGlobalSearchParams<any>();
  const selectedBlog = blogs.find((item) => item.id === parseInt(blogsId));
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Blog</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.banner}>
            <Image source={selectedBlog?.image} style={styles.bannerImg} />
          </View>
          <Text style={styles.title}>{selectedBlog?.title}</Text>
          <Text style={styles.description}>{selectedBlog?.description}</Text>
          <View style={{ alignSelf: "flex-end" }}>
            <CustomButton
              title="Digər bloga keçid edin"
              buttonStyles={{ width: 200 }}
              textStyles={{ ...typography.subhead400 }}
              onPress={() => router.replace("/(dashboard)/blogs/blog")}
            />
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
});
