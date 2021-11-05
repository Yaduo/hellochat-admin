import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configs from "src/config";

interface KPIState {
  loading: boolean;
  error: { message: string; statusCode: string | number } | null;
  members: any;
  wallets: any;
  transactions: any;
  dau: any;
}

const initialState: KPIState = {
  loading: false,
  error: null,
  members: null,
  wallets: null,
  transactions: null,
  dau: null,
};

// TODO: kpi login should be remove after merge to hellochat-api
const kpiLogin = () =>
  axios.post(`${configs.HELLOCHAT_BASE_API_URL}/admin/auth/login`, {
    password: configs.KPI_PASSWORD,
    username: configs.KPI_USERNAME,
  });

const getMemberStatistics = (access_token) =>
  axios.get(`${configs.HELLOCHAT_BASE_API_URL}/kpi/members/statistics`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

const getWalletUsage = (access_token) =>
  axios.get(`${configs.HELLOCHAT_BASE_API_URL}/kpi/wallets/usage`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

const getTransactions = (access_token) =>
  axios.get(`${configs.HELLOCHAT_BASE_API_URL}/kpi/transactions`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

const getDau = (access_token) =>
  axios.get(`${configs.HELLOCHAT_BASE_API_URL}/kpi/dau`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

export const getKpi = createAsyncThunk("kpi/getKpi", async () => {
  const { data: kpiLoginData } = await kpiLogin();
  if (kpiLoginData["loginSuccess"] === false) {
    throw "kpi user login faile.";
  }
  const { data: members } = await getMemberStatistics(kpiLoginData.accessToken);
  const { data: wallets } = await getWalletUsage(kpiLoginData.accessToken);
  const { data: transactions } = await getTransactions(
    kpiLoginData.accessToken
  );
  const { data: dau } = await getDau(kpiLoginData.accessToken);
  return {
    members,
    wallets,
    transactions,
    dau,
  };
});

export const kpiSlice = createSlice({
  name: "kpi",
  initialState,
  reducers: {},
  extraReducers: {
    [getKpi.pending.type]: (state) => {
      state.loading = true;
    },
    [getKpi.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.members = action.payload["members"];
      state.wallets = action.payload["wallets"];
      state.transactions = action.payload["transactions"];
      state.dau = action.payload["dau"];
    },
    [getKpi.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
