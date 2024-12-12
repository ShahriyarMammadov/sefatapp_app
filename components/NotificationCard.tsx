import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { notificationIcon } from "@/assets/svg/xml";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";

interface NotificationCardProps {
  initialIsRead?: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  initialIsRead,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRead, setIsRead] = useState(initialIsRead);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
    if (!isRead) {
      setIsRead(true);
    }
  };

  return (
    <Pressable
      onPress={toggleText}
      style={[
        styles.notificationBox,
        isRead
          ? { backgroundColor: "#226D64A6" }
          : { backgroundColor: Colors.light.green },
      ]}
    >
      <View>
        <SvgXml xml={notificationIcon} />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.title}>Rezerviniz təsdiqləndi.</Text>
        <Text
          style={styles.notificationDesc}
          numberOfLines={isExpanded ? undefined : 3}
          ellipsizeMode="tail"
        >
          Lorem ipsum dolor sit amet consectetur. Magna urna egestas tortor
          sagittis lorem. Posuere volutpat viverra gravida auctor interdum
          ipsum. Tincidunt ut ut mauris nec sit. Eu euismod commodo cum eget
          facilisi.
        </Text>
        <Text style={styles.date}>20/09/24</Text>
      </View>
    </Pressable>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  notificationBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 5,
    gap: 4,
    alignItems: "flex-start",
  },
  rightSide: {
    gap: 7,
    paddingRight: 20,
  },
  title: {
    ...typography.headline400,
    color: Colors.light.lightGreenActive,
  },
  notificationDesc: {
    ...typography.caption400,
    color: Colors.light.lightGreenActive,
  },
  date: {
    ...typography.subhead400,
    color: Colors.light.darkGreen,
  },
});
