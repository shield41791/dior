import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="ko">
                <Head>
                    {process.env.name == 'PRODUCTION' ? <base href={process.env.baseUri}></base> : ''}
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