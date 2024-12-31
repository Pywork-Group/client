'use client'

import { Origin, Status } from '@/__generated__/output'
import Skin from '@/components/parts/skin/Skin'
import Container from '@/components/ui/common/container/Container'
import Alert from '@/components/ui/elements/alert/Alert'
import Loader from '@/components/ui/elements/loader/Loader'
import Pagination from '@/components/ui/elements/pagination/Pagination'
import Select from '@/components/ui/elements/select/Select'
import Skeleton from '@/components/ui/elements/skeleton/Skeleton'
import CaseIcon from '@/components/ui/icons/CaseIcon'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import { useUserWins } from '@/hooks/api/user/useUserWins.hook'
import { useAlert } from '@/hooks/elements/alert/useAlert.hook'
import type { IUserWins } from '@/shared/interfaces/elements/user/user.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import {
	ArrowDown,
	Box,
	ChevronsDown,
	PackageCheck,
	ReceiptText,
	ShoppingCart,
} from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'
import { USER_WINS_FILTER_DATA } from './filter-data/user-wins-filter.data'
import styles from './UserWins.module.scss'

const UserWins: FC<IUserWins> = ({
	userId,
	isCurrent,
	isLoading: isUserLoading,
	currency,
	language,
	translate,
	isRussian,
}) => {
	const {
		action,
		pagination,
		wins,
		isLoading,
		count,
		error,
		sell,
		sellAll,
		request,
		status,
		changeStatus,
		messages,
	} = useUserWins({
		userId,
		currency,
		translate,
		language,
	})

	const { isShow, open, close } = useAlert()

	if (error) return null

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<div
						className={formatClassName([
							styles.head,
							isCurrent ? styles.current : styles.other,
						])}
					>
						<div className={styles.heading}>
							<Box />
							{translate('wins.heading')}
							{!isLoading && !isUserLoading && <span>{count}</span>}
						</div>
						{!isUserLoading && !isLoading && isCurrent && (
							<div className={styles.filters}>
								<Select
									className={styles.select}
									items={USER_WINS_FILTER_DATA({ translate })}
									value={status}
									change={(value) => changeStatus(value)}
								/>
								{wins.length > 0 && (
									<button className={styles.action} onClick={open}>
										<ShoppingCart />
										{translate('wins.sell')}
									</button>
								)}
								{isShow && (
									<Alert
										question={translate('wins.alert.question')}
										accept={translate('wins.alert.accept')}
										cancel={translate('wins.alert.cancel')}
										action={sellAll}
										close={close}
									/>
								)}
							</div>
						)}
					</div>
					<div className={styles.fill}>
						<ul className={styles.wins}>
							{isLoading || isUserLoading
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
													styles.win,
													styles.skeleton,
												])}
											>
												<Skeleton />
											</li>
										)
								  )
								: wins.map((skin, index) => {
										const isCurrentSkin = action.winId === skin.id
										const isWon = skin.status === Status.Won
										const isSold = skin.status === Status.Sold
										const isContracted = skin.status === Status.Contracted
										const isRequested = skin.status === Status.Requested
										const isReceived = skin.status === Status.Received

										return (
											<Skin
												key={index}
												className={formatClassName([
													styles.win,
													!isCurrent || !isWon ? styles.available : undefined,
												])}
												skin={skin}
												link={
													skin.case
														? PUBLIC_ROUTE.CASE(skin.case.slug)
														: PUBLIC_ROUTE.CONTRACT
												}
												currency={currency}
												isRussian={isRussian}
											>
												{isCurrent &&
													(isWon ? (
														<div className={styles.won}>
															<div className={styles.actions}>
																<button
																	className={styles.sell}
																	style={messages.sell}
																	onClick={() => sell(skin.id)}
																>
																	{action.isLoading &&
																	((isCurrentSkin &&
																		action.mutation === 'sell') ||
																		action.mutation === 'sellAll') ? (
																		<Loader className={styles.loader} />
																	) : (
																		<ShoppingCart />
																	)}
																</button>
																<button
																	className={styles.request}
																	style={messages.request}
																	onClick={() => request(skin.id)}
																>
																	{isCurrentSkin &&
																	action.isLoading &&
																	action.mutation === 'request' ? (
																		<Loader className={styles.loader} />
																	) : (
																		<ArrowDown />
																	)}
																</button>
															</div>
														</div>
													) : isSold ? (
														<div className={styles.sold} style={messages.sold}>
															<ShoppingCart />
														</div>
													) : isContracted ? (
														<div
															className={styles.contracted}
															style={messages.contracted}
														>
															<ReceiptText />
														</div>
													) : isRequested ? (
														<div
															className={styles.requested}
															style={messages.requested}
														>
															<ChevronsDown />
														</div>
													) : (
														isReceived && (
															<div
																className={styles.received}
																style={messages.received}
															>
																<PackageCheck />
															</div>
														)
													))}
												{skin.origin === Origin.Case ? (
													skin.case ? (
														<Image
															className={styles.case}
															src={skin.case.imagePath}
															width={77}
															height={77}
															alt=""
														/>
													) : (
														<CaseIcon className={styles.empty} />
													)
												) : (
													skin.origin === Origin.Contract && (
														<Image
															className={styles.contract}
															src="/storage/contract/contract.png"
															width={60}
															height={60}
															alt=""
														/>
													)
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
					</div>
				</div>
			</Container>
		</section>
	)
}

export default UserWins
