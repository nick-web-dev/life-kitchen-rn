import { createSlice } from "@reduxjs/toolkit";

interface State {
  userProfile: any;
}

const initialState: State = {
  userProfile: null,
};

export const userReducer = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = userReducer.actions;

export default userReducer.reducer;
