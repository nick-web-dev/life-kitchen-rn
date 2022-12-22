import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/Constants";

console.log("UserProfile: ", UserProfile);

interface State {
  userProfile: any;
}

const initialState: State = {
  userProfile: UserProfile,
};
console.log("initialState: ", initialState);
export const profileReducer = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = profileReducer.actions;

export default profileReducer.reducer;
