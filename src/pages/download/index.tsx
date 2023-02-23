import DownloadInstruction from '@/components/DownloadInstruction/DownloadInstruction'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import {FC} from 'react'

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>Установить rshell</title>
			</Head>
			<Header/>
			<DownloadInstruction/>
		</div>
	)
}

export default Index
