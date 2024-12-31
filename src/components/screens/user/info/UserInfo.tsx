import Container from '@/components/ui/common/container/Container'
import Image from '@/components/ui/common/image/Image'
import Loader from '@/components/ui/elements/loader/Loader'
import Skeleton from '@/components/ui/elements/skeleton/Skeleton'
import SteamIcon from '@/components/ui/icons/SteamIcon'
import { PUBLIC_ROUTE, STEAM_ROUTE } from '@/constants/route/routes.constants'
import { useLogout } from '@/hooks/api/auth/useLogout.hook'
import type { IUserInfo } from '@/shared/interfaces/elements/user/user.interface'
import { formatClassName } from '@/utils/formats/class-name/format-class-name.util'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { LogOut, Wallet } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import UserTrade from '../trade/UserTrade'
import styles from './UserInfo.module.scss'

const UserInfo: FC<IUserInfo> = ({
	user,
	setUser,
	isLoading,
	isCurrent,
	translate,
	language,
}) => {
	const { logout, isLoading: isLogoutLoading } = useLogout({
		setUser,
		language,
	})

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<div
						className={formatClassName([
							styles.account,
							!isCurrent ? styles.other : styles.current,
						])}
					>
						{!user || isLoading ? (
							<Skeleton className={styles.skeleton} />
						) : (
							<>
								<div
									className={formatClassName([
										styles.box,
										!isCurrent ? styles.other : undefined,
									])}
								>
									<div className={styles.user}>
										<Image
											src={user.avatarPath}
											width={isCurrent ? 50 : 100}
											height={isCurrent ? 50 : 100}
											title={user.username}
											alt={user.username}
										/>
										<div className={styles.info}>
											<Link
												className={formatClassName([
													styles.username,
													isCurrent ? styles.current : styles.other,
												])}
												href={STEAM_ROUTE.PROFILE(user.steamId)}
												target="_blank"
											>
												<span>{user.username}</span>
												{isCurrent ? (
													<SteamIcon />
												) : (
													<span className={styles.steam}>
														Steam <SteamIcon />
													</span>
												)}
											</Link>
											{user.currency && (
												<span className={styles.balance}>
													{formatPrice(user.balance, user.currency)}
												</span>
											)}
										</div>
									</div>
									{isCurrent && (
										<div className={styles.buttons}>
											<Link
												className={styles.deposit}
												href={PUBLIC_ROUTE.DEPOSIT}
											>
												{translate('info.balance')}
												<Wallet />
											</Link>
											<button className={styles.logout} onClick={logout}>
												{isLogoutLoading ? (
													<Loader />
												) : (
													<>
														{translate('info.logout')}
														<LogOut />
													</>
												)}
											</button>
										</div>
									)}
								</div>
								{isCurrent && (
									<UserTrade
										tradeLink={user.tradeLink}
										translate={translate}
										language={language}
									/>
								)}
							</>
						)}
					</div>
					<div className={styles.preview}>
						<Image
							priority
							fill
							src="/storage/backgrounds/user.jpg"
							title=""
							alt=""
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default UserInfo
