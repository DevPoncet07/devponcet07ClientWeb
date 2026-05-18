import styles from "./App.module.css";

export default function App({
  children,
}: {
  children: React.ReactNode;
}) {

    return(
        <div className={styles.app}>
            {children}
        </div>
    )
}