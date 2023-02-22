import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
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
