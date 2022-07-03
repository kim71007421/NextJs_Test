import axios from "axios";
import Image from "next/image";

export default function ContractCreate() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log(event.target.title.value)

        const data = {
            title: event.target.title.value,
            category: event.target.category.value,
            budget: event.target.budget.value,
            created_at: event.target.created_at.value,
            cover: event.target.cover.value,
            client: event.target.client.value,
            link: event.target.link.value,
            staff: event.target.staff.value,
            type: event.target.type.value,
        };
        console.log(data);
        /* const data = {
            title: '신규 런칭 차량관리 앱 다운 및 회원가입 마케팅',
            category: '통합마케팅',
            budget: '7,000,000원',
            created_at: '2022-07-03',
            cover: 'https://www.notion.so/images/page-cover/met_horace_pippin.jpg',
            client: '이철영',
            link: 'https://madahm.com/project/detail/4787',
            staff: '차봉준 팀장',
            type: '모집중'
        }; */

        const JsonData = JSON.stringify(data);

        axios.post('/api/create', JsonData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            // console.log(response.status);
        })
        .catch(function (error) {
            // console.log(error.data);
        });
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
                            <label htmlFor="title" className="text-sm leading-7 text-gray-600">제목</label>
                            <input type="text" id="title" name="title" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
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
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">카테고리</label>
                                <select id="category" name="category" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="통합마케팅">통합마케팅</option>
                                    <option value="온라인">온라인</option>
                                    <option value="오프라인">오프라인</option>
                                    <option value="CPA">CPA</option>
                                    <option value="영상제작">영상제작</option>
                                    <option value="웹앱개발">웹앱개발</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">가격</label>
                                <select id="budget" name="budget" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="1,100,000원">1,100,000원</option>
                                    <option value="2,140,000원">2,140,000원</option>
                                    <option value="5,500,000원">5,500,000원</option>
                                    <option value="10,050,000원">10,050,000원</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="created_at" className="block text-sm font-medium text-gray-700">등록일</label>
                                <select id="created_at" name="created_at" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="2022-07-01">2022-07-01</option>
                                    <option value="2022-07-02">2022-07-02</option>
                                    <option value="2022-07-03">2022-07-03</option>
                                    <option value="2022-07-04">2022-07-04</option>
                                    <option value="2022-07-05">2022-07-05</option>
                                    <option value="2022-07-06">2022-07-06</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="link" className="block text-sm font-medium text-gray-700">프로젝트링크</label>
                                <select id="link" name="link" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="https://madahm.com/project/detail/4813">종합 쇼핑몰 온라인 통합 마케팅</option>
                                    <option value="https://madahm.com/project/detail/4608">P2E 게임 블록체인 글로벌 온오프라인 캠페인</option>
                                    <option value="https://madahm.com/project/detail/4793">반려동물 토탈 케어 플랫폼 온오프라인 통합 마케팅</option>
                                    <option value="https://madahm.com/project/detail/4835">반려동물용품 구글 퍼포먼스 마케팅</option>
                                    <option value="https://madahm.com/project/detail/4832">밀키트 스토어팜 검색광고 대행</option>
                                    <option value="https://madahm.com/project/detail/4676">2022 한강나이트워크 야외 부스행사 대행</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="staff" className="block text-sm font-medium text-gray-700">담당자</label>
                                <select id="staff" name="staff" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="유재형 팀장">유재형 팀장</option>
                                    <option value="이다훈 대리">이다훈 대리</option>
                                    <option value="이현규 사원">이현규 사원</option>
                                    <option value="차봉중 팀장">차봉중 팀장</option>
                                    <option value="안현진 사원">안현진 사원</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">구분</label>
                                <select id="type" name="type" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="검토중">검토중</option>
                                    <option value="검토완료">검토완료</option>
                                    <option value="모집중">모집중</option>
                                    <option value="선정중">선정중</option>
                                    <option value="계약">계약</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="cover" className="block text-sm font-medium text-gray-700">커버이미지</label>
                                <select id="cover" name="cover" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="https://www.notion.so/images/page-cover/met_horace_pippin.jpg">이미지1</option>
                                    <option value="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5">이미지2</option>
                                    <option value="https://images.unsplash.com/photo-1583947215259-38e31be8751f">이미지3</option>
                                    <option value="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb">이미지4</option>
                                </select>
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