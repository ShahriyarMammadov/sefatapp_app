import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import { router, useGlobalSearchParams } from "expo-router";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";
import axios from "axios";

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const getBlogDetailData = async () => {
    try {
      const { data } = await axios.get(
        `https://sefatapp.up.railway.app/blogs/66fba0c2f18a0a7ba2cfa8ed`
      );
      setBlogDetail(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogDetailData();
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Blog</Text>
      </View>

      <View style={styles.container}>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.banner}>
              <Image
                source={{ uri: blogDetail?.imageURL }}
                style={styles.bannerImg}
              />
            </View>
            <Text style={styles.title}>{blogDetail?.name}</Text>
            <Text style={styles.description}>{blogDetail?.description}</Text>
            <View style={{ alignSelf: "flex-end" }}>
              <CustomButton
                title="Digər bloga keçid edin"
                buttonStyles={{ width: 200 }}
                textStyles={{ ...typography.subhead400 }}
                onPress={() => router.replace("/(dashboard)/blogs/blog")}
              />
              <CustomButton
                title={"Refresh"}
                onPress={() => {
                  setLoading(true);
                  getBlogDetailData();
                }}
              />
            </View>
          </ScrollView>
        )}
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
    marginTop: 20,
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
