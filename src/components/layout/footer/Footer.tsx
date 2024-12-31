'use client'

import Container from '@/components/ui/common/container/Container'
import { COMPANY_NAME } from '@/constants/global/global.constants'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import type { FC } from 'react'
import styles from './Footer.module.scss'
import FooterAbout from './about/FooterAbout'
import FooterStats from './stats/FooterStats'

const Footer: FC = () => {
	const translate = useTranslate('FOOTER')

	const { isRussian } = useLanguage()

	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<FooterAbout translate={translate} isRussian={isRussian} />
					<div className={styles.fill}>
						<p className={styles.note}>
							{translate('description')}
						</p>
						<FooterStats translate={translate} />
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
