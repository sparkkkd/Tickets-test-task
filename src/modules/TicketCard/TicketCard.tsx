import declOfNum from '../../utils/declOfNum'
import { ITicket } from '../../models'

import { GiAirplaneDeparture } from 'react-icons/gi'
import Button from '../../components/Button/Button'

import styles from './TicketCard.module.sass'
import { toast } from 'sonner'

export default function TicketCard({
	origin,
	origin_name,
	destination,
	destination_name,
	departure_date,
	departure_time,
	arrival_date,
	arrival_time,
	stops,
	price,
}: ITicket) {
	const handleBuyTicket = (ticketName: string) => {
		toast.message('Ура!', {
			description: `Вы купили билет ${ticketName}`,
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Button onClick={() => handleBuyTicket(`${origin_name} - ${destination_name}`)}>
					Купить за
					<br />
					{price} ₽
				</Button>
			</div>

			<div className={styles.right}>
				<div className={styles.plane}>
					<GiAirplaneDeparture />
					<span className={styles.stops}>
						{declOfNum(stops, ['пересадка', 'пересадки', 'пересадок'])}
					</span>
				</div>
				<div className={styles.time}>
					<span>{departure_time}</span>
					<span>{arrival_time}</span>
				</div>
				<div className={styles.city}>
					<span>
						{origin}, {origin_name}
					</span>
					<span>
						{destination}, {destination_name}
					</span>
				</div>
				<div className={styles.date}>
					<span>{departure_date}</span>
					<span>{arrival_date}</span>
				</div>
			</div>
		</div>
	)
}
