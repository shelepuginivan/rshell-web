import About from '@/components/About/About'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
	return (
		<main className="page">
			<Head>
				<title>Об rshell</title>
			</Head>
			<Header/>
			<About/>
		</main>
	)
}

export default Index
