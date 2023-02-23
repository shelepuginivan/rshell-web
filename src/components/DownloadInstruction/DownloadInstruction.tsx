import {FC} from 'react'
import CodeBlock from '@/ui/CodeBlock/CodeBlock'
import styles from './downloadInstruction.module.sass'

const DownloadInstruction: FC = () => {
	return (
		<section>
			<h1>Скачать rshell</h1>

			<h2 className={styles.h2}>Ниже приведена инструкция по установке оболочки на ваше устройство:</h2>
			<p>
				Обратите внимание! Для установки rshell вам потребуются <a href="https://git-scm.com/download">git</a> и <a href="https://rustlang.org/">язык программирования Rust</a>
			</p>

			<ol className={styles.ol}>
				<li>
					Склонируйте репозиторий
					<CodeBlock>
						git clone https://github.com/shelepuginivan/rshell.git
					</CodeBlock>
				</li>

				<li>
					Установите бинарный файл с помощью cargo
					<CodeBlock>
						cargo install --path ./rshell
					</CodeBlock>
				</li>

				<li>
					Теперь rshell доступен в директории <kbd>~/.cargo/bin</kbd>.
					Вы можете запустить его командой

					<CodeBlock>
						~/.cargo/bin/rsh
					</CodeBlock>

					или экспортировать путь

					<CodeBlock>
						export PATH=~/.cargo/bin:$PATH
					</CodeBlock>

					и запустить

					<CodeBlock>rsh</CodeBlock>
				</li>

			</ol>
		</section>
	)
}

export default DownloadInstruction
