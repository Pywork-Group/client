import '@/assets/styles/global.scss'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import {
	COMPANY_NAME,
	EMAIL,
	WEBSITE_URL,
} from '@/constants/global/global.constants'
import MainProvider from '@/providers/MainProvider'
import { EnumCookie } from '@/shared/enums/cookie/cookie.enum'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { cookies as NextCookies } from 'next/headers'
import type { PropsWithChildren } from 'react'

// TODO: CHANGE TO OTHER LANGUAGE
export const metadata: Metadata = {
	title:
		'Кейсы CS2, CS:GO от KUPIDROP! Открывай кейсы кс2, кс го и получай лучшее!',
	description:
		'Открывай кейсы CS2, CS:GO по самым выгодным ценам от KUPIDROP! Заходи каждый день и получай кейсы и другие предметы из кс2 в виде бонуса! Кейсы обновляются каждую неделю! Моментальный вывод в Steam!',
	openGraph: {
		type: 'website',
		url: WEBSITE_URL,
		siteName: COMPANY_NAME,
		emails: EMAIL,
		locale: 'ru_RU',
	},
	metadataBase: new URL(WEBSITE_URL),
	authors: [{ name: COMPANY_NAME, url: WEBSITE_URL }],
	applicationName: COMPANY_NAME,
}

const fontGotham = localFont({
	src: [
		{
			path: './fonts/Gotham-Light.woff',
			weight: '300',
		},
		{
			path: './fonts/Gotham-Light.woff2',
			weight: '300',
		},
		{
			path: './fonts/Gotham-Regular.woff',
			weight: '400',
		},
		{
			path: './fonts/Gotham-Regular.woff2',
			weight: '400',
		},
		{
			path: './fonts/Gotham-Bold.woff',
			weight: '700',
		},
		{
			path: './fonts/Gotham-Bold.woff2',
			weight: '700',
		},
		{
			path: './fonts/Gotham-Black.woff',
			weight: '900',
		},
		{
			path: './fonts/Gotham-Black.woff2',
			weight: '900',
		},
	],
	display: 'swap',
	style: 'normal',
	variable: '--font-gotham',
})

export default async function RootLayout({ children }: PropsWithChildren) {
	const cookies = await NextCookies()

	return (
		<html>
			<body className={fontGotham.variable}>
				<MainProvider isAuthenticated={cookies.has(EnumCookie.REFRESH_TOKEN)}>
					<Header />
					<main>{children}</main>
					<Footer />
				</MainProvider>
			</body>
		</html>
	)
}
