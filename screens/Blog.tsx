import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constants/BlogData";

const Blog = () => {
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={blogs}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => {
            return <BlogCard data={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Blog;

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
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
  },
});
