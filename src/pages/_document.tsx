import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
add				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description" content="Российская командная оболочка для UNIX систем с открытым исходным кодом"/>
				<meta name="keywords" content="rshell, shell, оболочка, UNIX, скриптовый язык, командная строка, язык программирования"/>
				<meta name="author" content="Ivan Shelepugin <shelepuginivanm@gmail.com>"/>
				<meta property="og:title" content="rshell - Командная оболочка UNIX"/>
				<meta property="og:description" content="Российская командная оболочка для UNIX систем с открытым исходным кодом"/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
				<link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg"/>
				<link rel="manifest" href="/manifest.json"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
