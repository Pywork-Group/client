export const getTranslateX = (refs: any[], winIndex: number) => {
	const translateX: number[] = []
	const translateCenter: number[] = []

	const itemWidth = refs[0].children[0].clientWidth

	refs.forEach((ref) => {
		if (!ref) {
			translateX.push(0)
			translateCenter.push(0)
			return
		}

		const refWidth = ref.clientWidth

		const baseTranslate = itemWidth * winIndex + (winIndex - 1) * 2
		const center = Math.floor(baseTranslate - itemWidth / 2 - refWidth / 2)

		const randomPosition =
			Math.floor(Math.random() * (itemWidth / 2 - 20 + 1)) + 10
		const x = Math.floor(
			baseTranslate - randomPosition - itemWidth / 2 - refWidth / 2
		)

		translateX.push(x)
		translateCenter.push(center)
	})

	return {
		translateX,
		translateCenter,
		itemWidth,
	}
}
