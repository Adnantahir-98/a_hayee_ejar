// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from './app/propertyTypes/page.js'
import AreasSlice from './app/areas/page.js'
import FeaturesSlice from './app/features/page.js'

export const store = configureStore({
  reducer: {
    TypesSlice,
    AreasSlice,
    FeaturesSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
