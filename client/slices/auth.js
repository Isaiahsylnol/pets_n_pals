import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import UserService from  '../services/user.service';
import AuthService from "../services/auth.service";

let user;
if (typeof window !== 'undefined') {
  user = JSON.parse(localStorage.getItem("user"));
}
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

export const createPet = createAsyncThunk("pet/create",
  async ({ userId, name, age, breed, weight }, thunkAPI) => {
      try {
          const response = await UserService.createPet(userId, name, age, breed, weight);
          thunkAPI.dispatch(setMessage(response.data.message));
          //console.log("res: ", response.data)
          return response.data;
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          thunkAPI.dispatch(setMessage(message));
          return thunkAPI.rejectWithValue();
        }
  }
)

export const editPet = createAsyncThunk("pet/edit",
async ({ username, name, target, id }, thunkAPI) => {
  try {
    const response = await UserService.editPet(username, name, target, id);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
  } catch (error) {
    const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
  }
})

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [createPet.fulfilled]: (state, action) => {
      state.user.pets = action.payload.pets
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    [editPet.fulfilled]: (state, action) => {
      state.user.pets = action.payload.user.pets
      localStorage.setItem("user", JSON.stringify(state.user))
  }
  },
});
const { reducer } = authSlice;
export default reducer;