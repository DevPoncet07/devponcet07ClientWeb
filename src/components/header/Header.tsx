
import styles from "./Header.module.css"
import ButtonTheme from "./ButtonTheme/ButtonTheme"

export default function Header() {
   
    return (
        <header className={styles.header}>
            <h1>Adrien Poncet</h1>
            <ButtonTheme/>
        </header>
    )
}
