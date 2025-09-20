import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
  productsByCategory: {},
  status: "idle",
  productStatus: "idle",
  pByCategoryStatus: "idle",
  searchResults: [],
  searchSuggestions: [],
  searchStatus: "idle",
  error: "",
};

// getAllProducts
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

// getProductById
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async function (id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  },
);

// getProductsByCategory
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

// searchProducts
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async function (query) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data.products;
  },
);

// suggestProducts
export const suggestProducts = createAsyncThunk(
  "products/suggestionsProducts",
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
        state.pByCategoryStatus = "loading";
      })
      .addCase(getAllProductsByCategory.fulfilled, (state, action) => {
        state.pByCategoryStatus = "idle";
        state.productsByCategory = action.payload;
      })
      .addCase(getAllProductsByCategory.rejected, (state) => {
        state.pByCategoryStatus = "error";
        state.error = "Failed to fetch all products. Please refresh!";
      })

      // getProductById
      .addCase(getProductById.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productStatus = "idle";
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.productStatus = "error";
        state.error = "Failed to fetch product by ID. Try again!";
      })

      // getProductsByCategory
      .addCase(getProductsByCategory.pending, (state) => {
        state.pByCategoryStatus = "loading";
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.pByCategoryStatus = "idle";
        state.productsByCategory = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.pByCategoryStatus = "error";
        state.error = "Failed to fetch products by category. Please try again!";
      })

      // searchProducts
      .addCase(searchProducts.pending, (state) => {
        state.searchStatus = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchStatus = "idle";
        state.searchResults = action.payload;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.searchStatus = "error";
        state.error = "Failed to search products. Please try again!";
      })

      // suggestProducts
      .addCase(suggestProducts.pending, (state) => {
        state.searchStatus = "loading";
      })
      .addCase(suggestProducts.fulfilled, (state, action) => {
        state.searchStatus = "idle";
        state.searchSuggestions = action.payload;
      })
      .addCase(suggestProducts.rejected, (state) => {
        state.searchStatus = "error";
        state.error = "Failed to search products. Please try again!";
      }),
});

export default productsSlice.reducer;
