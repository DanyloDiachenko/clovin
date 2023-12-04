import Link from "next/link";
import { ICompany } from "./company.interface";
import styles from "./whereWeAre.module.scss";

export const WhereWeAre = (): JSX.Element => {
    const companiesImages: ICompany[] = [
        {
            image: "/companies/company-1.png",
            link: "https://silpo.ua/",
        },
        {
            image: "/companies/company-2.png",
            link: "https://rozetka.com.ua/",
        },
        {
            image: "/companies/company-3.png",
            link: "https://epicentrk.ua/",
        },
        {
            image: "/companies/company-4.png",
            link: "https://prostor.ua/",
        },
        {
            image: "/companies/company-5.png",
            link: "https://www.watsons.ua/",
        },
        {
            image: "/companies/company-6.png",
            link: "https://velmart.ua/",
        },
        {
            image: "/companies/company-7.png",
            link: "https://megamarket.ua/",
        },
        {
            image: "/companies/company-8.png",
            link: "https://kishenya.ua/",
        },
        {
            image: "/companies/company-9.png",
            link: "https://varus.ua/",
        },
        {
            image: "/companies/company-10.png",
            link: "https://ta-da.ua/",
        },
        {
            image: "/companies/company-11.png",
            link: "https://auchan.ua/",
        },
        {
            image: "/companies/company-12.png",
            link: "https://www.nl.ua/",
        },
        {
            image: "/companies/company-13.png",
            link: "https://oldimarket.com.ua/",
        },
        {
            image: "/companies/company-14.png",
            link: "https://www.tavriav.ua/",
        },
        {
            image: "/companies/company-15.png",
            link: "https://zakaz.idealmarket.net.ua/",
        },
        {
            image: "/companies/company-16.png",
            link: "https://www.tochka.com.ua/",
        },
        {
            image: "/companies/company-17.png",
            link: "http://kopeyka.com.ua/",
        },
        {
            image: "/companies/company-18.png",
            link: "https://oneprice.ua/",
        },
    ];

    return (
        <section className={styles.whereWeAre}>
            <h2>Де нас знайти</h2>
            <div className={styles.companies}>
                {companiesImages.map((company, index) => (
                    <Link href={company.link} target="_blank" key={index}>
                        <img
                            src={company.image}
                            alt={"Картинка партнера " + index}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};
