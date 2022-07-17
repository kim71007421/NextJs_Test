import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/home/hero';
import Redis from 'ioredis';
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from  '../config';

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
                </div>
            </section>
        </Layout>
    );
}


export async function getServerSideProps(context) {
    let redis = new Redis({
        port: REDIS_PORT,
        host: REDIS_HOST,
        password: REDIS_PASSWORD
    });

    // redis.keys('constant:apply_state:*', (err, keys) => {
    //     console.error(err, keys);
    // });
    

    // redis.get("constant:apply_state:apply").then((result) => {
    //     console.log(result);
    // });
    
    return {
        props: {}
    }
};

