import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogIn:localStorage.getItem('isLogIn') || false,
  roll:localStorage.getItem('roll') || " ",
  data:localStorage.getItem('data')|| {}
};

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{},
})

export const{ } = authSlice.actions;
export default authSlice.reducer;