import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { clinics } from "@/constants/ClinicsData";
import PharmacyCard from "../PharmacyCard";
import { router } from "expo-router";
export default function AptekSection() {
  const renderAptek = ({ item }: any) => {
    const fullStars = Math.floor(item.rate);
    const halfStar = item.rate % 1 !== 0;
    return (
      <View
        style={tw`flex flex-col w-full border border-solid border-[#1B5750] rounded-xl p-2 gap-1.5 justify-between flex-1 mb-6`}
      >
        <View style={tw`flex flex-col  relative  justify-start items-start`}>
          <Image
            source={{ uri: item.image }}
            style={tw` w-full h-40 rounded-md z-0 relative`}
          />
          <View style={tw`absolute  z-10 p-3.5`}>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          <View style={tw`absolute  z-10 p-3.5 top-0 right-0`}>
            <Text>7/24</Text>
          </View>
          <View
            style={tw`absolute bottom-0  flex  items-center justify-center right-0 left-0  bg-[#226D64] z-10 p-3`}
          >
            <Text style={tw`text-white font-medium`}>{item.aptek}</Text>
          </View>
        </View>
        <View style={tw`flex flex-col gap-1.5`}>
          <Text style={tw`text-[#0F312D]`}> Ünvan : {item.adress}</Text>
          <View style={tw`flex flex-row justify-between items-center`}>
            <View style={tw`flex flex-row gap-0.5`}>
              {[...Array(fullStars)].map((_, index) => (
                <AntDesign key={index} name="star" size={16} color="#FFD557" />
              ))}
              {halfStar && (
                <FontAwesome name="star-half-o" size={16} color="#FFD557" />
              )}
            </View>

            <Text style={tw`text-[#0F312D]`}> {item.rate_limit} rəy</Text>
          </View>
        </View>

        <TouchableOpacity
          style={tw`bg-[#1F8871] py-2  flex flex-row  justify-between items-center w-full px-10 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-xs text-center text-white `}>Alış Veriş Et</Text>
          <Feather name="shopping-cart" size={12} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={tw`px-4 flex flex-col gap-6 w-full`}>
      <Pressable
        onPress={() => router.replace("/pharmacies/pharmacies")}
        style={tw`flex flex-row gap-2 items-center `}
      >
        <Text style={tw`text-[#0F312D] text-xl`}>Aptekler</Text>
        <AntDesign name="arrowright" size={16} color="#0F312D" />
      </Pressable>
      <FlatList
        data={clinics}
        numColumns={2}
        columnWrapperStyle={tw`justify-between flex gap-5 flex-row w-full `}
        renderItem={({ item }: any) => {
          return <PharmacyCard data={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
