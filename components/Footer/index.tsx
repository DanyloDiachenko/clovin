import Link from "next/link";

import styles from "./footer.module.scss";
import { montserrat } from "@/fonts";

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.contacts} ${montserrat.className}`}>
                    <div className={styles.title}>Контакти</div>
                    <Link href="#">
                        <img src="/icons/email.svg" alt="Електронна пошта" />
                        <span>office@clovin.com</span>
                    </Link>
                    <Link href="#">
                        <img src="/icons/phone.svg" alt="Номер телефону" />
                        <span>+380 67 307 53 72</span>
                    </Link>
                    <Link href="#">
                        <img src="/icons/location.svg" alt="Місцезнаходження" />
                        <span className={styles.location}>
                            вулиця Київська, 34 А, Софіївська Борщагівка,
                            Київська обл., 08131
                        </span>
                    </Link>
                </div>
                <img
                    className={styles.logo}
                    src="/logo-large.png"
                    alt="Логотип"
                />
            </div>
            <hr className={styles.hr} />
        </footer>
    );
};
