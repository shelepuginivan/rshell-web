import Header from '@/components/Header/Header'
import SectionCommandInterpreter from '@/components/SectionCommandInterpreter/SectionCommandInterpreter'
import Intro from '@/components/Intro/Intro'
import Head from 'next/head'
import {FC} from 'react'
import SectionScriptingLanguage from '@/components/SectionScriptingLanguage/SectionScriptingLanguage'

const Index: FC = () => {
	return (
		<main className="page">
			<Head>
				<title>rshell - командная оболочка UNIX</title>
			</Head>
			<Header/>
			<Intro/>
			<SectionCommandInterpreter/>
			<SectionScriptingLanguage/>
		</main>
	)
}

export default Index
