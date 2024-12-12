import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import MainDoctorCard from "../MainDoctorCard";
import { useGetDoctorsQuery } from "@/store/appSlice";

export default function DoctorSection() {
  const { data, error, isLoading } = useGetDoctorsQuery({});

  return (
    <View style={tw`px-4 flex flex-col gap-6`}>
      <Pressable
        onPress={() => router.replace("/doctors/doctors")}
        style={tw`flex flex-row gap-2 items-center `}
      >
        <Text style={tw`text-[#0F312D] text-xl`}>Həkimlərimiz</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={tw`justify-between flex gap-6 flex-row `}
        renderItem={({ item }: any) => {
          return <MainDoctorCard data={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
