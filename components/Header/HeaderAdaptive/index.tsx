import Link from "next/link";

import { montserrat } from "@/fonts";
import styles from "./headerAdaptive.module.scss";
import { HeaderAdaptiveProps } from "./headerAdaptive.props";

export const HeaderAdaptive = ({
    navigation,
    isOpen,
}: HeaderAdaptiveProps): JSX.Element => {
    return (
        <div
            className={`${styles.headerAdaptive} ${
                isOpen ? styles.opened : ""
            }`}
        >
            <nav className={montserrat.className}>
                {navigation.map((nav, index) => (
                    <Link href={nav.link} key={index}>
                        {nav.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};
