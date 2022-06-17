import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from  '../config';
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 px-6 py-20 mb-10">
            <Head>
                <title>NextJs 포트폴리오</title>
                <meta name="description" content="NextJs 포트폴리오" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h4 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트: <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h4>
            <div className="grid w-full grid-cols-1 gap-8 py-10 m-6 md:grid-cols-2">
                {
                    projects.results.map((project) => (
                        <ProjectItem key={project.id} data={project}/>
                    ))
                }
            </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps(context) {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "title",
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();

    // console.log(projects.results);

    const projectNames = projects.results.map((project) => (
        project.properties.title.title[0].plain_text
    ));

    // console.log(`projectIds: ${projectNames}`);

    return {
        props: {projects},
    }
}