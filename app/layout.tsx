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
    description:
        "ClovinShop це порошки, гелі та капсули для прання, кондиціонери для білизни, засоби для посудомийних машин, рідини для посуду, полу та різноманітних поверхонь.",
    icons: "/logo.png",
    openGraph: {
        title: "ClovinShop - побутова хімія від виробника у Ваших руках.",
        type: "website",
        url: "https://clovin.vercel.app/",
        images: "/logo.png",
        siteName: "Clovin Shop",
    },
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
