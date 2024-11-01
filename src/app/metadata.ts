// src/app/metadata.ts

import { Metadata } from "next";

interface PageData {
    title: string;
    description: string;
    image: string;
    imageSquare?: string;
    imageSmall?: string;
    imageAlt: string;
    keywords: string[];
}

type PageKeys = "home" | "contact-us";

const pages: Record<PageKeys, PageData> = {
    home: {
        title: "CADEX - Next.js Frontend Developer Test App",
        description:
            "Explore the CADEX App, a sample project built with Next.js to showcase frontend development skills, backend integration, and modern CSS-in-JS styling.",
        image: "/images/ogImage.png",
        imageSquare: "/images/ogImageSquare.png",
        imageSmall: "/images/ogImageSmall.png",
        imageAlt: "Overview of CADEX App - Frontend Developer Test Project",
        keywords: [
            "CADEX, Frontend Developer Test, Next.js, CSS-in-JS, web development",
        ],
    },
    "contact-us": {
        title: "Contact CADEX - We're Here to Help!",
        description:
            "Reach out to CADEX with any questions, feedback, or inquiries. We're here to support you and provide more information about our services.",
        image: "/images/ogImage.png",
        imageAlt: "Contact CADEX - Get in Touch",
        keywords: ["CADEX, contact, customer support, inquiries, feedback"],
    },
};

async function fetchPageData(page: PageKeys): Promise<PageData> {
    return pages[page] || pages.home;
}

export async function generateMetadata({
    params,
}: {
    params: { page: PageKeys };
}): Promise<Metadata> {
    const pageData = await fetchPageData(params.page);

    return {
        title: pageData.title,
        description: pageData.description,

        openGraph: {
            type: "website",
            siteName: "CADEX App",
            title: pageData.title,
            description: pageData.description,
            images: [
                {
                    url: pageData.image,
                    width: 1200,
                    height: 630,
                    alt: pageData.imageAlt,
                },
                {
                    url: pageData.imageSquare ?? pageData.image,
                    width: 1200,
                    height: 1200,
                    alt: pageData.imageAlt + " (square format)",
                },
                {
                    url: pageData.imageSmall ?? pageData.image,
                    width: 600,
                    height: 315,
                    alt: pageData.imageAlt + " (small format)",
                },
            ],
        },
        twitter: {
            title: pageData.title,
            description: pageData.description,
            images: [pageData.image],
        },
    };
}
