export const formatClassName = (
	classNames: (string | undefined | null)[]
): string => {
	return classNames.filter(Boolean).join(' ')
}
