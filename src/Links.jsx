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

export default function Links() {

    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = React.useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = React.useRef();
    const isVisible3 = useIsVisible(ref3);

    const ref4 = React.useRef();
    const isVisible4 = useIsVisible(ref4);

    const ref5 = React.useRef();
    const isVisible5 = useIsVisible(ref5);

    return(
        <div className="mt-28">
            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "header-slider" : ""}`}>
                <img src="https://sorex-react.vercel.app/static/media/cta-icon.8052128211ec5437112c.png" className="hidden md:block md:mx-auto relative z-10" />
                <div className="-mt-3 relative bg-yellow-300 md:-mt-[70px] md:pt-20 md:w-[92%] md:mx-auto md:rounded-[90px] min-[1400px]:w-[85%]">
                    <h2 className="text-[25px] text-black font-extrabold text-center pt-12 md:pt-3 md:text-[28px]">Let’s Business Something Agency</h2>
                    <p className="text-[14px] w-[430px] mx-auto mt-5 text-center text-gray-700/90 min-[577px]:w-[450px] md:text-[16px] md:mt-4 md:w-[400px]">There are many variations of passages of agency Lorem Ipsum Fasts injecte.</p>
                    <div className="w-fit mx-auto -mt-3 pb-4">
                        <a href="https://sorex-react.vercel.app/about-us">
                            <button className="bg-white mt-12 mb-10 md:mb-16 px-6 py-3 rounded-full font-semibold relative flex items-center justify-center overflow-hidden bg-[#ffd801] hover:text-white transition-all before:absolute before:-top-12 before:right-0 before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:before:h-56 hover:before:w-[150px] min-[1200px]:hover:before:w-[201px] min-[1200px]:hover:before:-right-1 min-[1200px]:py-4 min-[1200px]:px-12">
                                <span class="relative z-10">Get Started</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="z-0 bg-zinc-800 text-white -mt-48 md:-mt-[146px]">
                <div className="w-[460px] mx-auto pt-20 min-[577px]:w-[95%] min-[577px]:grid min-[577px]:grid-cols-2 md:ml-12 md:w-[90%] md:pt-60 min-[1200px]:grid-cols-4 min-[1400px]:w-[85%] min-[1400px]:mx-auto pt-[280px]">
                    <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "header-slider" : ""}`}>
                        <div className="min-[577px]:w-[95%] md:w-[90%] min-[1200px]:w-[110%] min-[1400px]:w-[90%]">
                            <a href="https://sorex-react.vercel.app/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAAvCAYAAACG9dpZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNDU1QThGMTgzQjMxMUVEOUFBREJGNTQ4ODIwOEI2MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNDU1QThGMDgzQjMxMUVEOUFBREJGNTQ4ODIwOEI2MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" />
                            </a>
                            <p className="mt-10">Our approach to itis unique around know work an we know doesn’t work verified factors in play.</p>
                            <div className="flex mt-3">
                                <img src="https://i.pinimg.com/originals/58/a2/c0/58a2c00408f6b6bda12907d78b79050c.png" className="w-12 -ml-2" />
                                <div className="ml-2">
                                    <p>Have Any Questions?</p>
                                    <a href="tel:+230045647823" className="transition ease-in-out duration-200 hover:text-yellow-300">+230-045-647-823</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "header-slider" : ""}`}>
                        <div className="mt-20 min-[577px]:mt-5 min-[577px]:ml-12 md:ml-0 min-[1200px]:ml-20 min-[1200px]:mt-0">
                            <a href="https://sorex-react.vercel.app/service" className="font-extrabold text-2xl">Service</a>
                            <ul className="mt-10 space-y-1">
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Web Design</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Development</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">WordPress</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Online Marketing</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Content</a></li>
                            </ul>
                        </div>
                    </div>
                    <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "header-slider" : ""}`}>
                        <div className="mt-20 min-[577px]:mt-20 md:mt-20 min-[1200px]:mt-0 min-[1400px]:ml-12">
                            <a href="https://sorex-react.vercel.app/#0" className="font-extrabold text-2xl">Support Link</a>
                            <ul className="mt-10 space-y-1">
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Web Design</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Development</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">WordPress</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Online Marketing</a></li>
                                <li><a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out duration-200 hover:text-yellow-300">Content</a></li>
                            </ul>
                        </div>
                    </div>
                    <div ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? "header-slider" : ""}`}>
                        <form className="mt-20 min-[577px]:w-[95%] min-[577px]:mt-20 md:w-[95%] md:mt-20 min-[1200px]:mt-0 min-[1200px]:-ml-10 min-[1200px]:w-[110%] min-[1400px]:w-[90%] min-[1400px]:ml-12">
                            <a href="https://sorex-react.vercel.app/#0" className="font-extrabold text-2xl">Newslatter</a>
                            <p className="mt-10">Our approach to itis unique around know work an we know.</p>
                            <div className="flex">
                                <input placeholder="Your email" className="mt-5 w-full rounded-full py-2.5 px-5 text-[14px] text-black placeholder:text-black z-0" />
                            </div>
                            <div className="mr-1">
                                <button className="bg-yellow-300 text-black text-[14px] px-5 py-2 rounded-full float-right -mt-[39px] relative z-10 transition ease-in-out hover:bg-black duration-500 hover:text-white">Subscribe</button>
                            </div>
                            <div className="flex space-x-3 mt-10 pb-20">
                                <h2 className="text-[17px] font-semibold">Social Media:</h2>
                                <div className="flex space-x-3 min-[577px]:space-x-1.5">
                                    <div className="logo ring-1 ring-gray-500 w-[35px] h-[35px] rounded-full transition ease-in-out hover:bg-yellow-300 hover:ring-yellow-300 duration-200">
                                        <a href="https://sorex-react.vercel.app/#0" className="flex justify-center">
                                            <svg className="w-[20px] h-[20px] mt-[7px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-current" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="logo ring-1 ring-gray-500 w-[35px] h-[35px] rounded-full transition ease-in-out hover:bg-yellow-300 hover:ring-yellow-300 duration-200">
                                        <a href="https://sorex-react.vercel.app/#0" className="flex justify-center">
                                            <svg className="w-[16px] h-[16px] mt-[10px]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path className="fill-current" d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="logo ring-1 ring-gray-500 w-[35px] h-[35px] rounded-full transition ease-in-out hover:bg-yellow-300 hover:ring-yellow-300 duration-200">
                                        <a href="https://sorex-react.vercel.app/#0" className="flex justify-center">
                                            <svg className="w-[20px] h-[20px] mt-[7px]"  viewBox="0 -12 66 66" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Icons" stroke="none" strokeWidth={1} fill="none">
                                                    <g id="Color-" transform="translate(-391.000000, -163.000000)">
                                                        <path className="fill-current" id="GooglePlus" d="M449.735849,180.257426 L449.735849,172.980198 L444.54717,172.980198 L444.54717,180.257426 L437.075472,180.257426 L437.075472,185.455446 L444.54717,185.455446 L444.54717,192.940594 L449.735849,192.940594 L449.735849,185.455446 L457,185.455446 L457,180.257426 L449.735849,180.257426 L449.735849,180.257426 Z M411.962264,179.841584 L411.962264,188.158416 C411.962264,188.158416 420.015925,188.147604 423.29517,188.147604 C421.519396,193.539198 418.758189,196.475248 411.962264,196.475248 C405.084774,196.475248 399.716981,190.889871 399.716981,184 C399.716981,177.110129 405.084774,171.524752 411.962264,171.524752 C415.598491,171.524752 417.946887,172.805129 420.101019,174.589713 C421.825321,172.862307 421.681283,172.616129 426.068208,168.465822 C422.344189,165.070059 417.394604,163 411.962264,163 C400.385075,163 391,172.40197 391,184 C391,195.597822 400.385075,205 411.962264,205 C429.266925,205 433.496528,189.90495 432.09434,179.841584 L411.962264,179.841584 L411.962264,179.841584 Z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="logo ring-1 ring-gray-500 w-[35px] h-[35px] rounded-full transition ease-in-out hover:bg-yellow-300 hover:ring-yellow-300 duration-200">
                                        <a href="https://sorex-react.vercel.app/#0" className="flex justify-center">
                                            <svg className="w-[25px] h-[25px] mt-[4px]" viewBox="0 0 24 24" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-current" d="M12.486 4.771c-4.23 0-6.363 3.033-6.363 5.562 0 1.533.581 2.894 1.823 3.401.205.084.387.004.446-.221l.182-.717c.061-.221.037-.3-.127-.495-.359-.422-.588-.972-.588-1.747 0-2.25 1.683-4.264 4.384-4.264 2.392 0 3.706 1.463 3.706 3.412 0 2.568-1.137 4.734-2.824 4.734-.932 0-1.629-.77-1.405-1.715.268-1.13.786-2.347.786-3.16 0-.729-.392-1.336-1.2-1.336-.952 0-1.718.984-1.718 2.304 0 .841.286 1.409.286 1.409l-1.146 4.852c-.34 1.44-.051 3.206-.025 3.385.013.104.149.131.21.051.088-.115 1.223-1.517 1.607-2.915.111-.396.627-2.445.627-2.445.311.589 1.213 1.108 2.175 1.108 2.863 0 4.804-2.608 4.804-6.103-.003-2.64-2.24-5.1-5.64-5.1z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
