import {
	CurrentSkinDocument,
	type CurrentSkinQuery,
	type CurrentSkinQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'

export const skinService = {
	async getCurrentSkin(id: number) {
		const { data, error } = await apolloClient.query<
			CurrentSkinQuery,
			CurrentSkinQueryVariables
		>({
			query: CurrentSkinDocument,
			variables: {
				id,
			},
		})

		return {
			error,
			skin: data.currentSkin,
		}
	},
}
