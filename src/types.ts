export interface SEOMetadata {
    title: string;
    description: string;
    image?: string;
    canonicalURL?: string;
}

export interface NavigationLink {
    text: string;
    href: string;
    active?: boolean;
}

export interface SiteConfig {
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    themeColor: string;
    author: string;
} 