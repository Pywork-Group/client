import Image from '@/components/ui/common/image/Image'
import { useContractWin } from '@/hooks/api/contract/useContractWin.hook'
import { useDisableScroll } from '@/hooks/helpers/disable-scroll/useDisableScroll.hook'
import type { IContractWin } from '@/shared/interfaces/elements/contract/contract.interface'
import { formatPrice } from '@/utils/formats/price/format-price.util'
import { formatSkinInfo } from '@/utils/formats/skin-info/format-skin-info.util'
import { DollarSign, RefreshCcw } from 'lucide-react'
import type { FC } from 'react'
import styles from './ContractWin.module.scss'

const ContractWin: FC<IContractWin> = ({
	currency,
	translate,
	language,
	win,
	state,
	setState,
	user,
	setUser,
	isRussian,
}) => {
	useDisableScroll()

	const { tryAgain, sell } = useContractWin({
		currency,
		language,
		state,
		setState,
		user,
		setUser,
	})

	const { type, name } = formatSkinInfo(isRussian ? win.nameRu : win.nameEn)

	return (
		<div className={styles.win}>
			<div className={styles.box}>
				<div className={styles.contract}>
					<Image
						src="/storage/contract/contract.png"
						width={288}
						height={288}
						title=""
						alt=""
					/>
				</div>
				<div className={styles.prize}>
					<div className={styles.preview}>
						<Image
							className={styles.background}
							src="/storage/contract/consumer.png"
							width={488}
							height={488}
							title={name}
							alt={name}
						/>
						<Image
							className={styles.image}
							src={win.imagePath}
							width={320}
							height={240}
							title={name}
							alt={name}
						/>
					</div>
					<div className={styles.info}>
						<div className={styles.type}>{type}</div>
						<div className={styles.name}>{name}</div>
					</div>
					<div className={styles.buttons}>
						<button
							className={styles.again}
							onClick={async () => await tryAgain()}
						>
							<RefreshCcw /> {translate('win.again')}
						</button>
						<button className={styles.sell} onClick={async () => await sell()}>
							<DollarSign />
							<span>{translate('win.sell')}</span>
							<span>{formatPrice(win[`price${currency}`], currency)}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContractWin
