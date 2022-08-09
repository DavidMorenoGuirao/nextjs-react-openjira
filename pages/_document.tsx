//'nextdc'.. este nos aporta mas control sobre le documento y le indicamos a Next como quiero que lo construya
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    {/* //Para el iconito de las pestaña */}
                    <link rel='shorcut icon' href='/favicon.ico' />
                    
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