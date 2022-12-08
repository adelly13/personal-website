import Head from 'next/head'

export default function HeadObject({children}) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>Adelina Chau</title>
            <meta property="og:url" content="adelinachau.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Adelina Chau's Personal Website"/>
        </Head>
    )
}