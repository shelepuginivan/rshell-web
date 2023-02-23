import {FC} from 'react'
import styles from './about.module.sass'
import ProjectGoals from '@/components/ProjectGoals/ProjectGoals'
import ImplementedFunctionality from '../ImplementedFunctionality/ImplementedFunctionality'
import PlannedFunctionality from '../PlannedFunctionality/PlannedFunctionality'

const About: FC = () => {
	return (
		<section className={styles.about}>
			<h1>Об rshell</h1>
			<blockquote>
				<ProjectGoals/>
				<ImplementedFunctionality/>
				<PlannedFunctionality/>
			</blockquote>
		</section>
	)
}

export default About
