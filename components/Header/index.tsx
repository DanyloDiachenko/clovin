"use client";

import Link from "next/link";
import { useState, useRef } from "react";

import styles from "./header.module.scss";
import { montserrat } from "@/fonts";
import { INavigaton } from "./navigation.interface";
import { HeaderAdaptive } from "./HeaderAdaptive";
import onClickOutsideHandler from "@/hooks/useOnOutsideClick";

export const Header = (): JSX.Element => {
    const navigation: INavigaton[] = [
        {
            title: "Про компанію",
            link: "#about",
        },
        {
            title: "Продукти",
            link: "#products",
        },
        {
            title: "Партнери",
            link: "#partners",
        },
        {
            title: "Контакти",
            link: "#contacts",
        },
    ];

    const [isHeaderAdaptiveOpen, setIsHeaderAdaptiveOpen] =
        useState<boolean>(false);

    const headerAdaptiveRef = useRef<HTMLDivElement>(null);
    onClickOutsideHandler(headerAdaptiveRef, () => {
        setIsHeaderAdaptiveOpen(false);
    });

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logo} src="/logo.png" alt="Логотип" />
                <nav className={`${montserrat.className} ${styles.navgation}`}>
                    {navigation.map((nav, index) => (
                        <Link key={index} href={nav.link}>
                            {nav.title}
                        </Link>
                    ))}
                </nav>
                <span className={styles.imgMenuWrapper} ref={headerAdaptiveRef}>
                    <img
                        onClick={() =>
                            setIsHeaderAdaptiveOpen(!isHeaderAdaptiveOpen)
                        }
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
