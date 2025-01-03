import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "@/constants/Screen";
import {
  AboutIcon,
  AptekIcon,
  DoctorIcon,
  Fav,
  Language,
  Order,
  OutputIcon,
  Recipe,
  Result,
  Rey,
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
      url: "/(auth)/patient",
      icon: <SvgXml xml={DoctorIcon} />,
    },

    {
      label: "Rezervasiyalarım",
      url: "/(auth)/reserve-3",
      icon: <SvgXml xml={AptekIcon} />,
    },
    {
      label: "Reseptlərim",
      url: "/(auth)/delet3-rezerv",
      icon: <SvgXml xml={Recipe} />,
    },
    {
      label: "Analiz nəticələrim",
      url: "/(auth)/delet4-rezerv",
      icon: <SvgXml xml={Result} />,
    },
    {
      label: "Rəylər",
      url: "/(auth)/buy-analysis",
      icon: <SvgXml xml={Rey} />,
    },
    {
      label: "Favoritlərim",
      url: "/(auth)/delet4-rezerv",
      icon: <SvgXml xml={Fav} />,
    },
    {
      label: "Sifarişlərim",
      url: "/(auth)/buy-analysis",
      icon: <SvgXml xml={Order} />,
    },
    {
      label: "Parametrlər",
      url: "/(auth)/buy-recipe",
      icon: <SvgXml xml={AboutIcon} />,
    },
    {
      label: "Dil seçimi",
      url: "/(auth)/buy-rezerv",
      icon: <SvgXml xml={Language} />,
    },
    {
      label: "Çıxış et",
      url: "/(auth)/delete-page",
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
    color: "#324054",
  },
  menuItem: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#324054",
  },
});
