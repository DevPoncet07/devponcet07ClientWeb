import styles from "./Footer.module.css";
import Image from "next/image";
export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <Image
                    src="/static/footer/photo_face.png"
                    width={100}
                    height={100}
                    alt=""
                    loading="eager"
                    className={styles.avatar}
                />

                <div className={styles.footerBrand}>
                    <h2 className={styles.footerBrandH2}>DevPoncet<span className={styles.green}>07</span></h2>
                    <p className={styles.footerBrandP}>
                        Développeur web passionné par la création
                        d’expériences modernes, performantes et responsives.
                    </p>
                </div>


                <div className={styles.footerLinks}>
                    <h3 className={styles.footerLinksH3}>Navigation</h3>
                        <a className={styles.footerLinksA} href="/">Acceuil</a>
                        <a className={styles.footerLinksA} href="realisations">Réalisations</a>
                        <a className={styles.footerLinksA} href="competences">Compétences</a>
                        <a className={styles.footerLinksA} href="/apropos">À propos</a>
                        <a className={styles.footerLinksA} href="contact">Contact</a>
                </div>

                <div className={styles.footerLinks}>
                    <h3 className={styles.footerLinksH3}>Réseaux</h3>
                        <a className={styles.footerLinksA} href="https://github.com/DevPoncet07" target="_blank">GitHub</a>
                        <a className={styles.footerLinksA} href="https://www.linkedin.com/in/adrien-poncet/" target="_blank">LinkedIn</a>
                        <a className={styles.footerLinksA} href="https://leetcode.com/u/devponcet07/" target="_blank">Leetcode</a>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <p>© 2026 DevPoncet07 — Tous droits réservés.</p>
            </div>
        </footer>
    )
}