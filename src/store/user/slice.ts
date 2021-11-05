import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
  user: any
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
  user: null
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(
      `https://admin-merchant.api.qa.hellochat.me/oauth/token?grant_type=password&username=admin&password=pass`,
      null,
      {
        headers: {
          Authorization: "Basic Y2xpZW50SWQ6c2VjcmV0",
        },
      }
    );
    let user = {
      uid: 1,
      username: "admin",
      role: "admin",
      password: "123456",
      email: "admin@hellochat.com",
    };
    return {
      token: data.access_token,
      user
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload["token"];
      state.user = action.payload["user"];
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      console.log("rejected", action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});
