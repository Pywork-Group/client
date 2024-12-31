import { LANGUAGES } from '@/base/languages/languages.data'
import Select from '@/components/ui/elements/select/Select'
import type { IHeaderLanguages } from '@/shared/interfaces/elements/header/header.interface'
import type { FC } from 'react'
import styles from './HeaderLanguages.module.scss'

const HeaderLanguages: FC<IHeaderLanguages> = ({ language, setLanguage }) => {
	return (
		<Select
			className={styles.select}
			items={LANGUAGES.map((item) => ({
				label: (
					<>
						<item.icon />
						<span>{item.language}</span>
					</>
				),
				value: item.language,
			}))}
			value={language}
			change={(value) => setLanguage(value)}
		/>
	)
}

export default HeaderLanguages
