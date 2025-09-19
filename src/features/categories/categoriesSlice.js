import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "idle",
  error: "",
};

const getCategories = createAsyncThunk(
  "categories/getCategories",
  async function () {
    const res = await fetch(`https://dummyjson.com/products/category-list`);
    const data = await res.json();
    return data;
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to fetch all categories. Please refresh!";
      }),
});

export default categoriesSlice.reducer;
