import styles from './Button.module.sass'

interface IButtonProps {
	onClick?: () => void
	children: React.ReactNode
}

export default function Button({ onClick, children }: IButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
