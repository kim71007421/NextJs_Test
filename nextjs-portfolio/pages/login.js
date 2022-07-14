
import Layout from "../components/layout";
import Head from "next/head";

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>NextJs 포트폴리오 - 로그인</title>
                <meta name="description" content="NextJs 포트폴리오 - 로그인" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="relative text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-center">
                        <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">로그인</h1>
                    </div>
                    <div className="mx-auto lg:w-1/2 md:w-2/3">
                        <form>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                <label htmlFor="title" className="text-sm leading-7 text-gray-600">아이디</label>
                                <input type="text" id="title" name="title" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                <label htmlFor="client" className="text-sm leading-7 text-gray-600">패스워드</label>
                                <input type="text" id="client" name="client" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button className="flex px-8 py-2 mx-auto text-white bg-indigo-500 border-0 rounded textLg focus:outline-none hover:bg-indigo-600" type="submit">등록하기</button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}