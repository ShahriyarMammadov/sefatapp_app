import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
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
      <ScrollView>
        <FlatList
          data={data}
          horizontal
          contentContainerStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            return <MainDoctorCard data={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#0F312D",
    paddingVertical: 12,
  },
  columnWrapper: {
    paddingVertical: 12,
    gap: 12,
  },
});
