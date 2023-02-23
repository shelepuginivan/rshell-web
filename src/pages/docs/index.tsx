import Head from 'next/head'
import {FC} from 'react'
import Header from '@/components/Header/Header'

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>Документация -  rshell</title>
			</Head>
			<Header/>
		</div>
	)
}

export default Index
