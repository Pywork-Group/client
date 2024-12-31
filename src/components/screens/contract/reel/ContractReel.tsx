import Skin from '@/components/parts/skin/Skin'
import Container from '@/components/ui/common/container/Container'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import { useContractReel } from '@/hooks/api/contract/useContractReel.hook'
import type { IContractReel } from '@/shared/interfaces/elements/contract/contract.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { formatSuffix } from '@/utils/formats/suffix/format-suffix.util'
import type { FC } from 'react'
import ContractWin from '../win/ContractWin'
import styles from './ContractReel.module.scss'

const ContractReel: FC<IContractReel> = ({
	currency,
	language,
	user,
	setUser,
	state,
	setState,
	isRussian,
	translate,
}) => {
	const {
		removeFromContract,
		contract,
		totalPrice,
		count,
		isEnabled,
		smallestPrice,
		biggestPrice,
	} = useContractReel({ currency, language, state, setState })

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>{translate('reel.heading')}</h1>
					{state.win && (
						<ContractWin
							currency={currency}
							translate={translate}
							language={language}
							user={user}
							setUser={setUser}
							win={state.win}
							state={state}
							setState={setState}
							isRussian={isRussian}
						/>
					)}
					<ul className={styles.items}>
						{Array.from({ length: 10 }, (_, index) => {
							const skin = state.contracts[index]

							return skin ? (
								<Skin
									key={index}
									className={styles.item}
									skin={skin}
									link={PUBLIC_ROUTE.SKIN(skin.skinId)}
									currency={currency}
									isRussian={isRussian}
								>
									<button
										className={styles.remove}
										onClick={() => removeFromContract(skin.id)}
									>
										<span>{translate('reel.delete')}</span>
									</button>
								</Skin>
							) : (
								<li key={index} className={styles.placeholder}>
									<span className={styles.number}>{index + 1}</span>
								</li>
							)
						})}
					</ul>
					<button
						className={formatClassName([
							styles.contract,
							!isEnabled ? styles.disabled : undefined,
						])}
						onClick={isEnabled ? contract : () => {}}
					>
						<span className={styles.box}>
							{translate('reel.contract')}
							<span className={styles.info}>
								{translate('reel.count', {
									count,
									suffix: formatSuffix(count, language),
								})}
								<span className={styles.price}>
									{formatPrice(totalPrice, currency)}
								</span>
							</span>
						</span>
					</button>
					<div className={styles.informer}>
						{isEnabled ? (
							<>
								{translate('reel.informer.heading')}
								<div>
									{translate('reel.informer.from')}{' '}
									<span>{formatPrice(smallestPrice, currency)}</span>{' '}
									{translate('reel.informer.to')}{' '}
									<span>{formatPrice(biggestPrice, currency)}</span>
								</div>
							</>
						) : (
							translate('reel.add')
						)}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default ContractReel
