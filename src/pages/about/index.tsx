import About from '@/components/About/About'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import {FunctionComponent} from 'react'

const Index: FunctionComponent = () => {
	return (
		<div>
			<Head>
				<title>О rshell</title>
			</Head>
			<Header/>
			<About/>
		</div>
	)
}

export default Index
