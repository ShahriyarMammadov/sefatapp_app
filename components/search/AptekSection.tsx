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
import { router } from "expo-router";
import { useGetClinicsQuery } from "@/store/appSlice";
import PharmacyCard from "../PharmacyCard";

export default function ClinicSection() {
  const { data, error, isLoading } = useGetClinicsQuery({});

  return (
    <View>
      <Pressable
        onPress={() => router.replace("/pharmacies/pharmacies")}
        style={styles.header}
      >
        <Text style={styles.title}>Apteklər</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <ScrollView>
        <FlatList
          data={data}
          horizontal
          contentContainerStyle={styles.columnWrapper}
          renderItem={({ item }) => <PharmacyCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingInline: 16,
    paddingBlock: 8,
  },
  headerText: {
    fontSize: 18,
    color: "#0F312D",
  },
  title: {
    color: "#0F312D",
    fontSize: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 16,
    padding: 16,
  },
});
