import Skin from '@/components/parts/skin/Skin'
import Container from '@/components/ui/common/container/Container'
import Pagination from '@/components/ui/elements/pagination/Pagination'
import Skeleton from '@/components/ui/elements/skeleton/Skeleton'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import { useContractSkins } from '@/hooks/api/contract/useContractSkins.hook'
import type { IContractSkins } from '@/shared/interfaces/elements/contract/contract.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import type { FC } from 'react'
import ContractInformer from '../informer/ContractInformer'
import styles from './ContractSkins.module.scss'

const ContractSkins: FC<IContractSkins> = ({
	currency,
	count,
	isLoading,
	state,
	setState,
	isSkinExist,
	isRussian,
	translate,
	...pagination
}) => {
	const { isFull, addToContract } = useContractSkins({
		currency,
		state,
		setState,
	})

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<div className={styles.heading}>{translate('skins.heading')}</div>
					{!isLoading && !count ? (
						<ContractInformer translate={translate} />
					) : (
						<>
							<ul className={styles.skins}>
								{isLoading
									? Array.from(
											{
												length:
													pagination.page ===
													Math.ceil(count / pagination.perPage)
														? count % pagination.perPage || pagination.perPage
														: pagination.perPage,
											},
											(_, index) => (
												<li
													key={index}
													className={formatClassName([
														styles.skin,
														styles.skeleton,
													])}
												>
													<Skeleton />
												</li>
											)
									  )
									: state.skins.map((skin, index) => {
											const isDisabled = isSkinExist(skin.id) || isFull

											return (
												<Skin
													key={index}
													className={formatClassName([
														styles.skin,
														isDisabled ? styles.disabled : undefined,
													])}
													skin={skin}
													link={PUBLIC_ROUTE.SKIN(skin.skinId)}
													currency={currency}
													isRussian={isRussian}
												>
													{!isDisabled && (
														<button
															className={styles.add}
															onClick={() => addToContract(skin)}
														>
															<span>{translate('skins.add')}</span>
														</button>
													)}
												</Skin>
											)
									  })}
							</ul>
							<Pagination
								className={styles.pagination}
								count={Math.ceil(count / pagination.perPage)}
								page={pagination.page}
								prev={pagination.prev}
								next={pagination.next}
								goTo={(page) => pagination.goTo(page)}
							/>
						</>
					)}
				</div>
			</Container>
		</section>
	)
}

export default ContractSkins
