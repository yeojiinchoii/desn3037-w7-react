import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    field: "Yeojin",
    items: [
        "Dog",
        "Cat",
        "Apple"
    ]
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    define: (state, action) => {
        state.field = action.payload
    },
    add: (state, action) => {
        state.items.push(action.payload)
    },
    remove: (state, action) => {
        state.items.splice(action.payload, 1)
    }
  },
})

export const { define, add, remove } = listSlice.actions
export default listSlice.reducer