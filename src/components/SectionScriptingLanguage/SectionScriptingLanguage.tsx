import {FC} from 'react'
import styles from './sectionScriptingLanguage.module.sass'

const SectionScriptingLanguage: FC = () => {
	return (
		<section className={styles.scriptingLanguage}>
			<code>
				<span>$ @exec script.rsh</span>
				<br/>
				<span>I&apos;m a scripting language!!</span>
			</code>

			<h1>...и скриптовый язык</h1>
			<blockquote>
				<p>
					Автоматизируйте взаимодействие с программами за счёт написания скриптов.
					Встроенные элементы оболочки позволяют форматировать вывод, определять
					переменные и функции, создавать псевдонимы команд и многое другое.
					Используйте rshell на максимум!
				</p>
			</blockquote>
		</section>
	)
}

export default SectionScriptingLanguage
