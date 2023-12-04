import { montserrat } from "@/fonts"
import styles from "./banner.module.scss"

export const Banner = (): JSX.Element => {
    return (
        <section className={styles.banner}>
            <img src="/banners/banner.png" alt="banner" />
            <button className={montserrat.className}>Де нас знайти</button>
        </section>
    );
}