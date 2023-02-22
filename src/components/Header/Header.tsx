import {FC} from 'react'
import Link from 'next/link'
import {aboutRoute, documentationRoute, downloadRoute, sourceCodeRoute} from '@/utils/constants'
import styles from './header.module.sass'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.link} href="/">
				<img className={styles.img} draggable={false} src="/favicon.svg" alt=""/>
			</Link>
			<Link className={styles.link} href={downloadRoute}>Установить</Link>
			<Link className={styles.link} href={sourceCodeRoute}>Исходный код</Link>
			<Link className={styles.link} href={documentationRoute}>Документация</Link>
			<Link className={styles.link} href={aboutRoute}>О проекте</Link>
		</header>
	)
}

export default Header
