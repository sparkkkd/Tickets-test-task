import Filter from './modules/Filter/Filter'
import TicketsList from './modules/TicketsList/TicketsList'

import styles from './App.module.sass'

function App() {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Список билетов</h1>
			<div className={styles.wrapper}>
				<Filter />
				<TicketsList />
			</div>
		</section>
	)
}

export default App
