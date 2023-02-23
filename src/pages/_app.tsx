import '@/styles/global.sass'
import '@/styles/reset.sass'
import '@/styles/variables.sass'
import '@/styles/media.sass'
import '../../public/assets/fonts/icomoon/style.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
