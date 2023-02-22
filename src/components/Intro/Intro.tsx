import RoundedLink from '@/ui/RoundedLink/RoundedLink'
import {FC} from 'react'
import styles from './intro.module.sass'
import {documentationRoute, downloadRoute} from '@/utils/constants'

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<h1><span>rshell</span> - Российская оболочка для UNIX систем</h1>
			<menu>
				<RoundedLink color="red" href={downloadRoute}>Скачать</RoundedLink>
				<RoundedLink color="green" href={documentationRoute}>Документация</RoundedLink>
			</menu>
		</section>
	)
}

export default Intro
