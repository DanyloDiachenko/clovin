import styles from "./page.module.scss";
import { WorldMap } from "@/components/PageComponents/Map";
import { Banner } from "@/components/PageComponents/Banner";
import { Advantages } from "@/components/PageComponents/Advantages";
import { Brands } from "@/components/PageComponents/Brands";
import { Sections } from "@/components/PageComponents/Sections";
import { WhereWeAre } from "@/components/PageComponents/WhereWeAre";
import { History } from "@/components/PageComponents/History";

const Home = (): JSX.Element => {
    return (
        <main className={styles.main} id="header">
            <Banner />
            <History />
            <WorldMap />
            <Advantages />
            <Brands />
            <Sections />
            <WhereWeAre />
        </main>
    );
};

export default Home;
