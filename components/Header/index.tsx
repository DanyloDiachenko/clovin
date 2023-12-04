"use client";

import { useState, useRef, KeyboardEvent } from "react";

import styles from "./header.module.scss";
import { montserrat } from "@/fonts";
import { INavigaton } from "./navigation.interface";
import { HeaderAdaptive } from "./HeaderAdaptive";
import onClickOutsideHandler from "@/helpers/useOnOutsideClick";
import { scrollElementToView } from "@/helpers/scrollElementToView";

const navigation: INavigaton[] = [
    {
        title: "Про компанію",
        link: "about",
    },
    {
        title: "Продукти",
        link: "products",
    },
    {
        title: "Партнери",
        link: "partners",
    },
    {
        title: "Контакти",
        link: "contacts",
    },
];

export const Header = (): JSX.Element => {
    const [isHeaderAdaptiveOpen, setIsHeaderAdaptiveOpen] =
        useState<boolean>(false);

    const headerAdaptiveRef = useRef<HTMLDivElement>(null);
    onClickOutsideHandler(headerAdaptiveRef, () => {
        setIsHeaderAdaptiveOpen(false);
    });

    const setIsHeaderAdaptiveOpenKeyboard = (
        e: KeyboardEvent<HTMLSpanElement>,
    ) => {
        if (e.code === "Space" || e.code === "Enter") {
            setIsHeaderAdaptiveOpen(!isHeaderAdaptiveOpen);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img
                    className={styles.logo}
                    src="/logo.png"
                    alt="Логотип"
                    onClick={() => scrollElementToView("header")}
                    tabIndex={0}
                />
                <nav className={`${montserrat.className} ${styles.navgation}`}>
                    {navigation.map((nav, index) => (
                        <span
                            tabIndex={0}
                            key={index}
                            onClick={() => scrollElementToView(nav.link)}
                        >
                            {nav.title}
                        </span>
                    ))}
                </nav>
                <span className={styles.imgMenuWrapper} ref={headerAdaptiveRef}>
                    <img
                        onClick={() =>
                            setIsHeaderAdaptiveOpen(!isHeaderAdaptiveOpen)
                        }
                        tabIndex={0}
                        onKeyDown={setIsHeaderAdaptiveOpenKeyboard}
                        className={styles.burgerMenuIcon}
                        src="/icons/burger-menu.svg"
                        alt="Відкриття меню навігації"
                    />
                    <HeaderAdaptive
                        isOpen={isHeaderAdaptiveOpen}
                        navigation={navigation}
                    />
                </span>
            </div>
        </header>
    );
};
