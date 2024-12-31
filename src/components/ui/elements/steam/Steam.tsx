'use client'

import { API_ENDPOINT } from '@/api/endpoint/endpoint.api'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import { useRouter } from 'next/navigation'
import type { FC, PropsWithChildren } from 'react'
import SteamIcon from '../../icons/SteamIcon'

const Steam: FC<PropsWithChildren<IClassName>> = ({ className, children }) => {
	const { replace } = useRouter()

	return (
		<button className={className} onClick={() => replace(API_ENDPOINT.AUTH)}>
			{children}
			<SteamIcon />
		</button>
	)
}

export default Steam
