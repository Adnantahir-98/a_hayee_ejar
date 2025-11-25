// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from '@/app/store/app/propertyTypes/slice'
import AreasSlice from '@/app/store/app/areas/slice'
import FeaturesSlice from '@/app/store/app/features/slice'
import PropertyListingSlice from '@/app/store/app/propertyListing/slice'
import ConditionsSlice from '@/app/store/app/conditions/slice'

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
