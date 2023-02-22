import {FunctionComponent} from 'react'
import Link from 'next/link'
import {aboutRoute, documentationRoute, downloadRoute, sourceCodeRoute} from '@/utils/constants'
import styles from './header.module.sass'

const Header: FunctionComponent = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.link} href={downloadRoute}>Установить</Link>
			<Link className={styles.link} href={sourceCodeRoute}>Исходный код</Link>
			<Link className={styles.link} href={documentationRoute}>Документация</Link>
			<Link className={styles.link} href={aboutRoute}>О проекте</Link>
		</header>
	)
}

export default Header
