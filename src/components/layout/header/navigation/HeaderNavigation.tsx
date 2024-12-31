'use client'

import { HEADER_NAVIGATION_ITEMS } from '@/base/header/header.data'
import type { ITranslate } from '@/shared/interfaces/common/translate/translate.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation: FC<ITranslate> = ({ translate }) => {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				{HEADER_NAVIGATION_ITEMS({ translate }).map((item, index) => (
					<li key={index} className={styles.item}>
						<Link className={styles.link} href={item.href}>
							{item.icon && <item.icon />}
							<span>{item.label}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HeaderNavigation
