'use client'

import { apolloClient } from '@/api/apollo/apollo.client'
import Toaster from '@/components/ui/elements/toaster/Toaster'
import { IS_PRODUCTION } from '@/constants/global/global.constants'
import type { IAuthToken } from '@/shared/interfaces/api/auth/auth.interface'
import { ApolloProvider } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import LanguageProvider from './language/LanguageProvider'
import UserProvider from './user/UserProvider'

if (!IS_PRODUCTION) {
	loadDevMessages()
	loadErrorMessages()
}

export default function MainProvider({
	children,
	isAuthenticated,
}: IAuthToken) {
	return (
		<>
			<LanguageProvider>
				<ApolloProvider client={apolloClient}>
					<UserProvider isAuthenticated={isAuthenticated}>
						{children}
					</UserProvider>
				</ApolloProvider>
			</LanguageProvider>
			<Toaster />
		</>
	)
}
