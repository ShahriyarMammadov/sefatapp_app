import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import SearchInput from "@/components/search/SearchInput";
import SearchCategory from "@/components/search/SearchCategory";
import DoctorSection from "@/components/search/DoctorSection";
import AdSens from "@/components/search/AdSens";
import ClinicSection from "@/components/search/ClinicSection";
import AptekSection from "@/components/search/AptekSection";
import tw from "twrnc";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={tw`flex-1`} contentContainerStyle={tw`gap-8 `}>
        <SearchInput />
        <SearchCategory />
        <AdSens />
        <DoctorSection />
        <AdSens />
        <ClinicSection />
        <AdSens />
        <AptekSection />
      </ScrollView>

      {/* <ScrollView >
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/5/51/Actor_Lilliput_Photo.jpg'}}/> 
                <Text style={styles.greeting}>Salam</Text>
                <Text style={styles.userName}> Akif bəy</Text>
            </View>
            <TouchableOpacity style={styles.menuButton}> 
            <MaterialIcons name="menu" size={24} color="#0000001A"/>
            </TouchableOpacity>
        </View>
     <View style={styles.searchBar}>
        <Text></Text>
        <Text style={styles.searchText}>Axtarış...</Text>
     </View>
     <ScrollView horizontal style={styles.categories}>
        <View style={styles.categories}><Text>Kardioloq</Text></View>
        <View style={styles.categories}><Text>Oftolalogiya</Text></View>
        <View style={styles.categories}><Text>Urolog</Text></View>

        <Text style={styles.sectionTitle}>Həkimlərimiz</Text>
        <ScrollView horizontal style={styles.cardList}></ScrollView>
        <View style={styles.card}>
            <Image source={{uri:"https://images.healthshots.com/healthshots/en/uploads/2022/07/02195043/doctor-stress.jpg"}} style={styles.cardImage}/>
            <Text style={styles.cardName}>Həkim</Text>
            <Text style={styles.cardDetails}>İxtisas:psixoloq</Text>
            <Text style={styles.cardDetails}>Klinika:Bonadea</Text>
            <Text style={styles.cardRating}> 4.8 (29 rəy)</Text>
            <TouchableOpacity style={styles.button}><Text>Rezerv et</Text></TouchableOpacity>
        </View>
     </ScrollView>

     <Text style={styles.sectionTitle}>Klinikalar</Text>
     <ScrollView horizontal style={styles.cardList}>
        <View style={styles.card}>
            <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fits.gov.az%2Fbloq%2Fyeni-klinikada-canli-novbe-esasinda-peyvendleme-davam-edir&psig=AOvVaw2wteKQCWJb3CQ05YtpoK-v&ust=1725946385141000&source=images&cd=vfe&opi=89978449&ved=https://its.gov.az/uploads/news/1286/yeni-klinikada-canli-novbe-esasinda-peyvendleme-davam-edir-851182.jpg"}} style={styles.cardImage}/>
            <Text style={styles.cardName}>Yeni Klinika</Text>
            <Text style={styles.cardDetails}>Adres:Heydər Əliyev Prospekti 34</Text>
            <Text style={styles.cardRating}> 4.9 (15 rəy)</Text>
            <TouchableOpacity style={styles.button}><Text>Ətraflı</Text></TouchableOpacity>
        </View>
     </ScrollView>

     <View style={styles.adBanner}><Text>Reklam</Text></View>
     <Text style={styles.sectionTitle}>Apteklər</Text>
     <ScrollView horizontal style={styles.cardList}>
        <View style={styles.card}>
            <Image source={{ uri:"https://d3i7mz61kz7ozx.cloudfront.net/prod/uploads/image/file/medium_5a93c5540d_1494666281.jpg "}} style={styles.cardImage}/>
            <Text style={styles.cardName}>Zeytun Aptek</Text>
            <Text style={styles.cardDetails}>Adres:...</Text>
            <Text style={styles.cardRating}>4.9 (50 rəy)</Text>
            <TouchableOpacity style={styles.button}><Text>Əlaqə saxlamaq</Text></TouchableOpacity>
        </View>
     </ScrollView>

     <View style={styles.adBanner}><Text>Reklam</Text></View>

     </ScrollView>    */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 16,
    marginLeft: 10,
  },
  userName: {
    fontSize: 6,
    fontWeight: "bold",
    marginLeft: 5,
  },
  menuButton: {
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  searchText: {
    marginLeft: 10,
    color: "#226D64B8",
  },
  categories: {
    marginBottom: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  sectionTitle: {
    width: 180,
    height: 35.93,
    top: 509,
    left: 18,
  },
  cardList: {
    marginBottom: 10,
  },
  card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardImage: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cardDetails: {
    fontSize: 12,
    color: "#666",
  },
  cardRating: {
    fontSize: 12,
    color: "#333",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#226D64",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  adBanner: {
    height: 143,
    backgroundColor: "#bad2cf",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 14,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
