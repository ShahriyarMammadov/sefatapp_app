import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import { burgerIcon } from "@/assets/svg/xml";
import { typography } from "@/constants/Typography";
import Colors from "@/constants/Colors";
import { useDispatch } from "react-redux";
import { toggleBurger } from "@/store/burgerSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse } from "@/constants/interface";

const UserHeader = () => {
  const [userData, setUserData] = useState<LoginResponse>();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo: any = await AsyncStorage.getItem("userInfo");
        setUserData(JSON.parse(userInfo));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.infoContainer}>
          <View style={styles.profileImg}>
            <Image
              source={{ uri: userData?.profileImageUrl }}
              style={styles.img}
            />
          </View>
        </View>
        <Pressable onPress={() => dispatch(toggleBurger())}>
          <SvgXml xml={burgerIcon} />
        </Pressable>
      </View>
    </>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  info: {
    gap: 6,
  },
  infoText: {
    ...typography.titleSmall400,
    color: Colors.light.green,
  },
  userText: {
    ...typography.headline400,
    color: Colors.light.greenActive,
  },
  profileImg: {
    width: 68,
    height: 68,
    overflow: "hidden",
    borderRadius: 100,
  },
  img: {
    width: 68,
    height: 68,
  },
});
