import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface dataBoard {
  title: string;
}

export const fetchBoardsData = createAsyncThunk(
  "boards/fetchBoardsData",
  async () => {
    const response = await axios.get(`http://localhost:5000/boards`);
    return await response.data;
  }
);

export const boardDataSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [] as dataBoard[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBoardsData.fulfilled, (state, action) => {
      //@ts-ignore
      state.boards = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBoardsData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default boardDataSlice.reducer;
