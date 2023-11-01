import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
  name: "dogs",
  initialState: {
    dogs: [],
    dog: {},
    loading: false,
    currentPage: 1,
    itemsPerPage: 8,
    totalPages: 0,
    modal: false,
    loadingDog: false,
    lastDog: {},
    successModal: false,
  },
  reducers: {
    startLoading: (state /* action */) => {
      state.loading = true;
    },
    setDogs: (state, action) => {
      state.dogs = action.payload;
      state.totalPages = Math.ceil(action.payload.length / 8);
      state.loading = false;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    findbyDogBreed: (state, action) => {
      state.dogs = action.payload;
      state.loading = false;
    },
    dogById: (state, action) => {
      state.dog = action.payload;
      state.loading = false;
    },
    openModal: (state, action) => {
      state.modal = action.payload;
    },
    createDog: (state, action) => {
      state.modal = false;
      state.loadingDog = true;
      state.successModal = true;
      state.lastDog = action.payload;
    },
    closeSuccess: (state, action) => {
      state.successModal = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoading,
  setDogs,
  setCurrentPage,
  descendingOrder,
  ascendingOrder,
  findbyDogBreed,
  dogById,
  openModal,
  createDog,
  closeSuccess
} = dogSlice.actions;
