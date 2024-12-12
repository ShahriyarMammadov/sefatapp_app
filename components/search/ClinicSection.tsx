import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import ClinicCard from "../ClinicCard";
import { router } from "expo-router";
import { useGetClinicsQuery } from "@/store/appSlice";

export default function ClinicSection() {
  const { data, error, isLoading } = useGetClinicsQuery({});

  return (
    <View style={tw`px-4 flex flex-col gap-6 w-full`}>
      <Pressable
        onPress={() => router.replace("/clinics/clinics")}
        style={tw`flex flex-row gap-2 items-center `}
      >
        <Text style={tw`text-[#0F312D] text-xl`}>Klinikalar</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={tw`justify-between flex gap-5 flex-row w-full `}
        renderItem={({ item }: any) => {
          return <ClinicCard data={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
