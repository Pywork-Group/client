import { useLogoutMutation } from '@/__generated__/output'
import { APOLLO_FULL_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ILogoutHook } from '@/shared/interfaces/hooks/auth/auth.interface'
import { useRouter } from 'next/navigation'

export const useLogout = ({ setUser, language }: ILogoutHook) => {
	const { replace, refresh } = useRouter()

	const [logoutMutation, { loading: isLoading }] = useLogoutMutation({
		...APOLLO_FULL_OPTIONS(language),
		onCompleted: () => {
			setUser(null)
			refresh()
			replace(PUBLIC_ROUTE.HOME)
			refresh()
		},
	})

	const logout = () => logoutMutation()

	return {
		logout,
		isLoading,
	}
}
