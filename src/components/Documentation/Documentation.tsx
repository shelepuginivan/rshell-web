import {FC} from 'react'
import CodeBlock from '@/ui/CodeBlock/CodeBlock'
import styles from './documentation.module.sass'
import Link from 'next/link'

const Documentation: FC = () => {
	const anchors = [
		'команды-системы',
		'встроенные-команды-оболочки',
		'оператор-и',
		'последовательное-выполнение-комманд',
		'комментарии',
		'конвеер',
		'перенаправление-ввода-вывода',
		'исполнение-скриптов',
		'профиль',
		'переменные',
		'строковые-литералы',
		'псевдонимы',
		'функции',
		'мгновенные-команды-instants'
	]

	return (
		<section className={styles.docs}>
			<h1>Документация rshell</h1>

			<h2>Оглавление</h2>
			<ol className={styles.tableOfContents}>
				<li><Link href={`#${anchors[0]}`}>Команды системы</Link></li>
				<li><Link href={`#${anchors[1]}`}>Встроенные команды оболочки</Link></li>
				<li><Link href={`#${anchors[2]}`}>Оператор <kbd>&&</kbd></Link></li>
				<li><Link href={`#${anchors[3]}`}>Последовательное выполнение комманд</Link></li>
				<li><Link href={`#${anchors[4]}`}>Комментарии</Link></li>
				<li><Link href={`#${anchors[5]}`}>Конвеер</Link></li>
				<li><Link href={`#${anchors[6]}`}>Перенаправление ввода/вывода</Link></li>
				<li><Link href={`#${anchors[7]}`}>Исполнение скриптов</Link></li>
				<li><Link href={`#${anchors[8]}`}>Профиль</Link></li>
				<li><Link href={`#${anchors[9]}`}>Переменные</Link></li>
				<li><Link href={`#${anchors[10]}`}>Строковые литералы</Link></li>
				<li><Link href={`#${anchors[11]}`}>Псевдонимы</Link></li>
				<li><Link href={`#${anchors[12]}`}>Функции</Link></li>
				<li><Link href={`#${anchors[13]}`}>Мгновенные команды (instants)</Link></li>
			</ol>

			<h2 className={styles.anchor} id={anchors[0]}>1. Команды системы</h2>
			<blockquote>
				<p>
					Выполнить системные команды, такие как <kbd>mkdir</kbd>, <kbd>ls</kbd> можно
					просто введя их вместе с аргументами:
				</p>
				<CodeBlock>mkdir test</CodeBlock>
				<CodeBlock>ls -la</CodeBlock>
				<p>
					Таким же образом можно запускать программы:
				</p>
				<CodeBlock>vim new.txt</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[1]}>2. Встроенные команды оболочки</h2>
			<blockquote>
				<p>
					rshell предоставляет некоторые встроенные команды:
				</p>
				<ul>
					<li><kbd>cd</kbd> - сменить каталог</li>
					<li><kbd>set</kbd> - установить переменную (см. переменные)</li>
					<li><kbd>alias</kbd> - установить псевдоним (см. псевдонимы)</li>
					<li><kbd>fn</kbd> - объявить функцию (см. функции)</li>
					<li><kbd>exit</kbd> - завершить этот процесс и выйти из оболочки.</li>
				</ul>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[2]}>3. Оператор <kbd>&&</kbd></h2>
			<blockquote>
				<p>
					`&&` (или логическое И) используется, когда мы хотим выполнять команды до тех пор,
					пока одна из них не завершится ненулевым кодом выхода
				</p>
				<CodeBlock>echo both && echo printed</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					both
					<br/>
					printed
				</CodeBlock>
				<p>Пример, где одна команда завершается с ошибкой</p>
				<CodeBlock>
					not_existing_command && echo won&#39;t be printed
				</CodeBlock>
				<kbd>stderr:</kbd>
				<CodeBlock stream="stderr">
					rsh: No such file or directory (os error 2)
				</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[3]}>4. Последовательное выполнение комманд</h2>
			<blockquote>
				<p>
					Последовательное выполнение полезно, если необходимо выполнить
					более одной команды независимо от того, как закончилась предыдущая команда
				</p>
				<CodeBlock>
					echo print; echo each; echo again
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					print
					<br/>
					each
					<br/>
					again
				</CodeBlock>
				<p>Это произойдет, если какая-либо команда завершится с ошибкой</p>
				<CodeBlock>
					echo anyway; cd not_existing directory; echo will output this
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					anyway
					will output this
				</CodeBlock>
				<kbd>stderr:</kbd>
				<CodeBlock stream="stderr">
					rsh: No such file or directory (os error 2)
				</CodeBlock>
				<p>
					И вот что вы увидите в терминале:
				</p>
				<CodeBlock stream="mixed">
					anyway
					<br/>
					<span color="red">rsh: No such file or directory (os error 2)</span>
					<br/>
					will output this
				</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[4]}>5. Комментарии</h2>
			<blockquote>
				<p>
					rshell поддерживает комментарии. Чтобы написать комментарий, используйте <kbd>#</kbd>:
				</p>
				<CodeBlock>
					# this will be ignored

					echo some text # as well as this
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					some text
				</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[5]}>6. Конвеер</h2>
			<blockquote>
				<p>
					Конвеер позволяет перенаправлять <em>стандартный вывод</em> одной команды
					в <em>стандартный ввод</em> следующей
				</p>
				<p>Например:</p>
				<CodeBlock>
					echo message | cat
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					message
				</CodeBlock>
				<p>
					При необходимости вы можете использовать оператор конвеера более одного раза:
				</p>
				<CodeBlock>
					&lt;command 1&gt; | &lt;command 2&gt; | &lt;command 3&gt; ...
				</CodeBlock>
				<p>
					Обратите внимание, что перенаправляется <strong>только</strong>
					<kbd>stdout</kbd>, но не <kbd>stderr</kbd>
				</p>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[6]}>7. Перенаправление ввода/вывода</h2>
			<blockquote>
				<p>
					Перенаправление ввода/вывода используется для перенаправления вывода процесса,
					обычно в файл.

					Пример:
				</p>
				<CodeBlock>
					echo new &gt; new.txt; cat new.txt
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">new</CodeBlock>
				<p>
					Оператор <kbd>&gt;</kbd> перезаписывает файл,
					а <kbd>&gt;&gt;</kbd> добавляет stdout в файл
				</p>
				<CodeBlock>
					echo newline &gt;&gt; new.txt; cat new.txt
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					new
					<br/>
					newline
				</CodeBlock>
				<p>Его также можно использовать несколько раз подряд</p>
				<CodeBlock>
					echo another &gt;&gt; new.txt &gt; really_new.txt
				</CodeBlock>
				<p>Выведем содержимое файлов:</p>
				<CodeBlock>
					cat new.txt; echo; cat really_new.txt
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					new
					<br/>
					newline
					<br/>
					another
					<br/><br/>
					new
					<br/>
					newline
					<br/>
					another
				</CodeBlock>
				<p>
					Да, в отличие от многих других оболочек, rshell записывает (или добавляет)
					все содержимое файла в следующий файл.
				</p>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[7]}>8. Исполнение скриптов</h2>
			<blockquote>
				<p>
					rshell может выполнять скрипты, написанные на его языке.

					Создайте файл <kbd>hello.rsh</kbd> и вставьте туда этот код:
				</p>
				<CodeBlock>
					echo Hello, World!
				</CodeBlock>
				<p>Затем выполните этот файл с помощью:</p>
				<CodeBlock>
					rsh hello.rsh
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					Привет, мир!
				</CodeBlock>

				<em>
					Таким образом, rshell может использоваться в качестве
					скриптового язык программирования
				</em>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[8]}>9. Профиль</h2>
			<blockquote>
				<p>
					Профиль - это файл, который выполняется при запуске процесса оболочки.
					Вы можете изменить его по своему усмотрению, например, установить псевдонимы,
					переменные или функции, или сделать все, что вам нужно. Доступ к профилю
					можно получить с помощью переменной <kbd>$profile</kbd>
				</p>
				<CodeBlock>
					vim $profile
				</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[9]}>10. Переменные</h2>
			<blockquote>
				<p>
					Объявить переменную можно с помощью ключевого слова <kbd>set</kbd>.
					После этого можно её использовать
				</p>
				<CodeBlock>
					{`set var=value
echo $var`}
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					value
				</CodeBlock>
				<p>
					Вы также можете установить значение переменной как другую переменную:
				</p>
				<CodeBlock>
					{`set another=$var
echo $another`}
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					value
				</CodeBlock>
				<p>
					Также можно установить в качестве имени переменной другую переменную.
					В этом случае именем будет значение первой переменной:
				</p>
				<CodeBlock>
					{`set $another=works
echo $value`}
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock>
					works
				</CodeBlock>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[10]}>11. Строковые литералы</h2>
			<blockquote>
				<p>
					Если вы хотите использовать именно строку, а не переменную, вы можете использовать
					строковые литералы. Для этого нужно поставить символ &#39; перед строкой:
				</p>
				<CodeBlock>
					{`set v=some_var
set v1='$v

echo $v1`}
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">$v</CodeBlock>

			</blockquote>

			<h2 className={styles.anchor} id={anchors[11]}>12. Псевдонимы</h2>
			<blockquote>
				<p>
					Если вы хотите использовать одну команду/функцию вместо другой, вы можете задать псевдоним
					при помощи ключевого слова <kbd>alias</kbd>
				</p>
				<CodeBlock>alias cat=bat</CodeBlock>

				<p>Теперь вместо <kbd>cat</kbd> будет выполняться <kbd>bat</kbd>.</p>
				<p>Если вы хотите использовать cat, используйте строковые литералы:</p>

				<CodeBlock>
					&#39;cat some_file.txt
				</CodeBlock>
				<p>Псевдонимы также поддерживают аргументы, например:</p>

				<CodeBlock>alias ll=exa -la</CodeBlock>

				<p>Теперь команда <kbd>ll</kbd> будет заменена на exa с флагами <kbd>-la</kbd></p>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[12]}>13. Функции</h2>
			<blockquote>
				<p>
					rshell позволяет определять функции - определённые
					процедуры, последовательности комманд, которые можно
					вызвать как единый блок кода.
				</p>
				<p>
					Объявить функцию можно с помощью ключевого слова <kbd>fn</kbd>:
				</p>
				<CodeBlock>
					{`fn myFunc {
echo Hello, World!
}`}
				</CodeBlock>
				<p>
					В данном примере тело функции заключено в фигурные скобки.
					Функции также можно объявить и без них:
				</p>
				<CodeBlock>
					fn anotherFunc echo Hello, World!
				</CodeBlock>
				<p>Если вызвать функцию, то выполнится её тело</p>
				<CodeBlock>{`myFunc
anotherFunc`}</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					{`Hello, World!
Hello, World!`}
				</CodeBlock>

				<p>
					Функции также могут принимать аргументы. Они доступны с помощью
					любой строки, начинающегося с <kbd>&</kbd> и подставляются в порядке
					использования:
				</p>
				<CodeBlock>
					{`fn newEcho {
echo &arg
}

newEcho text`}
				</CodeBlock>
				<kbd>stdout:</kbd>
				<CodeBlock>text</CodeBlock>
				<p>Пример функции с несколькими аргументами:</p>
				<CodeBlock>
					{`fn echoTwo {
echo &arg1 &arg2
echo &arg2 &arg1
}

echoTwo my message`}
				</CodeBlock>

				<kbd>stdout:</kbd>
				<CodeBlock stream="stdout">
					{`my message
message my`}
				</CodeBlock>


				<p>
					Если аргументов было передано меньше, чем использовано в функции,
					недостающие будут интерпретированы как строки.
				</p>
			</blockquote>

			<h2 className={styles.anchor} id={anchors[13]}>14. Мгновенные команды (instants)</h2>
			<blockquote>
				<p>
					Инстанты &ndash; это своего рода встроенные функции. Они могут принимать аргументы из конвеера,
					но при этом выводят результат непосредственно в <em>стандартный вывод</em>,
					и его нельзя передать по конвееру дальше.
				</p>
				<p>Имена инстантов начинаются с символа <kbd>@</kbd>.</p>
				<p>
					В текущей версии rshell есть только 2 инстанта:
				</p>
				<br/>
				<p>
					<kbd>@exec</kbd> &ndash; исполняет <kbd>*.rsh</kbd> файл в текущем процессе.
					Вы также можете использовать переменные, псевдонимы и функции,
					объявленные в этом файле, поэтому он очень похож на <kbd>import</kbd> в Python
					(поскольку выполняет импортированный файл).
				</p>
				<p>
					Инстант <kbd>@exec</kbd> имеет один параметр &ndash; <kbd>--noexit</kbd>. Если он указан,
					оболочка не завершит свой процесс, даже если файл содержит команду exit.
				</p>
				<p>Использование:</p>
				<CodeBlock>
					@exec &lt;filename.rsh&gt; [--noexit]
				</CodeBlock>
				<br/>
				<p>
					@format &ndash; форматирует текст в зависимости от переданных аргументов.
					Он может изменять такие параметры, как цвет, толщину шрифта и другое.
				</p>
				<p>Ниже приведена таблица всех поддерживаемых в текущей версии аргументов:</p>

				<table>
					<thead>
						<td>Аргумент</td> <td>Эффект</td>
					</thead>
					<tr> <td>--red</td> <td>Изменяет цвет на красный</td> </tr>
					<tr> <td>--green</td> <td>Изменяет цвет на зелёный</td> </tr>
					<tr> <td>--yellow</td> <td>Изменяет цвет на желтый</td> </tr>
					<tr> <td>--blue</td> <td>Изменяет цвет на синий</td> </tr>
					<tr> <td>--magenta</td> <td>Изменяет цвет на пурпурный</td> </tr>
					<tr> <td>--cyan</td> <td>Изменяет цвет на голубой</td> </tr>
					<tr> <td>--white</td> <td>Изменяет цвет на белый</td> </tr>
					<tr> <td>--bold</td> <td>Изменяет текст полужирным</td> </tr>
					<tr> <td>--italic</td> <td>Делает текст курсивным</td> </tr>
					<tr> <td>--underline</td> <td>Подчёркивает текст</td> </tr>
					<tr> <td>--dimmed</td> <td>Уменьшает яркость текста</td> </tr>
				</table>

				<p>Использование:</p>
				<CodeBlock>@format &lt;any string&gt; [--arg1 [--arg2 [--arg3 ...]]]</CodeBlock>
			</blockquote>
		</section>
	)
}

export default Documentation
