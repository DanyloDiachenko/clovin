import { KeyboardEvent } from "react";

import { montserrat } from "@/fonts";
import styles from "./headerAdaptive.module.scss";
import { HeaderAdaptiveProps } from "./headerAdaptive.props";
import { scrollElementToView } from "@/helpers/scrollElementToView";

export const HeaderAdaptive = ({
    navigation,
    isOpen,
}: HeaderAdaptiveProps): JSX.Element => {
    const scrollElementToViewKeyboard = (
        e: KeyboardEvent<HTMLSpanElement>,
        navLink: string,
    ) => {
        if (e.code === "Space" || e.code === "Enter") {
            scrollElementToView(navLink);
        }
    };

    return (
        <div
            className={`${styles.headerAdaptive} ${
                isOpen ? styles.opened : ""
            }`}
        >
            <nav className={montserrat.className}>
                {navigation.map((nav, index) => (
                    <span
                        key={index}
                        onClick={() => scrollElementToView(nav.link)}
                        tabIndex={isOpen ? 0 : -1}
                        onKeyDown={(e) =>
                            scrollElementToViewKeyboard(e, nav.link)
                        }
                    >
                        {nav.title}
                    </span>
                ))}
            </nav>
        </div>
    );
};
