// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from './app/propertyTypes/slice'
import AreasSlice from './app/areas/slice'
import FeaturesSlice from './app/features/slice'
import PropertyListingSlice from './app/propertyListing/slice'
import ConditionsSlice from './app/conditions/slice'

export const store = configureStore({
  reducer: {
    type:TypesSlice,
    areas:AreasSlice,
    features:FeaturesSlice,
    propertyListing:PropertyListingSlice,
    conditions:ConditionsSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
