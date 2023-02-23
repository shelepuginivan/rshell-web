import {FC} from 'react'
import Link from 'next/link'
import {aboutRoute, documentationRoute, downloadRoute, sourceCodeRoute} from '@/utils/constants'
import styles from './header.module.sass'
import {useRouter} from 'next/router'

const Header: FC = () => {
	const router = useRouter()

	return (
		<header className={styles.header}>
			<Link className={styles.link} href="/">
				<img className={styles.img} draggable={false} src="/favicon.svg" alt=""/>
			</Link>
			<Link data-active={router.pathname == downloadRoute} className={styles.link} href={downloadRoute}>Скачать</Link>
			<Link target="_blank"
				className={styles.link}
				href={sourceCodeRoute}
			>Исходный код <i className="icon-external-link"></i></Link>
			<Link data-active={router.pathname == documentationRoute} className={styles.link} href={documentationRoute}>Документация</Link>
			<Link data-active={router.pathname == aboutRoute} className={styles.link} href={aboutRoute}>О проекте</Link>
		</header>
	)
}

export default Header
