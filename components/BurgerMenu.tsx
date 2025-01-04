import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Screen";
import {
  AboutIcon,
  AptekIcon,
  BlogIcon,
  ContactIcon,
  DoctorIcon,
  KlinikaIcon,
  OrderIcon,
  OutputIcon,
} from "@/assets/svg/aysun";
import { SvgXml } from "react-native-svg";
import { useDispatch } from "react-redux";
import { closeBurger } from "@/store/burgerSlice";
import { router } from "expo-router";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const mainMenuItems = [
    {
      label: "Ana Səhifə",
      url: "/(auth)/patient",
      icon: <SvgXml xml={DoctorIcon} />,
    },

    {
      label: "Rezervlər",
      url: "/(auth)/reserve-3",
      icon: <SvgXml xml={AptekIcon} />,
    },
    {
      label: "Təqvim",
      url: "/",
      icon: <SvgXml xml={KlinikaIcon} />,
    },
    {
      label: "Bildirişlər",
      url: "/",
      icon: <SvgXml xml={OrderIcon} />,
    },
    {
      label: "Rəylər",
      url: "/(auth)/comment-page",
      icon: <SvgXml xml={BlogIcon} />,
    },
    {
      label: "Parametrlər",
      url: "/(auth)/delet-comment",
      icon: <SvgXml xml={AboutIcon} />,
    },
    {
      label: "Dil seçimi",
      isLanguageSelector: true,
      icon: <SvgXml xml={ContactIcon} />,
    },
    {
      label: "Çıxış Et",
      url: "/",
      icon: <SvgXml xml={OutputIcon} />,
    },
  ];

  useEffect(() => {
    return () => {
      dispatch(closeBurger());
    };
  }, [router]);
  const langMenuItems = [
    { label: "Azərbaycan", url: "", icon: <View />, language: "az" },
    { label: "Русский", url: "", icon: <View />, language: "ru" },
    { label: "English", url: "", icon: <View />, language: "en" },
  ];

  // State to manage which menu to display
  const [menuItems, setMenuItems] = useState(mainMenuItems);
  const [selectedLanguage, setSelectedLanguage] = useState("az"); // Default dil: Azərbaycan

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
              if (item.isLanguageSelector) {
                setMenuItems(langMenuItems);
              } else if (item.language) {
                setSelectedLanguage(item.language);
                setMenuItems(mainMenuItems);
              } else if (item.url) {
                router.push(item.url);
                dispatch(closeBurger());
              }
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
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
  dropdownMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    zIndex: 9999,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  menuItemText: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#226D64",
  },
  menuItem: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#226D64",
  },
});
