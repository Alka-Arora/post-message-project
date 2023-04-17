import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postReducer from './redux/postSlice'
import storage from 'redux-persist/lib/storage';
import * as rp from 'redux-persist'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  post: postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
      }
    })
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch