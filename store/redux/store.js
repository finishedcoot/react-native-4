import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favorritesMeal: favoritesReducer,
  },
});
