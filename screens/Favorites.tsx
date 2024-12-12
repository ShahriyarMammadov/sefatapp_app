import { StyleSheet, SafeAreaView, View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import UserHeader from "@/components/UserHeader";
import Header from "@/components/Header";
import MedicineCard from "@/components/MedicineCard";
import BurgerMenu from "@/components/BurgerMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetFavoritesQuery } from "@/store/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse } from "@/constants/interface";

const Favorites = () => {
  const isBurgerOpen = useSelector((state: RootState) => state.burger.value);
  const [userData, setUserData] = useState<LoginResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo: any = await AsyncStorage.getItem("userInfo");
        setUserData(JSON.parse(userInfo));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { data, error, isLoading } = useGetFavoritesQuery(userData?.id);

  if (error) return <Text>Error loading data</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {isBurgerOpen ? <BurgerMenu /> : null}
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerText}>Favoritlərim</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.userHeader}>
          <UserHeader />
        </View>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Text>Yüklənir...</Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {data?.map((favorite: any) => (
              <View key={favorite._id}>
                {/* {favorite.clinicID && (
                <DoctorCard data={favorite}
                />
              )} */}
                {favorite.medicineID && <MedicineCard data={favorite} />}
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
    position: "relative",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  userHeader: {
    paddingTop: 20,
    paddingBottom: 36,
  },
});
