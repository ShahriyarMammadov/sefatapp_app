import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ClinicCard from "../ClinicCard";
import { router } from "expo-router";
import { useGetClinicsQuery } from "@/store/appSlice";

export default function ClinicSection() {
  const { data, error, isLoading } = useGetClinicsQuery({});

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.replace("/clinics/clinics")}
        style={styles.header}
      >
        <Text style={styles.title}>Klinikalar</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <ClinicCard data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "column",
    gap: 24,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: "#0F312D",
    fontSize: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },
});
