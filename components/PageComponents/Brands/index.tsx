import styles from "./brands.module.scss";
import { Slider } from "./Slider";

export const Brands = (): JSX.Element => {
    return (
        <section className={styles.brands}>
            <h2>Наші торгові марки</h2>
            <Slider />
        </section>
    );
};
