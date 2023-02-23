import {FC, PropsWithChildren, useState} from 'react'
import styles from './codeBlock.module.sass'

type PropsType = PropsWithChildren & {
	stream?: 'stdout' | 'stderr' | 'mixed'
}

const CodeBlock: FC<PropsType> = ({children, stream}) => {
	const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false)

	const copyCodeToClipboard = async () => {
		await navigator.clipboard.writeText(children as string)
		setCopiedToClipboard(true)

		setTimeout(() => setCopiedToClipboard(false), 1500)
	}

	return (
		<div className={styles.code} data-stream={stream}>
			<code>{children}</code>
			<button
				className={styles.buttonCopy}
				data-copied={copiedToClipboard}
				onClick={copyCodeToClipboard}
			><span className={copiedToClipboard ? 'icon-success' : 'icon-clip'}></span></button>
		</div>
	)
}

export default CodeBlock
