import type {FC} from "react";
import Head from "next/head";
import {useRouter} from "next/router";

const DEFAULT_META = {
    title: "",
    description: "",
    keywords: "",
    robots_nofollow: "",
};

interface MetaProps {
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
        robots_nofollow?: string;
    };
}

const Meta: FC<MetaProps> = ({meta}) => {
    const {title, description, keywords, robots_nofollow} = meta ?? DEFAULT_META;
    const router = useRouter();

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
            <meta httpEquiv="X-DNS-Prefetch-Control" content="on"/>
            <meta httpEquiv="cleartype" content="on"/>
            <meta property="og:title" content={title ?? DEFAULT_META.title}/>
            <meta
                property="og:description"
                content={description ?? DEFAULT_META.description}
            />
            <meta property="og:locale" content="en_US"/>
            <meta property="og:image:width" content="968"/>
            <meta property="og:image:height" content="504"/>
            <meta property="og:url" content={router.pathname}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name='robots' content={`index, ${robots_nofollow}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`}/>
            <meta name="twitter:title" content={title ?? DEFAULT_META.title}/>
            <meta
                name="twitter:description"
                content={description ?? DEFAULT_META.description}
            />
            <meta
                name="keywords"
                lang="ru"
                content={keywords ?? DEFAULT_META.keywords}
            />
            <title>{title ?? DEFAULT_META.title}</title>
            <meta
                name="description"
                content={description ?? DEFAULT_META.description}
            />
        </Head>
    );
};

export default Meta;
