import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [] ,
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)

      let newBasket = [...state.items]

      if(index >= 0) newBasket.splice(index, 1)
      else console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket!`)
      state.items = newBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket} = basketSlice.actions


export const selectBasketItems = (state) => state.basket.items


const getItems = (state) => state.basket.items

export const selectBasketItemsWithId = createSelector(getItems,(state, id) => id,(items, id) => 
    items.filter((item) => item.id === id)
  )

// export const selectBasketItemsWithId = ((state, id) => 
//     state.basket.items.filter((item) => item.id === id))

export const selectBasketTotal = createSelector(getItems,(items) => items.reduce((sum, item) => sum = sum + item.price,0))

// export const selectBasketTotal = (state) => state.basket.items.reduce((sum, currItem) => sum = sum + currItem.price, 0)

export default basketSlice.reducer