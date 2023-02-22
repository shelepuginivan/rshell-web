import {FunctionComponent} from 'react'
import styles from './intro.module.sass'

const Intro: FunctionComponent = () => {
	return (
		<section className={styles.intro}>
			<h1><span>rshell</span> - Российская оболочка для UNIX систем</h1>
		</section>
	)
}

export default Intro
