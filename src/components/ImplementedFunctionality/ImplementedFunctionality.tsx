import {FC} from 'react'

const ImplementedFunctionality: FC = () => {
	return (
		<>
			<h2>Реализованный функционал</h2>
			<ol>
				<li>Встроенные команды, такие как <kbd>cd</kbd>, <kbd>exit</kbd> и т.д.</li>
				<li>Команды системы, такие как <kbd>ls</kbd>, <kbd>mkdir</kbd> и т.д.</li>
				<li>Реализация логического И (<kbd>&&</kbd>)</li>
				<li>Последовательное выполнение команд (<kbd>;</kbd>)</li>
				<li>Конвеер (оператор <kbd>|</kbd>)</li>
				<li>
					Перенаправление ввода/вывода
					(<kbd>&gt;</kbd> для перезаписи и <kbd>&gt;&gt;</kbd> для добавления)
				</li>
				<li>Исполнения скриптов</li>
				<li>Профиль - файл, который выполняется при запуске процесса оболочки</li>
				<li>Переменные</li>
				<li>Псевдонимы</li>
				<li>Строковые литералы</li>
				<li>Функции</li>
				<li>Мгновенные команды (instants)</li>
				<li>История комманд</li>
				<li>Комментарии</li>
			</ol>
		</>
	)
}

export default ImplementedFunctionality
