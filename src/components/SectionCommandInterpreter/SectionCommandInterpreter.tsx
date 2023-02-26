import {FC, useEffect, useRef, useState} from 'react'
import styles from './sectionCommandInterpreter.module.sass'

const SectionCommandInterpreter: FC = () => {
	const commandRef = useRef<HTMLSpanElement>(null)
	const outputRef = useRef<HTMLSpanElement>(null)

	const [commandText, setCommandText] = useState<string>('')
	const [outputText, setOutputText] = useState<string>('')

	useEffect(() => {
		const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					observer.unobserve(commandRef.current as Element)

					const text = 'echo Hello, World! | @format --red --bold --italic'
					let iter = 0

					const textAdditionInterval = setInterval(() => {
						const updatedText = text.slice(0, iter)

						setCommandText(updatedText)

						if (updatedText.includes('echo ')) {
							const output = (updatedText.split('|')[0]).replace('echo ', '')
							setOutputText(output)
						}

						if (updatedText.includes('--red')) {
							(outputRef.current as HTMLSpanElement).classList.add(styles.red)
						}

						if (updatedText.includes('--bold')) {
							(outputRef.current as HTMLSpanElement).classList.add(styles.bold)
						}

						if (updatedText.includes('--italic')) {
							(outputRef.current as HTMLSpanElement).classList.add(styles.italic)
						}

						if (iter >= text.length) {
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
		<section className={styles.sectionCommandInterpreter}>
			<code>
				<span className={styles.command} ref={commandRef}>{commandText}</span>
				<br/>
				<span ref={outputRef}>{outputText}</span>
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
