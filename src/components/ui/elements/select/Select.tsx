import { useSelect } from '@/hooks/elements/select/useSelect.hook'
import type { ISelect } from '@/shared/interfaces/elements/select/select.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { ChevronDown } from 'lucide-react'
import type { FC } from 'react'
import styles from './Select.module.scss'

const Select: FC<ISelect> = ({ items, value, change, className }) => {
	const { ref, buttonRef, isShow, toggle } = useSelect()

	const pick = items.find((item) => item.value === value)

	const onChange = (value: any) => {
		change(value)
		toggle()
	}

	return (
		<div className={formatClassName([styles.select, className && className])}>
			<button ref={buttonRef} className={styles.toggle} onClick={toggle}>
				{pick?.label}
				<ChevronDown />
			</button>
			{isShow && (
				<ul ref={ref} className={styles.list}>
					{items
						.filter((item) => item.value !== pick?.value)
						.map((item) => (
							<li key={item.value} className={styles.item}>
								<button
									className={styles.button}
									onClick={() => onChange(item.value)}
								>
									{item.label}
								</button>
							</li>
						))}
				</ul>
			)}
		</div>
	)
}

export default Select
