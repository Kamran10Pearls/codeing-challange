import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { shopReducer } from './slices'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    shop: shopReducer
  })
)
export const createStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof createStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof createStore.dispatch