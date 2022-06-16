import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/home/hero';
import Animation from '../components/home/animation';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>NextJs 포트폴리오</title>
                <meta name="description" content="NextJs 포트폴리오" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                    <Hero/>
                    <Animation/>
                </div>
            </section>
        </Layout>
    );
}
