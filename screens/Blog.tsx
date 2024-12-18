import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constants/BlogData";
import axios from "axios";
import CustomInput from "@/components/CustomInput";
import { SvgXml } from "react-native-svg";
import { Filtre, Search } from "@/assets/svg/aysun";


const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBlogData = async () => {
    const { data } = await axios("https://sefatapp.up.railway.app/blogs");
    setBlogData(data);
    setLoading(false);
  };

  useEffect(() => {
    getBlogData();
  }, []);
  function handleUpdateInfo(e: NativeSyntheticEvent<NativeTouchEvent>): void {
    throw new Error("Function not implemented.");
  }

  function onPress(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <CustomInput
        placeholderText="Axtaris"
        style={{
          width: 365,
          height: 44,
          marginLeft:10,
          borderRadius: 6,
          backgroundColor: "#FFFFFF",
          shadowColor: "rgba(0, 0, 0, 0.08)",
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowRadius: 20,
          shadowOpacity: 1
        }}
        onPress={handleUpdateInfo}
      />
    <SvgXml xml={Search} width={50} height={17} />
      
      <View style={styles.container}>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            showsVerticalScrollIndicator={false}
            data={blogData}
            keyExtractor={(item: any) => item._id}
            renderItem={({ item }: any) => {
              return <BlogCard data={item} />;
            }}
          />
        )}
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#0f312d",
    borderRadius: 8,
  },
});
