import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  mobileNo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setMobileNo: (state, action) => {
      state.mobileNo = action.payload;
    },
    resetFormValues(state) {
      state.firstname = initialState.firstname;
      state.lastname = initialState.lastname;
      state.mobileNo = initialState.mobileNo;
    },
    editUserInfo(state, action) {
      const { firstName, lastName, mobileNo } = action.payload;
      state.firstname = firstName;
      state.lastname = lastName;
      state.mobileNo = mobileNo;
    },
    deleteUserInfo(state) {
      state.firstname = "";
      state.lastname = "";
      state.mobileNo = "";
    },
  },
});

export const {
  setFirstname,
  setLastname,
  setMobileNo,
  resetFormValues,
  editUserInfo,
  deleteUserInfo,
} = userSlice.actions;
export default userSlice.reducer;
