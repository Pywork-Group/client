'use client'

import Container from '@/components/ui/common/container/Container'
import Logo from '@/components/ui/elements/logo/Logo'
import Social from '@/components/ui/elements/social/Social'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import { useUser } from '@/store/user/user.store'
import type { FC } from 'react'
import styles from './Header.module.scss'
import HeaderLanguages from './languages/HeaderLanguages'
import HeaderNavigation from './navigation/HeaderNavigation'
import HeaderUser from './user/HeaderUser'
import HeaderWins from './wins/HeaderWins'

const Header: FC = () => {
	const translate = useTranslate('HEADER')
	const { language, isRussian, setLanguage } = useLanguage()

	const { user, isLoading } = useUser()

	return (
		<header className={styles.header}>
			<HeaderWins user={user} isLoading={isLoading} isRussian={isRussian} />
			<Container>
				<div className={styles.wrapper}>
					<Logo className={styles.logo} />
					<Logo className={styles.mobile} iconId="header" variant="icon" />
					<HeaderLanguages language={language} setLanguage={setLanguage} />
					<HeaderNavigation translate={translate} />
					<Social className={styles.social} isRussian={isRussian} />
					<HeaderUser user={user} isLoading={isLoading} translate={translate} />
				</div>
			</Container>
		</header>
	)
}

export default Header
