export default function Hero() {
    return (
        <>
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">NextJs 포트폴리오 만들어보기!
            <br className="hidden lg:inline-block"/>완성해보자
        </h1>
        <p className="mb-8 leading-relaxed">
        디자인 시스템의 인기는 폭발적으로 증가하고 있습니다. Airbnb와 같은 거대 기술 기업부터 신생 스타트업까지, 회사들은 시간과 비용을 절약하기 위해 UI 패턴을 재사용하는 방식을 도입하고 있습니다. 하지만 BBC, Airbnb, Microsoft에서 만든 디자인 시스템과 대부분의 개발자가 만든 디자인 시스템 사이에는 큰 차이가 존재합니다.
        </p>
        <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">프로젝트 보러가기</button>
        </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        </div>
        </>
    );
}