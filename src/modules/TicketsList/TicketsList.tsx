import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import TicketCard from '../TicketCard/TicketCard'
import styles from './TicketsList.module.sass'
import { getTickets, ticketSlice } from '../../store/slices/ticketSlice'

export default function TicketsList() {
	const dispatch = useAppDispatch()
	const { data, filteredData, isLoading, error } = useAppSelector((state) => state.ticketSlice)

	useEffect(() => {
		dispatch(getTickets())
	}, [])

	return (
		<ul className={styles.list}>
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

{
	/* data &&
					data.map((ticket) => (
						<li key={ticket.id} className={styles.item}>
							<TicketCard {...ticket} />
						</li>
					))} */
}
