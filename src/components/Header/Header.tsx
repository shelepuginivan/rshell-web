import {FC, useState} from 'react'
import Link from 'next/link'
import {aboutRoute, documentationRoute, downloadRoute, sourceCodeRoute} from '@/utils/constants'
import styles from './header.module.sass'
import {useRouter} from 'next/router'

const Header: FC = () => {
	const [menuVisible, setMenuVisible] = useState<boolean>(false)

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
			>Исходный код&thinsp;<i className="icon-external-link"></i></Link>
			<Link data-active={router.pathname == documentationRoute} className={styles.link} href={documentationRoute}>Документация</Link>
			<Link data-active={router.pathname == aboutRoute} className={styles.link} href={aboutRoute}>О проекте</Link>
			<i onClick={() => setMenuVisible(prev => !prev)} className="icon-menu"></i>

			<menu data-visible={menuVisible} className={styles.menu}>
				<Link data-active={router.pathname == downloadRoute} className={styles.link} href={downloadRoute}>Скачать</Link>
				<Link target="_blank" className={styles.link} href={sourceCodeRoute}>Исходный код&thinsp;<i className="icon-external-link"></i></Link>
				<Link data-active={router.pathname == documentationRoute} className={styles.link} href={documentationRoute}>Документация</Link>
				<Link data-active={router.pathname == aboutRoute} className={styles.link} href={aboutRoute}>О проекте</Link>
			</menu>
		</header>
	)
}

export default Header
