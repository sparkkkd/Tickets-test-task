import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getTickets } from '../../store/slices/ticketSlice'

import TicketCard from '../TicketCard/TicketCard'
import Loader from '../../components/Loader/Loader'

import styles from './TicketsList.module.sass'

export default function TicketsList() {
	const dispatch = useAppDispatch()
	const { data, filteredData, isLoading, error } = useAppSelector((state) => state.ticketSlice)

	useEffect(() => {
		dispatch(getTickets())
	}, [])

	return (
		<ul className={styles.list}>
			{isLoading && <Loader />}

			{error && <span className={styles.error}>Не удалось загрузить билеты :(</span>}

			{filteredData.length
				? filteredData.map((ticket) => (
						<li key={ticket.id} className={styles.item}>
							<TicketCard {...ticket} />
						</li>
					))
				: data.map((ticket) => (
						<li key={ticket.id} className={styles.item}>
							<TicketCard {...ticket} />
						</li>
					))}
		</ul>
	)
}
