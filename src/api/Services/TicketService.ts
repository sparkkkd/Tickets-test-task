import { ITicketsList } from '../../models'
import $api from '../http'

export default class TicketService {
	static async getAll() {
		return $api.get<ITicketsList>('/tickets', { withCredentials: false })
	}
}
