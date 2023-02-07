import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const backetSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = backetSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export default backetSlice.reducer