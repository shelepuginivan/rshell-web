import Head from 'next/head'
import {FC} from 'react'
import Header from '@/components/Header/Header'
import Documentation from '@/components/Documentation/Documentation'

const Index: FC = () => {
	return (
		<main className="page">
			<Head>
				<title>Документация -  rshell</title>
			</Head>
			<Header/>
			<Documentation/>
		</main>
	)
}

export default Index
