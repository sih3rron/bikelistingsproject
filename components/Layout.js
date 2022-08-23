import Head from 'next/head';

export default function Layout({ children }){

    return(
        <>
            <Head>
                <title>My Test Page</title>
            </Head>
            <main>{children}</main>
        </>
    );
}