import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { typography } from "@/constants/Typography";
import Header from "@/components/Header";
import ClinicCard from "@/components/ClinicCard";
import Colors from "@/constants/Colors";
import { useGetClinicsQuery } from "@/store/appSlice";
import TabMenu from "@/components/TabMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import BurgerMenu from "@/components/Burger";

export default function Clinics() {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);

  const { data, error, isLoading } = useGetClinicsQuery({});
  return (
    <SafeAreaView style={styles.safeArea}>
      {isBurgerOpen ? <BurgerMenu /> : null}

      <Header />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Axtarış..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.iconInsideInput}>
            <AntDesign name="search1" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userText}>Klinikalar</Text>
        </View>

        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }: any) => {
            return <ClinicCard data={item} />;
          }}
        />
        <TabMenu />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "column",
    gap: 24,
    width: "100%",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    color: "#0F312D",
  },
  username: {
    fontSize: 16,
    color: "#0F312D",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  searchInput: {
    width: 386,
    height: 44,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  searchIconContainer: {
    marginLeft: 10,
  },
  iconBackground: {
    backgroundColor: "#E0E6E4",
    padding: 10,
    borderRadius: 0,
  },
  iconInsideInput: {
    position: "absolute",
    right: 0,
    height: "100%",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E6E4",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F312D",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  columnWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 50,
    marginBottom: 25,
  },

  userHeader: {
    paddingTop: 20,
    // paddingBottom: 36,
  },
  userText: {
    width: 133,
    height: 30,
    left: 140,
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#226D64",
  },
});
