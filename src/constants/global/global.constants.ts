export const IS_SERVER = typeof window === 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } }
export const WEBSITE_URL = process.env.SITE_URL as string

export const COMPANY_NAME = 'Kupidrop'
export const EMAIL = 'support@kupidrop.ru'
