import { montserrat } from "@/fonts";
import styles from "./worldMap.module.scss";
import { INumber } from "./number.interface";

export const WorldMap = (): JSX.Element => {
    const numbers: INumber[] = [
        {
            title: "4,2",
            description: "млн кг",
        },
        {
            title: "3,3",
            description: "млн л",
        },
        {
            title: "30",
            description: "країнах",
        },
    ];

    return (
        <section className={styles.worldMap}>
            <p className={styles.description}>
                <b>Загальна місячна виробнича потужність складає</b> більше ніж{" "}
                <b>4,2 млн кілограмів</b> порошкової продукції та{" "}
                <b>1,5 млн літрів</b> рідких продуктів, які можна придбати{" "}
                <b>у понад 30 країнах</b> планети на 5 континентах.
            </p>
            <img src="/banners/world-map.png" alt="Картина миру" />

            <div className={`${styles.numbers} ${montserrat.className}`}>
                {numbers.map((number, index) => (
                    <div key={index}>
                        <div className={styles.title}>{number.title}</div>
                        <p>{number.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
