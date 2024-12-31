import CaseDrop from '@/components/parts/case-drop/CaseDrop'
import Image from '@/components/ui/common/image/Image'
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon'
import ArrowUpIcon from '@/components/ui/icons/ArrowUpIcon'
import type { ICaseSlots } from '@/shared/interfaces/elements/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { DollarSign } from 'lucide-react'
import type { FC } from 'react'
import styles from './CaseRollSlots.module.scss'

const CaseRollSlots: FC<ICaseSlots> = ({
	refs,
	state,
	name,
	imagePath,
	currency,
	translate,
	isRussian,
	sell,
}) => {
	const CLASSNAMES = {
		1: ['full'],
		2: ['half', 'half'],
		3: ['full', 'half', 'half'],
		4: ['half', 'half', 'half', 'half'],
		5: ['half', 'half', 'full', 'half', 'half'],
	} as any

	return (
		<ul className={styles.slots}>
			{Array.from({ length: state.times }).map((_, index) => {
				const isOpening = state.slots.length > 0

				return (
					<li
						key={index}
						className={formatClassName([
							styles.slot,
							styles[CLASSNAMES[state.times][index]],
							isOpening ? styles.opened : undefined,
						])}
					>
						{!isOpening ? (
							<Image
								priority
								src={imagePath}
								width={247}
								height={247}
								title={name}
								alt={name}
							/>
						) : (
							<>
								<ArrowDownIcon />
								<div className={styles.swiper}>
									<ul
										ref={(el) => {
											refs.current[index] = el
										}}
										className={formatClassName([
											styles.skins,
											state.isOpeningEnd ? styles.end : undefined,
										])}
									>
										{state.slots[index].map((skin, index) => (
											<CaseDrop
												key={index}
												className={styles.skin}
												skin={skin}
												isRussian={isRussian}
											>
												{state.slots.length > 1 &&
													state.isOpeningEnd &&
													skin.win &&
													(!state.sales.includes(skin.win.id) ? (
														<button
															className={styles.sell}
															onClick={() => sell(skin.win!.id)}
														>
															<DollarSign />
															<span>
																{formatPrice(
																	skin.win[`price${currency}`],
																	currency
																)}
															</span>
														</button>
													) : (
														<span className={styles.sold}>
															{translate('slots.sold')}
														</span>
													))}
											</CaseDrop>
										))}
									</ul>
								</div>
								<ArrowUpIcon />
							</>
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default CaseRollSlots
