import Container from '@/components/ui/common/container/Container'
import { PUBLIC_ROUTE } from '@/constants/route/routes.constants'
import { useCaseRoll } from '@/hooks/api/case/useCaseRoll.hook'
import type { ICaseRoll } from '@/shared/interfaces/elements/case/case.interface'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './CaseRoll.module.scss'
import CaseRollControllers from './controllers/CaseRollControllers'
import CaseRollInformer from './informer/CaseRollInformer'
import CaseRollSlots from './slots/CaseRollSlots'

const CaseRoll: FC<ICaseRoll> = ({ box, language, translate, isRussian }) => {
	const name = isRussian ? box.nameRu : box.nameEn

	const {
		refs,
		user,
		currency,
		state,
		setState,
		openCase,
		sell,
		sellAll,
	} = useCaseRoll({
		box,
		language,
	})

	return (
		<section className={styles.section}>
			<Container size="sm">
				<div className={styles.wrapper}>
					<div className={styles.head}>
						<Link className={styles.back} href={PUBLIC_ROUTE.HOME}>
							<ArrowLeft />
							{translate('back')}
						</Link>
						<h1 className={styles.heading}>{name}</h1>
					</div>
					<CaseRollSlots
						refs={refs}
						state={state}
						name={name}
						imagePath={box.imagePath}
						currency={currency}
						translate={translate}
						isRussian={isRussian}
						sell={sell}
					/>
					{user &&
					(user.balance >= box[`price${currency}`] ||
						state.slots.length > 0) ? (
						<CaseRollControllers
							currency={currency}
							box={box}
							state={state}
							translate={translate}
							setState={setState}
							openCase={openCase}
							sellAll={sellAll}
						/>
					) : (
						<CaseRollInformer
							price={box[`price${currency}`]}
							translate={translate}
							isLoading={!state.isFetched}
							user={user}
						/>
					)}
				</div>
			</Container>
		</section>
	)
}

export default CaseRoll
