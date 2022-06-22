
export default function ContractCreate() {
    const handleSubmit = async (event) => {
        event.preventDefault()

        // Get data from the form.
        // const data = {
        //     category: event.target.category.value,
        //     budget: event.target.budget.value,
        //     client: event.target.client.value,
        //     created_at: event.target.created_at.value,
        //     link: event.target.link.value,
        //     staff: event.target.staff.value,
        //     type: event.target.type.value,
        // }

        const data = {
            "parent": {
                "database_id": "aef3f45f27e14af7ac45469f22b09bfb"
            },
            "cover": {
                "external": {
                    "url": "https://www.notion.so/images/page-cover/met_horace_pippin.jpg"
                }
            },
            "properties": {
                "title": {
                    "title": [{
                        "text": {
                            "content" : "신규 런칭 차량관리 앱 다운 및 회원가입 마케팅"
                        }
                    }]
                },
                "category": {
                    "multi_select": [{
                        "color": "gray",
                        "name": "통합마케팅"
                    }]
                },
                "budget": {
                    "rich_text": [{
                        "text": {
                            "content" : "7,000,000원"
                        }
                    }]
                },
                "client": {
                    "rich_text": [{
                        "text": {
                            "content" : "이철영"
                        }
                    }]
                },
                "created_at": {
                    "date": {
                        "start": "2022-06-22"
                    }
                },
                "link": {
                    "url": "https://madahm.com/project/detail/4787"
                },
                "staff": {
                    "rich_text": [{
                        "text": {
                            "content" : "차봉준 팀장"
                        }
                    }]
                },
                "type": {
                    "rich_text": [{
                        "text": {
                            "content" : "모집중"
                        }
                    }]
                }
            }
        }

        const JSONdata = JSON.stringify(data);

        // console.log(data);
        // console.log(JSONdata);

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Notion-Version': '2022-02-22',
                'Content-Type': 'application/json',
                Authorization: 'Bearer secret_eg3hRJs3uzwCWTcKTkMtL1NEibLh83zQjRd9yUoo1D0'
            },
            body: JSONdata
            // body: JSON.stringify({parent: `${DATABASE_ID}`, properties: JSONdata})
        };

        const res = await fetch('/api/create', options);
        
        console.log(res);

        // fetch('/api/create', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    }

    return (
        <section className="relative text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-12 text-center">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">문의하기</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="mx-auto lg:w-1/2 md:w-2/3">
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -m-2">
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="category" className="text-sm leading-7 text-gray-600">카테고리</label>
                            <input type="text" id="category" name="category" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="budget" className="text-sm leading-7 text-gray-600">가격</label>
                            <input type="text" id="budget" name="budget" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="client" className="text-sm leading-7 text-gray-600">클라이언트</label>
                            <input type="text" id="client" name="client" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="created_at" className="text-sm leading-7 text-gray-600">등록일</label>
                            <input type="text" id="created_at" name="created_at" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="link" className="text-sm leading-7 text-gray-600">링크</label>
                            <input type="text" id="link" name="link" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="staff" className="text-sm leading-7 text-gray-600">담당자</label>
                            <input type="text" id="staff" name="staff" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="type" className="text-sm leading-7 text-gray-600">구분</label>
                            <input type="text" id="type" name="type" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                            <label htmlFor="title" className="text-sm leading-7 text-gray-600">제목</label>
                            <input type="text" id="title" name="title" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button className="flex px-8 py-2 mx-auto text-white bg-indigo-500 border-0 rounded textLg focus:outline-none hover:bg-indigo-600" type="submit">등록하기</button>
                        </div>
                        <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                            <a className="text-indigo-500">help@madahm.com</a>
                            <p className="my-5 leading-normal">서울특별시 성동구 성수이로 119
                            <br/>5층 (덕산빌딩)
                            </p>
                            <span className="inline-flex">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                            </span>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    );
}