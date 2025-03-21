import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState, Iuser } from "../types/reduxType";
import { api } from "../types/reduxType";

// Load users from local storage
const loadUsersListFromLocalStorage = (): Iuser[] => {
  const userList = localStorage.getItem("userList");
  return userList ? JSON.parse(userList) : [];
};

const initialState: IinitialState = {
  loading: false,
  data: loadUsersListFromLocalStorage(),
  error: null,
};

// Async action to fetch users from API
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get<Iuser[]>(api);
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<Iuser, "id">>) => {
      const newUser: Iuser = {
        id: Date.now() + Math.random() * 1000,
        ...action.payload,
      };
      state.data.push(newUser);

      // Persist State to localStorage
      localStorage.setItem("userList", JSON.stringify(state.data));
    },
    editUser: (state, action: PayloadAction<Iuser>) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.id
      );

      if (index !== -1) {
        state.data[index] = { ...action.payload };

        // Persist updated state
        localStorage.setItem("userList", JSON.stringify(state.data));
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload);

      // Persist updated state
      localStorage.setItem("userList", JSON.stringify(state.data));
    },
  },
  extraReducers: (builder) => {
    builder
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

          // persist state
          localStorage.setItem("userList", JSON.stringify(state.data));
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
