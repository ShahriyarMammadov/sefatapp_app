import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { typography } from "@/constants/Typography";
import NotificationCard from "@/components/NotificationCard";

const Notifications = () => {
  const handleMarkasRead = () => {
    return console.log("All mark as read");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bildirişlərim</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Son 30 gün</Text>
          <Pressable onPress={handleMarkasRead}>
            <Text style={styles.topText}>
              Bütün mesajları oxunmuş kimi qeyd et
            </Text>
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard initialIsRead />
          <NotificationCard initialIsRead />
          <NotificationCard initialIsRead />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

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
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 8,
  },
  topText: {
    color: Colors.light.green,
    ...typography.caption400,
  },
});
