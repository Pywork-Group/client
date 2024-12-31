export const formatSkinInfo = (text: string) => {
	const parts = text.split('|').map((part) => part.trim())

	return {
		type: parts[0],
		name: parts[1],
	}
}
