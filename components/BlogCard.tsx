import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { faceIcon, instaIcon } from "@/assets/svg/xml";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const BlogCard = ({ data }: any) => {
  return (
    <Pressable
      style={styles.cardBox}
      onPress={() => router.replace(`/blogs/${data.id})`)}
    >
      <View style={styles.imgBox}>
        <Image source={{uri:data.imageURL}} style={styles.img} />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc} numberOfLines={4} ellipsizeMode="tail">
          {data.description}
        </Text>
        <View style={styles.bottom}>
          <Pressable>
            <Text style={styles.continue}>Davamını oxu</Text>
          </Pressable>
          <View style={styles.social}>
            <Text style={styles.share}>Paylaş:</Text>
            <SvgXml xml={instaIcon} />
            <SvgXml xml={faceIcon} />
          </View>
        </View>
      </View>
      {/* <View style={styles.imgBox}>
        <Image
          source={require("@/assets/images/cardio.png")}
          style={styles.img}
        />
      </View> */}
    </Pressable>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  cardBox: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  imgBox: {
    width: 174,
    height: 196,
    borderRadius: 12,
    overflow: "hidden",
    resizeMode: "cover",
  },
  img: {
    width: 174,
    height: 196,
  },
  rightSide: {
    paddingRight: 200,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    ...typography.titleSmall600,
    color: Colors.light.green,
    alignSelf: "center",
    marginBottom: 22,
  },
  desc: {
    ...typography.headline400,
    color: Colors.light.darkGreen,
  },
  bottom: {
    flexDirection: "column",
    gap: 10,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  continue: {
    ...typography.caption600,
    color: Colors.light.darkGreen,
  },
  share: {
    ...typography.caption600,
    color: Colors.light.green,
  },
});
