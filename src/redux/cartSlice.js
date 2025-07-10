import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] //initial state of the cart,
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state directly is allowed in Redux Toolkit
            //because it uses Immer library under the hood
            //Immer allows us to write "mutating" code, but it produces an immutable state
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // state.items = [] ....commenting as this is not the correct way to do it
            state.items.length = 0 // this is the correct way to clear the cart
            // return {items: []} // alternatively, you can return a new state object
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer