import styles from "./history.module.scss";

export const History = (): JSX.Element => {
    return (
        <section className={styles.history} id="about">
            <div className={styles.contentWrapper}>
                <div className={styles.firstCol}>
                    <div className={styles.additionalTitle}>
                        Коротка історія
                    </div>
                    <h1>Clovin Ukraine</h1>
                </div>
                <div className={styles.secondCol}>
                    <div className={styles.title}>
                        <span>29 років</span> міжнародного досвіду
                    </div>
                    <p>У 1995 році в Польші зареєстровано компанію Clovin</p>
                    <div className={styles.numbers}>
                        <div>1995</div>
                    </div>
                </div>
                <div className={styles.thirdCol}>
                    <p>19 років плідної праці в Україні.</p>
                </div>
                <div className={styles.fourthCol}>
                    <div className={styles.title}>
                        З 2011 року Clovin Ukraine
                    </div>
                    <p>має своє виробництво, розташоване в місті Шостка</p>
                    <div className={styles.numbers}>
                        <div>2011</div>
                    </div>
                </div>
                <div className={styles.fifthCol}>
                    <p>13 років адаптації і еволюції виробництва</p>
                </div>
                <div className={styles.sixthCol}>
                    <div className={styles.title}>
                        З 24 лютого багато чого змінилось,
                    </div>
                    <p>
                        але наше виробництво майже безупинно виготовляє побутову
                        хімію попри всі перешкоди,тому що ми розуміємо свою роль
                        і важливість для економіки України і життя її громадян.
                    </p>
                    <div className={styles.numbers}>
                        <div>2022</div>
                    </div>
                </div>
                <div className={styles.seventhCol}>
                    <div className={styles.title}>
                        Понад 18 місяців відданої боротьби за інтереси нації
                    </div>
                </div>
                <div className={styles.eighthCol}>
                    <p>
                        Більшість товарів Clovin, що продаються в Україні,
                        виробляються українцями для українців.
                    </p>
                </div>
                <div className={styles.ninethCol}>
                    <div className={styles.title}>
                        Протягом всього часу існування Clovin Ukraine
                    </div>
                    <p>
                        робить все можливе, щоб навіть у скрутні часи українці
                        могли користуватись якісними засобам для прання та
                        прибирання.
                    </p>
                </div>
            </div>
        </section>
    );
};
