import {
	type CurrentCaseQuery,
	type CurrentCaseQueryVariables,
	CurrentCaseDocument,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'

export const caseService = {
	async getCurrentCase(slug: string) {
		const { data, error } = await apolloClient.query<
			CurrentCaseQuery,
			CurrentCaseQueryVariables
		>({
			query: CurrentCaseDocument,
			variables: {
				slug,
			},
		})

		return {
			error,
			box: data.currentCase,
		}
	},
}
