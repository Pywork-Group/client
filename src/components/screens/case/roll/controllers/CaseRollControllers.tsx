import Loader from '@/components/ui/elements/loader/Loader'
import Switcher from '@/components/ui/elements/switcher/Switcher'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import type { ICaseControllers } from '@/shared/interfaces/elements/case/case.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { formatToFixed } from '@/utils/formats/to-fixed/formatToFixed.util'
import { ReceiptText, Repeat, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './CaseRollControllers.module.scss'

const CaseRollControllers: FC<ICaseControllers> = ({
	box,
	currency,
	translate,
	state,
	setState,
	openCase,
	sellAll,
}) => {
	return state.slots.length > 0 ? (
		<>
			{!state.isAnimationEnd && (
				<div className={styles.loader}>
					<Loader className={styles.spinner} />
					{translate('controllers.opening')}
				</div>
			)}
			{state.isOpeningEnd && (
				<div className={styles.buttons}>
					<button
						className={styles.again}
						onClick={() =>
							setState((prev) => ({
								...prev,
								price: 0,
								slots: [],
								sales: [],
								isAnimationEnd: false,
								isOpeningEnd: false,
							}))
						}
					>
						<Repeat />
						{translate('controllers.again')}
					</button>
					{formatToFixed(state.price) > 0 && (
						<button className={styles.sell} onClick={sellAll}>
							<ShoppingCart />
							{translate('controllers.sell', {
								price: formatPrice(state.price, currency),
							})}
						</button>
					)}
					<Link className={styles.contract} href={PUBLIC_ROUTE.CONTRACT}>
						<ReceiptText />
						{translate('controllers.contract')}
					</Link>
				</div>
			)}
		</>
	) : (
		<div className={styles.controllers}>
			<ul className={styles.times}>
				{Array.from({ length: 5 }, (_, index) => {
					const times = index + 1

					return (
						<li key={times}>
							<button
								className={formatClassName([
									styles.time,
									times === state.times ? styles.picked : undefined,
								])}
								onClick={() =>
									setState((prev) => ({
										...prev,
										times,
									}))
								}
							>
								x{times}
							</button>
						</li>
					)
				})}
			</ul>
			<button className={styles.open} onClick={openCase}>
				{translate('controllers.open', {
					price: formatPrice(box[`price${currency}`] * state.times, currency),
				})}
			</button>
			<Switcher
				className={styles.fast}
				label="Быстро"
				value={state.isFast}
				onClick={() =>
					setState((prev) => ({
						...prev,
						isFast: !state.isFast,
					}))
				}
			/>
		</div>
	)
}

export default CaseRollControllers
