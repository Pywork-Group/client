import { SOCIAL_ITEMS } from '@/base/social/social.data'
import type { ISocial } from '@/shared/interfaces/elements/social/social.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Social.module.scss'

const Social: FC<ISocial> = ({ isRussian, className }) => {
	return (
		<ul className={formatClassName([styles.list, className])}>
			{SOCIAL_ITEMS(isRussian).map((item, index) => (
				<li key={index} className={styles.item}>
					<Link className={styles.link} href={item.href}>
						<item.icon />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Social
