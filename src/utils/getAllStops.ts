import { ITicketsList } from '../models'

// export const getAllStops = (tickets: ITicketsList) => {
// 	const stops: number[] = []

// 	tickets.forEach((ticket) => {
// 		stops.push(ticket.stops)
// 	})

// 	return [...new Set(stops)].sort((a, b) => a - b)
// }

interface IStop {
	text: string
	option: number
}

export const getAllStops = (tickets: ITicketsList) => {
	const stops: IStop[] = []

	const uniqueStops = new Set(tickets.map((ticket) => ticket.stops))

	uniqueStops.forEach((ticket) => {
		stops.push({
			text: ticket + ' пересадка',
			option: ticket,
		})
	})

	stops.sort((a, b) => a.option - b.option)

	stops.unshift({
		text: 'Все',
		option: -1,
	})

	return stops
}
