import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";

const CommentCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Pressable onPress={toggleText}>
      <View style={styles.cardBox}>
        <View style={styles.profileImg}>
          <Image
            source={require("@/assets/images/profile.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.commentContent}>
          <Text style={styles.title}>
            Fatima Huseynova rəy bildirdi Həkim haqqında
          </Text>
          <Text
            style={styles.commentDesc}
            numberOfLines={isExpanded ? undefined : 5}
            ellipsizeMode="tail"
          >
            Lorem ipsum dolor sit amet consectetur. At pretium turpis egestas
            vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat egestas
            orci facilisis blandit. Vitae suspendisse blandit interdum
            phasellus.Lorem ipsum dolor sit amet consectetur. At pretium turpis
            egestas vitae. Urna elit arcu et sagittis nisl. Id volutpat feugiat
            egestas orci facilisis blandit. Vitae suspendisse blandit interdum
            phasellus.
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  cardBox: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.light.darkGreen,
    paddingLeft: 3,
    paddingRight: 70,
    paddingVertical: 28,
  },
  commentContent: {
    gap: 8,
  },
  title: {
    ...typography.headline400,
    color: Colors.light.darkGreen,
  },
  commentDesc: {
    ...typography.caption400,
    color: Colors.light.green,
  },
  profileImg: {
    width: 45,
    height: 45,
    overflow: "hidden",
    borderRadius: 100,
  },
  img: {
    width: 45,
    height: 45,
  },
});
