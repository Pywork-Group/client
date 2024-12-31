import type { FC } from 'react'
import ReactSkeleton, {
	type SkeletonProps as ISkeleton,
} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Skeleton: FC<ISkeleton> = ({ className, ...rest }) => {
	return (
		<ReactSkeleton
			{...rest}
			baseColor="#1d1d2a"
			highlightColor="#22232f"
			containerClassName={className && className}
			className="block w-full h-full"
		/>
	)
}

export default Skeleton
