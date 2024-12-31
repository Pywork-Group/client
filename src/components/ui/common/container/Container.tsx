import type { IContainer } from '@/shared/interfaces/common/container/container.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import styles from './Container.module.scss'

const Container: FC<IContainer> = ({ children, size = 'md', className }) => {
	return (
		<div
			className={formatClassName([styles.container, styles[size], className])}
		>
			{children}
		</div>
	)
}

export default Container
