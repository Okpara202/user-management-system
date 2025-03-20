import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState, Iuser } from "../types/reduxType";
import { api } from "../types/reduxType";

// Setup up App initial state
const initialState: IinitialState = {
  loading: false,
  data: [],
  error: null,
};

// Fetch general user / all data using createAsyncThunk
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get<Iuser[]>(api);
  return res.data;
});

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<Iuser[]>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default userSlice.reducer;
