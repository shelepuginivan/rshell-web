import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
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
