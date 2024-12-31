import { EnumLanguage } from '@/shared/enums/language/language.enum'

export const APOLLO_FULL_OPTIONS = (language: EnumLanguage) => ({
	context: {
		headers: {
			language,
		},
	},
	fetchPolicy: 'no-cache' as any,
})

export const APOLLO_OPTIONS = {
	fetchPolicy: 'no-cache' as any,
}
