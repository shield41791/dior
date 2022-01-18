import Head from "next/head";

export default function contact(params) {
    return <>
        <Head>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@nytimes"/>
            <meta name="twitter:creator" content="@SarahMaslinNir"/>
            <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral"/>
            <meta name="twitter:description"
            content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."/>
            <meta name="twitter:image"
                content={ process.env.logoPathTest }/>
        </Head>
        contact
    </>
}
