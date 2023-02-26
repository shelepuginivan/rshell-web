import {FC, useEffect, useRef, useState} from 'react'
import styles from './sectionScriptingLanguage.module.sass'

const SectionScriptingLanguage: FC = () => {
	const commandRef = useRef<HTMLSpanElement>(null)

	const [commandText, setCommandText] = useState<string>('')
	const [outputText, setOutputText] = useState<string>('')


	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					observer.unobserve(commandRef.current as Element)

					const text = '@exec script.rsh'
					let iter = 0

					const textAdditionInterval = setInterval(() => {
						const updatedText = text.slice(0, iter)
						setCommandText(updatedText)

						if (iter >= text.length) {
							setOutputText('I\'m a scripting language!!')

							clearInterval(textAdditionInterval)
						}

						iter++
					}, 90)

				}
			})
		})

		observer.observe(commandRef.current as Element)
	}, [])

	return (
		<section className={styles.scriptingLanguage}>
			<code>
				<span ref={commandRef} className={styles.command}>{commandText}</span>
				<br/>
				<span>{outputText}</span>
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
