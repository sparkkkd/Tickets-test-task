import { GiAirplaneDeparture } from 'react-icons/gi'
import Button from '../../components/Button/Button'
import styles from './TicketCard.module.sass'
import { ITicket } from '../../models'

type TicketCardProps = ITicket

export default function TicketCard({
	origin,
	origin_name,
	destination,
	destination_name,
	departure_date,
	departure_time,
	arrival_date,
	arrival_time,
	carrier,
	stops,
	price,
}: ITicket) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Button>
					Купить за
					<br />
					{price} ₽
				</Button>
			</div>

			<div className={styles.right}>
				<div className={styles.plane}>
					<GiAirplaneDeparture />
					<span className={styles.stops}>{stops} пересадка</span>
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
