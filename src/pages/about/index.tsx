import About from '@/components/About/About'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>Об rshell</title>
			</Head>
			<Header/>
			<About/>
		</div>
	)
}

export default Index
