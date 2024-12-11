import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ITicketsList } from '../../models'
import TicketService from '../../api/Services/TicketService'

interface ITicketSliceState {
	data: ITicketsList
	isLoading: boolean
	error: string
	filteredData: ITicketsList
}

const initialState: ITicketSliceState = {
	data: [],
	isLoading: false,
	error: '',
	filteredData: [],
}

export const getTickets = createAsyncThunk('ticket/getTickets', async (_, { rejectWithValue }) => {
	try {
		const response = await TicketService.getAll()
		return response.data
	} catch (error) {
		return rejectWithValue(error)
	}
})

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		filterData: (state, action) => {
			if (action.payload === -1) {
				state.filteredData = []
			} else {
				state.filteredData = state.data.filter((ticket) => ticket.stops === Number(action.payload))
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(getTickets.pending, (state) => {
			state.isLoading = true
			state.error = ''
		})
		builder.addCase(getTickets.fulfilled, (state, action) => {
			state.isLoading = false
			state.error = ''
			state.data = action.payload
		})
		builder.addCase(getTickets.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload as string
		})
	},
})

export default ticketSlice.reducer

export const { filterData } = ticketSlice.actions
