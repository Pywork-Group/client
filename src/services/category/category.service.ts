import { CatalogDocument, type CatalogQuery } from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'

export const categoryService = {
	async getCatalog() {
		const { data, error } = await apolloClient.query<CatalogQuery>({
			query: CatalogDocument,
		})

		return {
			error,
			categories: data.catalog || [],
		}
	},
}
