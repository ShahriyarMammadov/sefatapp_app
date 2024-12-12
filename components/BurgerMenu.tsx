import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Screen";
import {
  AboutIcon,
  AptekIcon,
  BlogIcon,
  ContactIcon,
  DoctorIcon,
  KlinikaIcon,
  LiveSupportIcon,
  OrderIcon,
  OutputIcon,
} from "@/assets/svg/aysun";
import { SvgXml } from "react-native-svg";
import { useDispatch } from "react-redux";
import { closeBurger } from "@/store/burgerSlice";
import { router } from "expo-router";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const menuItems = [
    {
      label: "Həkimlərimiz",
      url: "/",
      icon: <SvgXml xml={DoctorIcon} />,
    },
    {
      label: "Klinikalar",
      url: "/",
      icon: <SvgXml xml={KlinikaIcon} />,
    },
    { label: "Apteklər", url: "/", icon: <SvgXml xml={AptekIcon} /> },
    {
      label: "Sifarişlər",
      url: "/",
      icon: <SvgXml xml={OrderIcon} />,
    },
    {
      label: "Blog",
      url: "(dashboard)/blogs/blog",
      icon: <SvgXml xml={BlogIcon} />,
    },
    {
      label: "Haqqımızda",
      url: "(dashboard)/about",
      icon: <SvgXml xml={AboutIcon} />,
    },
    {
      label: "Əlaqə",
      url: "(dashboard)/contact",
      icon: <SvgXml xml={ContactIcon} />,
    },
    {
      label: "Canlı Dəstək",
      url: "/",
      icon: <SvgXml xml={LiveSupportIcon} />,
    },
    {
      label: "Çıxış Et",
      url: "/",
      icon: <SvgXml xml={OutputIcon} />,
    },
  ];
  return (
    <>
      <Pressable
        style={styles.overlay}
        onPress={() => dispatch(closeBurger())}
      />
      <View style={styles.dropdownMenu}>
        {menuItems.map((item: any, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push(item.url);
              dispatch(closeBurger());
            }}
            style={styles.menuItemContainer}
          >
            {item.icon}
            <Text style={styles.menuItem}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default BurgerMenu;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
  dropdownMenu: {
    position: "absolute",
    top: 80,
    right: 0,
    backgroundColor: "#fff",
    width: SCREEN_WIDTH * 0.7,
    borderRadius: 10,
    padding: 10,
    zIndex: 9999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CBCBCB",
  },
  menuItem: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#226D64",
  },
});
