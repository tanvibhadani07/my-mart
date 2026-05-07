import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
    amount: 0,
    c_gst_9: 0,
    s_gst_9: 0,
    Total: 0,

  },
  reducers: {
    addTocart: (state, action) => {
      console.log(action.payload)

      state.cartData.push(action.payload)

      state.amount = 0

      state.cartData.map((item) => {
        state.amount += Math.round(item.price)
      })

      state.c_gst_9 = state.amount * 9 / 100
      state.s_gst_9 = state.amount * 9 / 100

      state.Total = state.amount + state.c_gst_9 + state.s_gst_9
      state.Total = Math.round(state.Total)
      state.inr = state.Total * 92

      console.log(state.amount)
    },



  },
})

// Action creators are generated for each case reducer function
export const { addTocart } = cartSlice.actions

export default cartSlice.reducer