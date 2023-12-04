import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
    subsets: ["cyrillic"],
    weight: ["400", "600", "700"],
    preload: true,
    display: "swap",
});

export const montserrat = Montserrat({
    subsets: ["cyrillic"],
    weight: ["400", "500", "600"],
    preload: true,
    display: "swap",
});
