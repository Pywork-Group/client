import type { IImage } from '@/shared/interfaces/common/image/image.interface'
import NextImage from 'next/image'
import type { FC } from 'react'

const Image: FC<IImage> = ({ className, ...rest }) => {
	return (
		<NextImage
			className={className && className}
			quality={100}
			{...rest}
		/>
	)
}

export default Image
