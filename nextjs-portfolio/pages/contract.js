
import Layout from "../components/layout";
import Head from "next/head";
import ContractCreate from "../components/contract/contract-create";

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>NextJs 포트폴리오 - 문의하기</title>
                <meta name="description" content="NextJs 포트폴리오 - 문의하기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContractCreate />
        </Layout>
    );
}