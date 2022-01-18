import Head from "next/head";

export default function contact({ imageUrl } ) {
    return <>
        <Head>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Dior"/>
            <meta name="twitter:description"
            content="This is contact page"/>
            <meta name="twitter:image"
                content={ imageUrl }/>
        </Head>
        contact
    </>
}

contact.getInitialProps = () => {
  return { imageUrl: process.env.logoPathTest };
};
