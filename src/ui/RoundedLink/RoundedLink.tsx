import {FC, PropsWithChildren} from 'react'
import Link, {LinkProps} from 'next/link'
import styles from './roundedLink.module.sass'

type PropsType = LinkProps & PropsWithChildren & {color: 'green' | 'red'}

const RoundedLink: FC<PropsType> = (props) => {
	return <Link className={styles.link} {...props} />
}

export default RoundedLink
