import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
				<link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
