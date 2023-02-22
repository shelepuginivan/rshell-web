import Header from '@/components/Header/Header'
import SectionCommandInterpreter from '@/components/SectionCommandInterpreter/SectionCommandInterpreter'
import Intro from '@/components/Intro/Intro'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>rshell - командная оболочка UNIX</title>
			</Head>
			<Header/>
			<Intro/>
			<SectionCommandInterpreter/>
		</div>
	)
}

export default Index
