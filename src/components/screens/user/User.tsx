'use client'

import { useUser } from '@/hooks/api/user/useUser.hook'
import type { IId } from '@/shared/interfaces/common/param/param.interface'
import { useLanguage, useTranslate } from '@/store/language/language.store'
import { useUser as useUserStore } from '@/store/user/user.store'
import { getCurrency } from '@/utils/helpers/currency/currency.util'
import type { FC } from 'react'
import UserInfo from './info/UserInfo'
import UserWins from './wins/UserWins'

const User: FC<IId> = ({ id }) => {
	const translate = useTranslate('USER')

	const { user: storeUser, setUser } = useUserStore()
	const { language, isRussian } = useLanguage()

	const { user, isLoading, isCurrent } = useUser({ id })

	return (
		<>
			<UserInfo
				user={user}
				setUser={setUser}
				isLoading={isLoading}
				isCurrent={isCurrent}
				translate={translate}
				language={language}
			/>
			<UserWins
				userId={user?.id}
				isLoading={isLoading}
				isCurrent={isCurrent}
				currency={storeUser?.currency || getCurrency(language)}
				language={language}
				translate={translate}
				isRussian={isRussian}
			/>
		</>
	)
}

export default User
