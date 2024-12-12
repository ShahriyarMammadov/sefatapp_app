import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import BasketCard from "@/components/BasketCard";

const data = [
  {
    id: 1,
    title: "Aksenfort",
    image: require("@/assets/images/cardio.png"),
  },
  {
    id: 2,
    title: "Aksenfort 2",
    image: require("@/assets/images/neuro.png"),
  },
];

const Basket = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Səbətim</Text>
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }: any) => {
              return <BasketCard data={item} />;
            }}
          />
        </ScrollView>
        <View style={styles.btnsText}>
          <Text style={{ ...typography.caption400, marginTop: 20 }}>
            Zəhmət olmasa çatdırılma ilə bağlı seçim edin.
          </Text>
          <View style={styles.btnsGroup}>
            <CustomButton
              title="Kuryer vasitəsilə"
              buttonStyles={styles.btn}
              textStyles={styles.btnText}
            />
            <CustomButton
              title="Özüm götürəcəm"
              buttonStyles={styles.btn2}
              textStyles={styles.btnText2}
            />
          </View>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Cəmi məhsul: 2 </Text>
        <Text style={styles.totalText}>Çatdırılma : 2 ₼ </Text>
        <Text style={styles.totalText}>Toplam : 12 ₼ - 2 ₼ </Text>
      </View>
      <View style={styles.promoContainer}>
        <CustomInput
          placeholderText="Promo kod daxil edin:"
          style={styles.promoInput}
          lableStyle={{ display: "none" }}
        />
        <CustomButton
          title="Səbəti təsdiqlə"
          textStyles={styles.btnText}
          buttonStyles={styles.confirmBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Basket;

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
    // flexGrow: 1,
    paddingVertical: 20,
    gap: 20,
  },
  header: {
    paddingVertical: 12,
    backgroundColor: Colors.light.green,
    alignItems: "center",
  },
  headerText: {
    ...typography.titleMedium400,
    color: Colors.light.lightGreenActive,
  },
  btnsText: {
    gap: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  btnsGroup: {
    flexDirection: "row",
    gap: 19,
  },
  btn: {
    backgroundColor: Colors.light.green,
    borderWidth: 1,
    borderColor: Colors.light.green,
    paddingVertical: 10,
    width: 160,
    borderRadius: 12,
  },
  btn2: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.light.green,
    paddingVertical: 10,
    width: 160,
    borderRadius: 12,
  },
  btnText2: {
    color: Colors.light.green,
    ...typography.subhead400,
  },
  btnText: {
    color: Colors.light.lightGreenHover,
    ...typography.subhead400,
  },
  total: {
    backgroundColor: Colors.light.green,
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 12,
  },
  totalText: {
    color: Colors.light.lightGreenActive,
  },
  promoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 10,
  },
  promoInput: {
    paddingVertical: 10,
    width: 203,
  },
  confirmBtn: {
    paddingHorizontal: 16,
    width: 144,
  },
});
