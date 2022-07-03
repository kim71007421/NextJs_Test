
import Image from "next/image";

export default function ProjectItem({data}) {
    console.log(data);
    const title = data.properties.title.title[0].plain_text;
    const type = data.properties.type.rich_text[0].plain_text;
    const link = data.properties.link.url;
    const imgsrc = data.cover.file?.url || data.cover.external.url;
    const category = data.properties.category.multi_select;

    return (
        <div className="project-card">
            <Image className="rounded-t-xl"
                    src={imgsrc}
                    width="100%"
                    height="60%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    alt="커버이미지"/>
            <div className="flex flex-col p-4">
                <h1>{type}</h1>
                <h3 className="text-2xl font-bold">{title}</h3>
                <a href={link} target="_blank" rel="noreferrer">프로젝트 링크</a>
                <div className="flex items-start mt-2">
                    {
                        category.map((item) => (
                            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={item.id}>{item.name}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}