import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import Head from 'next/head'
import {FunctionComponent} from 'react'

const Index: FunctionComponent = () => {
	return (
		<div>
			<Head>
				<title>rshell - командная оболочка UNIX</title>
			</Head>
			<Header />
			<Intro/>
		</div>
	)
}

export default Index
