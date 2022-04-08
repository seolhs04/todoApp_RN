import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

const usePushToken = create(
  persist(
    (set, get) => ({
      pushToken: null,
      setPushToken: (newPushToken) => set({ pushToken: newPushToken }),
    }),
    {
      name: "pushToken",
      getStorage: () => AsyncStorage,
    }
  )
);
export default usePushToken;
