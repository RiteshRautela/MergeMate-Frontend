import {createSlice} from "@reduxjs/toolkit"
const feedSlice = createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeed:(state,action) => {
            return action.payload;
        },
        removFeed:(state,action) => {
            null;
        }
    }
})
export const {addFeed , removFeed} = feedSlice.actions;
export default feedSlice.reducer