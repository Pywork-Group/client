import { useUserQuery } from '@/__generated__/output'
import { APOLLO_OPTIONS } from '@/api/apollo/options/apollo-options.api'
import type { IId } from '@/shared/interfaces/common/param/param.interface'

export const useUser = ({ id }: IId) => {
	const { data, error, loading } = useUserQuery({
		...APOLLO_OPTIONS,
		variables: {
			id,
		},
	})

	return {
		isLoading: loading || !!error,
		isCurrent: !!data?.user.currency,
		user: data?.user,
	}
}
