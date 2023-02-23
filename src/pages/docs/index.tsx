import Head from 'next/head'
import {FC} from 'react'
import Header from '@/components/Header/Header'
import Documentation from '@/components/Documentation/Documentation'

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>Документация -  rshell</title>
			</Head>
			<Header/>
			<Documentation/>
		</div>
	)
}

export default Index
