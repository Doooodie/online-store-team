/* eslint-disable */
import styles from './Container.module.css'

interface containerProps {
    children?:  React.ReactChild | React.ReactNode
}
export default function Container(props : containerProps) {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}