import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = authSlice.actions;

export default authSlice.reducer;
