import { ReactNode } from "react";

import "./globals.scss";
import { Header } from "@/components/Header";
import { inter } from "@/fonts";
import { Footer } from "@/components/Footer";

interface RootLayoutProps {
    children: ReactNode;
}

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
