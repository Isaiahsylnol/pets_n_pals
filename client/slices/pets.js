import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from  '../services/user.service';
import { setMessage } from "./message";

let user;
if (typeof window !== 'undefined') {
  user = JSON.parse(localStorage.getItem("user"));
}

export const createPet = createAsyncThunk(
    "pet/create",
    async ({ userId, name, age, breed, weight }, thunkAPI) => {

        try {
            const response = await UserService.createPet(userId, name, age, breed, weight);
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
)

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const petSlice = createSlice({
  name: "pet",
  initialState,
  extraReducers: {
    [createPet.fulfilled]: (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload))
    }
  },
});
const { reducer } = petSlice;
export default reducer;