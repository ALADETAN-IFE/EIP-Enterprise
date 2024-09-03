import { configureStore } from "@reduxjs/toolkit";
import CompanyManagementReducer from "../Redux-actions/CompanyManagement";
import {persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key : 'root',
  storage,
};


// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, CompanyManagementReducer )

export const store = configureStore({
  reducer: {
    CompanyManagement: persistedReducer,
  },
});

export const persistor = persistStore(store)