import { montserrat } from "@/fonts";
import { IAdvantage } from "./advantage.interface";
import styles from "./advantages.module.scss";

export const Advantages = (): JSX.Element => {
    const advantages: IAdvantage[] = [
        {
            img: "/icons/animals.png",
            title: "не тестуємо на тваринах",
        },
        {
            img: "/icons/fosfat.png",
            title: "без фосфатів",
        },
        {
            img: "/icons/hlor.png",
            title: "без хлору",
        },
        {
            img: "/icons/safe.png",
            title: "безпечні",
        },
    ];

    return (
        <section className={styles.advantages}>
            <div className={styles.content}>
                <h2>Наші переваги:</h2>
                <div className={styles.descriptions}>
                    {advantages.map((advantage, index) => (
                        <div key={index} className={styles.item}>
                            <img src={advantage.img} alt={advantage.img} />
                            <p>{advantage.title}</p>
                        </div>
                    ))}
                </div>
                <button className={montserrat.className}>Де купити?</button>
            </div>
        </section>
    );
};
