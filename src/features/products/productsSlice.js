import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsByCategory: {},
  product: null,
  searchResults: [],
  status: "idle",
  error: "",
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async function () {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    return data.products;
  },
);

//! getAllProductsByCategory
export const getAllProductsByCategory = createAsyncThunk(
  "products/getAllByCategory",
  async function () {
    const resCategories = await fetch(
      "https://dummyjson.com/products/category-list",
    );
    const categories = await resCategories.json();

    const promises = categories.map(async (category) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const data = await res.json();
      return [category, data.products];
    });

    const results = await Promise.all(promises);

    return Object.fromEntries(results);
  },
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async function (id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  },
);

export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async function (category) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    const data = await res.json();
    return data.products;
  },
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async function (query) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data.products;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) =>
    builder
      // getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to fetch all products. Please refresh!";
      })
      // getAllProductsByCategory
      .addCase(getAllProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProductsByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.productsByCategory = action.payload;
      })
      .addCase(getAllProductsByCategory.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to fetch all products. Please refresh!";
      })
      // getProductById
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to fetch product by ID. Try again!";
      })
      // getProductsByCategory
      .addCase(getProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to fetch products by category. Please try again!";
      })
      // searchProducts
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.searchResults = action.payload;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to search products. Please try again!";
      }),
});

export default productsSlice.reducer;
