import Logo from '@/components/ui/elements/logo/Logo'
import Social from '@/components/ui/elements/social/Social'
import { COMPANY_NAME, EMAIL } from '@/constants/global/global.constants'
import type { IFooterAbout } from '@/shared/interfaces/elements/footer/footer.interface'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './FooterAbout.module.scss'

const FooterAbout: FC<IFooterAbout> = ({ translate, isRussian }) => {
	return (
		<div className={styles.about}>
			<Logo className={styles.logo} iconId="footer" variant="icon" />
			<div className={styles.info}>
				<div className={styles.head}>
					<p className={styles.copyright}>© 2018-2024 {COMPANY_NAME}</p>
					<p className={styles.description}>{translate('slogan')}</p>
				</div>
				<div className={styles.social}>
					<p className={styles.placeholder}>{translate('social')}</p>
					<Social isRussian={isRussian} />
				</div>
				<Link className={styles.mail} href={`mailto: ${EMAIL}`}>
					<Mail />
					{EMAIL}
				</Link>
			</div>
		</div>
	)
}

export default FooterAbout
