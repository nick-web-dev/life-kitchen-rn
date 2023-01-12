import { createSlice } from "@reduxjs/toolkit";

interface State {
  signIn: boolean;
}

const initialState: State = {
  signIn: true,
};

export const userSignInReducer = createSlice({
  name: "userSignIn",
  initialState,
  reducers: {
    setUserSignIn: (state, action) => {
      state.signIn = action.payload;
    },
  },
});

export const { setUserSignIn } = userSignInReducer.actions;

export default userSignInReducer.reducer;
