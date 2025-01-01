import NotFoundPage from '@/app/not-found'
import Case from '@/components/screens/case/Case'
import { caseService } from '@/services/case/case.service'
import type { ISlugParam } from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

// TODO: CHANGE TO ANOTHER LANGUAGE
export async function generateMetadata({
	params,
}: any): Promise<Metadata | undefined> {
	const { slug } = await params

	if (!slug) return

	const { error, box } = await caseService.getCurrentCase(slug)

	if (error || !box) return

	return {
		openGraph: {
			images: {
				url: box.imagePath,
				width: 320,
				height: 320,
				alt: box.nameRu,
			},
		},
	}
}

export default async function CasePage({ params }: ISlugParam) {
	const { slug } = await params

	if (!slug) return <NotFoundPage />

	const { error, box } = await caseService.getCurrentCase(slug)

	if (error) return <NotFoundPage />

	return <Case box={box} />
}
