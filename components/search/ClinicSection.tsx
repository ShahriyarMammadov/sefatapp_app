import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
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
      <ScrollView>
        <FlatList
          data={data}
          horizontal
          contentContainerStyle={styles.columnWrapper}
          renderItem={({ item }) => <ClinicCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
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
  title: {
    fontSize: 20,
    color: "#0F312D",
    paddingVertical: 12,
  },
  columnWrapper: {
    paddingVertical: 12,
    gap: 12,
  },
});
