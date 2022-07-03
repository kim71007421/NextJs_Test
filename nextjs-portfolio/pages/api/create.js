import axios from "axios";
import { TOKEN, DATABASE_ID } from  '../../config';

export default function handler(req, res) {
    const title = req.body.title;
    const category = req.body.category;
    const budget = req.body.budget;
    const created_at = req.body.created_at;
    const cover = req.body.cover;
    const client = req.body.client;
    const link = req.body.link;
    const staff = req.body.staff;
    const type = req.body.type;

    const data = {
        parent: {
            database_id: `${DATABASE_ID}`
        },
        cover: {
            external: {
                url: `${cover}`
            }
        },
        properties: {
            title: {
                title: [{
                    text: {
                        content : `${title}`
                    }
                }]
            },
            category: {
                multi_select: [{
                    name: `${category}`
                }]
            },
            budget: {
                rich_text: [{
                    text: {
                        content : `${budget}`
                    }
                }]
            },
            client: {
                rich_text: [{
                    text: {
                        content : `${client}`
                    }
                }]
            },
            created_at: {
                date: {
                    start: `${created_at}`
                }
            },
            link: {
                url: `${link}`
            },
            staff: {
                rich_text: [{
                    text: {
                        content : `${staff}`
                    }
                }]
            },
            type: {
                rich_text: [{
                    text: {
                        content : `${type}`
                    }
                }]
            }
        }
    }

    const JsonData = JSON.stringify(data);

    const options = {
        method: 'POST',
        url: ' https://api.notion.com/v1/pages',
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        data: JsonData
    };

    axios.request(options).then(function (response) {
        // console.log(response.data);
        // console.log(response.status);

        res.status(response.status).json({ status: 'Success' });
    }).catch(function (error) {
        console.error(error);
        res.status(400).json({ status: 'Fail' });
    });
}

/*
export async function getStaticProps(context) {
    // console.log(context);
}
*/