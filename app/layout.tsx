import { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.scss";
import { Header } from "@/components/Header";
import { inter } from "@/fonts";
import { Footer } from "@/components/Footer";

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "ClovinShop - побутова хімія від виробника у Ваших руках.",
    openGraph: {
        title: "ClovinShop - побутова хімія від виробника у Ваших руках.",
        type: "website",
        url: "",
    },
    /* <head>
<base href="https://clovinshop.com.ua/">
<meta name="description" content="ClovinShop це порошки, гелі та капсули для прання, кондиціонери для білизни, засоби для посудомийних машин, рідини для посуду, полу та різноманітних поверхонь.">
<link href="https://clovinshop.com.ua/" rel="canonical">
<link href="https://clovinshop.com.ua/image/catalog/clovin_ukraine_120h70pix.png" rel="icon">
<meta property="og:url" content="https://clovinshop.com.ua/ua/">
<meta property="og:image" content="https://clovinshop.com.ua/image/catalog/logo_shop_130-05.png">
<meta property="og:site_name" content="Clovin Shop">
<link rel="alternate" hreflang="ru-ru" href="https://clovinshop.com.ua/">

<link rel="alternate" hreflang="uk-ua" href="https://clovinshop.com.ua/ua/">
</head> */
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
