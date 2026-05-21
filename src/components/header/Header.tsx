'use client'
import styles from "./Header.module.css"
import ButtonTheme from "./ButtonTheme/ButtonTheme"
import Link from "next/link"

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
                <h1 className={styles.headerH1}>DevPoncet07</h1>
                <ButtonTheme />
            </div>
            <button onClick={openMenuBurger} id="buttonOpen" className={styles.buttonOpen}>Menu</button>
        </header>
        <nav className={styles.headerNav + " " + styles.closeMenuBurger} id="menuBurger">
            <Link className={styles.headerLink} href="/">Acceuil</Link>
            <Link className={styles.headerLink} href="/realisations">Mes réalisations</Link>
            <Link className={styles.headerLink} href="/competences">Mes compétences</Link>
        </nav>
        
    </>
    )
}
