"use client"
import { useEffect } from "react";
import styles from "./App.module.css";

export default function App({children}: {
  children: React.ReactNode;
}) {

     useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

    return(
        <div className={styles.app}>
            {children}
        </div>
    )
}