import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { filterData } from '../../store/slices/ticketSlice'
import { getAllStops } from '../../utils/getAllStops'

import styles from './Filter.module.sass'

export default function Filter() {
	const { data } = useAppSelector((state) => state.ticketSlice)
	const dispatch = useAppDispatch()

	const [activeCheckbox, setActiveCheckbox] = useState<number>(0)

	const handleChecked = (stops: number, index: number) => {
		dispatch(filterData(stops))
		setActiveCheckbox(index)
	}

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Кол-во пересадок</span>
			<ul className={styles.list}>
				{getAllStops(data).map((stop, index) => (
					<li className={styles.item} key={index}>
						<label className={styles.label}>
							<input
								checked={activeCheckbox === index}
								onChange={() => handleChecked(stop.option, index)}
								className={styles.input}
								type='checkbox'
							/>
							<span className={styles.text}>{stop.text}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}
