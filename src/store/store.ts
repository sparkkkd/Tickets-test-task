import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ticketSlice from './slices/ticketSlice'

const rootReducer = combineReducers({
	ticketSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
