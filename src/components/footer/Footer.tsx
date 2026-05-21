import styles from "./Footer.module.css";
export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                <div className={styles.footerBrand}>
                    <h2 className={styles.footerBrandH2}>DevPoncet</h2>
                    <p className={styles.footerBrandP}>
                        Développeur web passionné par la création
                        d’expériences modernes, performantes et responsives.
                    </p>
                </div>


                <div className={styles.footerLinks}>
                    <h3 className={styles.footerLinksH3}>Navigation</h3>
                    <ul>
                        <li><a className={styles.footerLinksA} href="about">À propos</a></li>
                        <li><a className={styles.footerLinksA} href="projects">Projets</a></li>
                        <li><a className={styles.footerLinksA} href="skills">Compétences</a></li>
                        <li><a className={styles.footerLinksA} href="contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footerLinks}>
                    <h3 className={styles.footerLinksH3}>Réseaux</h3>
                    <div  className={styles.socialIcons} >
                        <a className={styles.footerLinksA} href="https://github.com/" target="_blank">GitHub</a>
                        <a className={styles.footerLinksA} href="https://linkedin.com/" target="_blank">LinkedIn</a>
                        <a className={styles.footerLinksA} href="mailto:contact@devponcet07.fr">Email</a>
                    </div>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <p>© 2026 DevPoncet — Tous droits réservés.</p>
            </div>
        </footer>
    )
}