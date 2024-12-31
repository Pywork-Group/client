import NotFoundPage from '@/app/not-found'
import Skin from '@/components/screens/skin/Skin'
import { skinService } from '@/services/skin/skin.service'
import type { IIdParam } from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

export async function generateMetadata({
	params,
}: IIdParam): Promise<Metadata | undefined> {
	const { id } = await params

	if (!id) return

	const { error, skin } = await skinService.getCurrentSkin(+id)

	if (error || !skin) return

	return {
		title: skin.nameRu,
		openGraph: {
			images: {
				url: skin.imagePath,
				width: 284,
				height: 213,
				alt: skin.nameRu,
			},
		},
	}
}

export default async function SkinPage({ params }: IIdParam) {
	const { id } = await params

	if (!id) return <NotFoundPage />

	const { error, skin } = await skinService.getCurrentSkin(+id)

	if (error || !skin) return <NotFoundPage />

	return <Skin skin={skin} />
}
