import '@/styles/global.sass'
import '@/styles/reset.sass'
import '@/styles/variables.sass'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
