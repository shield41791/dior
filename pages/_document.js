import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@nytimes"/>
                    <meta name="twitter:creator" content="@SarahMaslinNir"/>
                    <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral"/>
                    <meta name="twitter:description"
                    content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."/>
                    <meta name="twitter:image" property="og:image" 
                    content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument