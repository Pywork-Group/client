import { type CurrentUser, useCurrentUserQuery } from '@/__generated__/output'
import { APOLLO_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import type { IAuthToken } from '@/shared/interfaces/api/auth/auth.interface'
import { UserContext } from '@/store/user/user.store'
import { useState } from 'react'

export default function UserProvider({
	children,
	isAuthenticated,
}: IAuthToken) {
	const [user, setUser] = useState<CurrentUser | null>(null)

	const { loading: isLoading } = useCurrentUserQuery({
		...APOLLO_OPTIONS,
		onCompleted: ({ currentUser }) => {
			setUser(currentUser)
		},
		onError: () => setUser(null),
		skip: !isAuthenticated,
	})

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
