import NotFoundPage from '@/app/not-found'
import User from '@/components/screens/user/User'
import type { IIdParam } from '@/shared/interfaces/common/param/param.interface'

export default async function UserPage({ params }: IIdParam) {
	const { id } = await params

	if (!id) return <NotFoundPage />

	return <User id={+id} />
}
