import {FC} from 'react'
import styles from './sectionCommandInterpreter.module.sass'

const SectionCommandInterpreter: FC = () => {
	return (
		<section className={styles.sectionCommandInterpreter}>
			<code>
				<span>$ echo Hello, World! | @format --red --bold --italic</span>
				<br/>
				<span className={styles.formatted}>Hello, World!</span>
			</code>

			<h1>Командный интерпретатор</h1>
			<blockquote>
				<p>
					rshell позволяет выполнять любые UNIX команды и запускать исполняемые файлы.
					Используйте функционал оболочки для быстрого и эффективного взаимодействия
					с операционной системой.
				</p>
			</blockquote>
		</section>
	)
}

export default SectionCommandInterpreter
