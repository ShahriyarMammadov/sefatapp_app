import FirstPage from "@/screens/FirstPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";

const firstPage = () => {
  const token: any = AsyncStorage.getItem("authToken");
  return token._k == null ? (
    <FirstPage />
  ) : (
    <Redirect href={"/(tabs)/registration"} />
  );
};

export default firstPage;
