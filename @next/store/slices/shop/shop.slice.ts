/**
 * @file Contains the Shop slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ShopSliceState,
  BurherDetailTypes,
  RemoveFoodItemType
} from './shop.types'

export const shopInitialState: ShopSliceState = {
  burgerDetails: []
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: shopInitialState,
  reducers: {
    addFoodItem(
      state: ShopSliceState,
      { payload }: PayloadAction<BurherDetailTypes>
    ) {
      const burgers = [...state.burgerDetails]
      burgers.push({ ...payload })
      state.burgerDetails = burgers
    },
    removeCartItem(
      state: ShopSliceState,
      { payload }: PayloadAction<RemoveFoodItemType>
    ) {
      const burgers = [...state.burgerDetails]
      burgers.splice(payload.itemIndex, 1)
      state.burgerDetails = burgers
    },
    clearCart(state: ShopSliceState) {
      state.burgerDetails = []
    }
  }
})

export const shopActions = shopSlice.actions
export const shopReducer = shopSlice.reducer
