import { useDisableScroll } from '@/hooks/helpers/disable-scroll/useDisableScroll.hook'
import type { IAlert } from '@/shared/interfaces/elements/alert/alert.interface'
import { X } from 'lucide-react'
import type { FC } from 'react'
import AlertIcon from '../../icons/AlertIcon'
import styles from './Alert.module.scss'

const Alert: FC<IAlert> = ({ question, accept, cancel, action, close }) => {
	useDisableScroll()

	return (
		<div className={styles.alert}>
			<div className={styles.box}>
				<button className={styles.close} onClick={close}>
					<X />
				</button>
				<AlertIcon />
				<p className={styles.question}>{question}</p>
				<div className={styles.buttons}>
					<button
						className={styles.accept}
						onClick={() => {
							action()
							close()
						}}
					>
						{accept}
					</button>
					<button className={styles.cancel} onClick={close}>
						{cancel}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Alert
