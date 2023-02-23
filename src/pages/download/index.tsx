import DownloadInstruction from '@/components/DownloadInstruction/DownloadInstruction'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
	return (
		<main className="page">
			<Head>
				<title>Скачать rshell</title>
			</Head>
			<Header/>
			<DownloadInstruction/>
		</main>
	)
}

export default Index
