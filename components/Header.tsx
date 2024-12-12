import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { backIcon, burgerIcon, logo } from "@/assets/svg/xml";
import { useNavigation, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { toggleBurger } from "@/store/burgerSlice";

const { width } = Dimensions.get("window");
const BurgerMenu = () => {
  const dispatch = useDispatch();
};

const Header = ({ burger }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter();
  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace("/(auth)/first-page");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <SvgXml xml={backIcon} />
      </TouchableOpacity>
      <View style={styles.logo}>
        <SvgXml xml={logo} />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {          
          dispatch(toggleBurger())
        }}>
          <SvgXml xml={burgerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    paddingVertical: 24,
    paddingHorizontal: 22,
  },
  logo: {
    position: "absolute",
    left: width / 2,
    transform: [{ translateX: -171 / 2 }],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
