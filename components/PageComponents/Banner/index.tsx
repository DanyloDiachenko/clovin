import Link from "next/link";

import { montserrat } from "@/fonts";
import styles from "./banner.module.scss";

export const Banner = (): JSX.Element => {
    return (
        <section className={styles.banner}>
            <img src="/banners/banner.png" alt="banner" />
            <Link href="https://clovinshop.com.ua/ua/about-us" target="_blank">
                <button className={montserrat.className}>
                    Коротко про нас
                </button>
            </Link>
        </section>
    );
};
