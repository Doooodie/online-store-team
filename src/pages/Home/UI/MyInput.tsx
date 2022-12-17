/* eslint-disable */
import styles from './MyInput.module.css'

interface MyInputProps {

}

export function MyInput(props: any) {
    return(
        <div className={styles.floatingLabel}>
            <input 
                className={styles.floatingLabelInput}
                {...props}
                />
        </div>
    )
}