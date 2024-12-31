import Home from '@/components/screens/home/Home'
import { categoryService } from '@/services/category/category.service'
import NotFoundPage from './not-found'

export default async function HomePage() {
	const { error, categories } = await categoryService.getCatalog()

	if (error) return <NotFoundPage />

	return <Home categories={categories} />
}
