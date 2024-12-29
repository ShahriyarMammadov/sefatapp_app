import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import MainDoctorCard from "../MainDoctorCard";
import { useGetDoctorsQuery } from "@/store/appSlice";

export default function DoctorSection() {
  const { data, error, isLoading } = useGetDoctorsQuery({});

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.replace("/doctors/doctors")}
        style={styles.header}
      >
        <Text style={styles.headerText}>Həkimlərimiz</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => {
          return <MainDoctorCard data={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, 
    flexDirection: "column",
    gap: 24, 
  },
  header: {
    flexDirection: "row",
    gap: 8, 
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "#0F312D", 
  },
  columnWrapper: {
    justifyContent: "space-between", 
    gap: 24, 
    flexDirection: "row",
  },
});
