import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "./slices/UserSlice";
import userProfileSlice from "./slices/UserProfile";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const persistConfig = {
  key: "reducer",
  storage: AsyncStorage,
  whitelist: ["user", "userProfile"],
};

const reducers = combineReducers({
  user: userSlice,
  userProfile: userProfileSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
