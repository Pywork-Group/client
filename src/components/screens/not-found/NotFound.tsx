'use client'

import Container from '@/components/ui/common/container/Container'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import { useTranslate } from '@/store/language/language.store'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	const translate = useTranslate('NOT_FOUND')

	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<Image
						priority
						src="/storage/backgrounds/error.png"
						width={1100}
						height={600}
						alt=""
					/>
					<h1 className={styles.heading}>{translate('heading')}</h1>
					<p className={styles.description}>{translate('description')}</p>
					<Link className={styles.button} href={PUBLIC_ROUTE.HOME}>
						{translate('button')} <ChevronRight />
					</Link>
				</div>
			</Container>
		</section>
	)
}

export default NotFound
