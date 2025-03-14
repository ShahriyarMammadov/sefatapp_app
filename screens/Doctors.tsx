import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "@/components/Header";
import { AntDesign } from "@expo/vector-icons";
import { typography } from "@/constants/Typography";
import MainDoctorCard from "@/components/MainDoctorCard";
import UserHeader from "@/components/UserHeader";
import Colors from "@/constants/Colors";
import { useGetDoctorsQuery } from "@/store/appSlice";

export default function Doctors() {
  const { data, error, isLoading } = useGetDoctorsQuery({});

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Həkimlərimiz</Text>
      </View>
      <View style={styles.userHeader}>
        <UserHeader />
      </View>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Axtarış..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.iconInsideInput}>
            <AntDesign name="search1" size={20} color="#0F312D" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }: any) => {
            return <MainDoctorCard data={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    flex: 1,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 0,
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
  columnWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 16,
  },
  userHeader: {
    // paddingTop: 20,
    // paddingBottom: 36,
  },
});
