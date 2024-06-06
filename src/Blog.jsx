import React from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false);
    const [onceVisible, setOnceVisible] = React.useState(false);
  
    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !onceVisible) {
                setIntersecting(true);
                setOnceVisible(true);
            }
        });
      
        if (ref.current) {
            intersectionObserver.observe(ref.current);
        }
      
        return () => {
            if (ref.current) {
                intersectionObserver.unobserve(ref.current);
            }
        };
    }, [ref, onceVisible]);
  
    return isIntersecting;
}

export default function Blog() {
    
    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = React.useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = React.useRef();
    const isVisible3 = useIsVisible(ref3);

    const ref4 = React.useRef();
    const isVisible4 = useIsVisible(ref4);

    return(
        <div className="-mt-10 mx-auto w-[95%] md:w-[90%] mb-20">
            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "header-slider" : ""}`}>
                <div className="mt-40 rounded-full bg-[#f7f5bc] w-fit px-5 py-1 font-semibold mx-auto">
                    <div className="rounded-full bg-[#FCF4A3] w-fit mx-auto px-3">
                        <p>Largest Blog News</p>
                    </div>
                </div>
                <h2 className="text-3xl font-extrabold text-center mt-3 mb-12 min-[577px]:text-4xl min-[720px]:w-[600px] min-[720px]:mx-auto md:max-[992px]:text-[42px] md:max-[992px]:leading-[52px] min-[1200px]:text-[40px] min-[1200px]:leading-[48px]">Perfect Contact This Software Company Manage.</h2>
            </div>
            <div className="md:grid md:grid-cols-2 min-[1200px]:grid-cols-3 min-[1400px]:w-[95%] mx-auto">
                <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "header-slider" : ""}`}>
                    <div className="md:w-[90%] mx-auto">
                        <div className="h-fit overflow-hidden">
                            <a href="https://sorex-react.vercel.app/#0">
                                <img src="https://sorex-react.vercel.app/static/media/blog-1.458755d582102527f261.jpg" className="w-full hover:scale-110 hover:rotate-6 transition ease-in-out duration-500" />
                            </a>
                        </div>
                        <div className="flex space-x-5 mt-6">
                            <a href="https://sorex-react.vercel.app/#0">
                                <button className="px-6 py-1 rounded-full ring-1 font-bold text-[16px] text-blue-500/50 transition ease-in-out duration-500 hover:text-gray-500">Business</button>
                            </a>
                            <a href="https://sorex-react.vercel.app/#0" className="text-[14px] py-1 text-gray-700/90 text-base">By: Admin, Jan,6,2022</a>
                        </div>
                        <a href="https://sorex-react.vercel.app/blog-details" className="text-2xl font-extrabold w-fit hover:text-blue-500/50">
                            <p className="my-3 transition ease-in-out duration-500">Devest For Ukraine for This Blog Best Charity On</p>
                        </a>
                        <p className="text-[16px] py-1 text-gray-700/90 text-base">There are many variations of passages of agency Lorem Ipsum Fasts injecte</p>
                        <hr className="my-3" />
                        <div className="w-fit">
                            <a href="https://sorex-react.vercel.app/blog-details">
                                <button className="font-bold text-[18px] tracking-wide flex items-center justify-center gap-2 transition ease-in-out duration-500 hover:text-gray-500">
                                    See More
                                    <div className="w-4 h-4 rounded-full bg-blue-500/50 flex items-center justify-center hover:animate-[arrowRightKeyframe_300ms_ease-in]">
                                        <div className="w-24 -ml-20">
                                            <svg className="float-right w-4 m-[2px] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M13 5l5 5-5 5M5"></path> </svg>
                                        </div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "header-slider" : ""}`}>
                    <div className="mt-16 md:w-[90%] md:mt-0 min-[1200px]:mx-auto">
                        <div className="h-fit overflow-hidden">
                            <a href="https://sorex-react.vercel.app/#0">
                                <img src="https://sorex-react.vercel.app/static/media/blog-2.698efcd546f7becf818e.jpg" className="w-full hover:scale-110 hover:rotate-6 transition ease-in-out duration-500" />
                            </a>
                        </div>
                        <div className="flex space-x-5 mt-6">
                            <a href="https://sorex-react.vercel.app/#0">
                                <button className="px-6 py-1 rounded-full ring-1 ring-teal-500/50 font-bold text-[16px] text-teal-500/50 transition ease-in-out duration-500 hover:text-gray-500">Support</button>
                            </a>
                            <a href="https://sorex-react.vercel.app/#0" className="text-[16px] py-1 text-gray-700/90 text-base">By: Admin, Jan,6,2022</a>
                        </div>
                        <a href="https://sorex-react.vercel.app/blog-details" className="text-2xl font-extrabold hover:text-teal-500/50">
                            <p className="my-3 transition ease-in-out duration-500">Devest For Ukraine for This Blog Best Charity On</p>
                        </a>
                        <p className="text-[16px] py-1 text-gray-700/90 text-base">There are many variations of passages of agency Lorem Ipsum Fasts injecte</p>
                        <hr className="my-3" />
                        <div className="w-fit">
                            <a href="https://sorex-react.vercel.app/blog-details">
                                <button className="font-bold text-[18px] tracking-wide flex items-center justify-center gap-2 transition ease-in-out duration-500 hover:text-gray-500">
                                    See More
                                    <div className="w-4 h-4 rounded-full bg-teal-500/50 flex items-center justify-center hover:animate-[arrowRightKeyframe_300ms_ease-in]">
                                        <div className="w-24 -ml-20">
                                            <svg className="float-right w-4 m-[2px] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M13 5l5 5-5 5M5"></path> </svg>
                                        </div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "header-slider" : ""}`}>
                    <div className="mt-16 md:w-[90%] md:mx-auto min-[1200px]:mt-0 min-[1200px]:-mx-auto">
                        <div className="h-fit overflow-hidden">
                            <a href="https://sorex-react.vercel.app/#0">
                                <img src="https://sorex-react.vercel.app/static/media/blog-3.ea08c1d7f062f9015053.jpg" className="w-full hover:scale-110 hover:rotate-6 transition ease-in-out duration-500" />
                            </a>
                        </div>
                        <div className="flex space-x-5 mt-6">
                            <a href="https://sorex-react.vercel.app/#0">
                                <button className="px-6 py-1 rounded-full ring-1 ring-orange-500/50 font-bold text-[16px] text-orange-500/50 transition ease-in-out duration-500 hover:text-gray-500">Business</button>
                            </a>
                            <a href="https://sorex-react.vercel.app/#0" className="text-[16px] py-1 text-gray-700/90 text-base">By: Admin, Jan,6,2022</a>
                        </div>
                        <a href="https://sorex-react.vercel.app/blog-details" className="text-2xl font-extrabold hover:text-orange-500/50">
                            <p className="my-3 transition ease-in-out duration-500">Devest For Ukraine for This Blog Best Charity On</p>
                        </a>
                        <p className="text-[16px] py-1 text-gray-700/90 text-base">There are many variations of passages of agency Lorem Ipsum Fasts injecte</p>
                        <hr className="my-3" />
                        <div className="w-fit">
                            <a href="https://sorex-react.vercel.app/blog-details">
                                <button className="font-bold text-[18px] tracking-wide flex items-center justify-center gap-2 transition ease-in-out duration-500 hover:text-gray-500">
                                    See More
                                    <div className="w-4 h-4 rounded-full bg-orange-500/50 flex items-center justify-center hover:animate-[arrowRightKeyframe_300ms_ease-in]">
                                        <div className="w-24 -ml-20">
                                            <svg className="float-right w-4 m-[2px] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M13 5l5 5-5 5M5"></path> </svg>
                                        </div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
