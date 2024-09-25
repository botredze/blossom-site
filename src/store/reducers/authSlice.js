import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getProfile } from "./requestSlice";

const initialState = {
  loadingAuth: false,
};

// export const authLogin = createAsyncThunk(
//   "authLogin",
//   async function (info, { dispatch, rejectWithValue }) {
//     try {
//       const response = await axios({
//         method: "POST",
//         url: "http://mttp-renaissance.333.kg/api/auth/login",
//         data: {
//           ...info?.dataLogin,
//         },
//       });
//       if (response.status >= 200 && response.status < 300) {
//         const decodedToken = jwtDecode(response?.data?.token?.accessToken);
//         dispatch(changeTypeUser(+decodedToken?.type_user));
//         dispatch(changeTokenA(response?.data?.token?.accessToken));
//         return {
//           navigate: info?.navigate,
//           type_user: +decodedToken?.type_user,
//         };
//       } else {
//         throw Error(`Error: ${response.status}`);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: "authSlice",
  initialState: { codeid: null, token: null, profileData: null },
  reducers: {
    loginSuccess: (state, action) => {
      state.codeid = action.payload.codeid;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.codeid = null;
      state.token = null;
      state.profileData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profileData = action.payload;
    });
  },
});
export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
