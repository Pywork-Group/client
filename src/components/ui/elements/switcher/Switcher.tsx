import type { ISwitcher } from '@/shared/interfaces/elements/switcher/switcher.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './Switcher.module.scss'

const Switcher: FC<ISwitcher> = ({ label, value, onClick, className }) => {
	return (
		<button
			className={formatClassName([styles.button, className])}
			onClick={onClick}
		>
			<span className={styles.label}>{label}</span>
			<span
				className={formatClassName([
					styles.switch,
					value ? styles.picked : undefined,
				])}
			/>
		</button>
	)
}

export default Switcher
