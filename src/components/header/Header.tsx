'use client'
import styles from "./Header.module.css"
import ButtonTheme from "./ButtonTheme/ButtonTheme"

export default function Header() {

    function openMenuBurger() {
        const menuBurger = document.getElementById("menuBurger")
        const buttonOpen = document.getElementById("buttonOpen")
        menuBurger?.classList.toggle(styles.closeMenuBurger)
        menuBurger?.classList.toggle(styles.openMenuBurger)
        if (buttonOpen?.textContent=="X"){
            buttonOpen.textContent="Menu"
        }else{
            buttonOpen!.textContent="X"
        }
    }

    return (<>
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <h1 className={styles.headerH1}><a href="/">DevPoncet07</a></h1>
                <ButtonTheme />
            </div>
            <button onClick={openMenuBurger} id="buttonOpen" className={styles.buttonOpen}>Menu</button>
        </header>
        <nav className={styles.headerNav + " " + styles.closeMenuBurger} id="menuBurger">
            <a className={styles.headerLink} href="/">Acceuil</a>
            <a className={styles.headerLink} href="/realisations">Mes réalisations</a>
            <a className={styles.headerLink} href="/competences">Mes compétences</a>
            <a className={styles.headerLink} href="/apropos">À propos</a>
            <a className={styles.headerLink} href="/contact">Contact</a>
        </nav>
        
    </>
    )
}
