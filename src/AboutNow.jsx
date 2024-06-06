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

export default function AboutNow() {
    
    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = React.useRef();
    const isVisible2 = useIsVisible(ref2);

    return(
        <>
            <div className="mt-24 w-[460px] mx-auto min-[577px]:w-[500px] md:w-[700px] md:mx-auto min-[992px]:w-[990px] min-[992px]:flex min-[1170px]:max-[1200px]:ml-24 min-[1200px]:w-[1195px] min-[1400px]:w-[1395px]">
                <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "about-image" : ""}`}>
                    <img src="https://sorex-react.vercel.app/static/media/about-1.f29b870b8e86a76db83f.png" className="md:mx-auto min-[992px]:w-[450px] min-[992px]:h-fit min-[992px]:ml-6 min-[992px]:mr-8 min-[992px]:max-[1200px]:mt-6 min-[1200px]:w-[550px] min-[1400px]:w-[650px]" />
                </div>
                <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "header-image" : ""}`}>
                    <div className="min-[992px]:w-[550px] min-[992px]:-mr-32 min-[1200px]:mt-5 min-[1200px]:w-[600px] min-[1400px]:ml-[200px] min-[1400px]:mt-16">
                        <div className="rounded-full bg-[#f7f5bc] w-fit px-5 py-1 font-semibold mt-12 min-[992px]:mt-0 min-[1400px]:-ml-32">
                            <p>Our About Now</p>
                        </div>
                        <h1 className="text-3xl font-extrabold mt-3 min-[577px]:text-4xl md:text-[40px] md:leading-[50px] min-[992px]:w-[400px] min-[1200px]:w-[550px] min-[1400px]:-ml-32">Save This Managing About Media For Business</h1>
                        <p className="my-5 text-gray-600 min-[577px]:text-[15px] min-[992px]:w-[450px] min-[1200px]:w-[500px] min-[1400px]:-ml-32">Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.</p>
                        <ul className="space-y-3 text-gray-600 min-[577px]:flex min-[577px]:flex-wrap min-[577px]:flex-cols-2 min-[577px]:gap-y-3 min-[577px]:gap-x-24 min-[577px]:space-y-0 md:gap-x-44 min-[992px]:gap-x-20 min-[1200px]:gap-x-24 min-[1400px]:-ml-32 min-[1400px]:gap-x-28">
                            <li className="flex items-center hover:underline">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                Business sagittis leo.
                            </li>
                            <li className="flex items-center hover:underline">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                We give management
                            </li>
                            <li className="flex items-center hover:underline">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                Media in this solution.
                            </li>
                            <li className="flex items-center hover:underline min-[577px]:-ml-1.5">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                Unlimited Bandwidth
                            </li>
                            <li className="flex items-center hover:underline">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                Business management
                            </li>
                            <li className="flex items-center hover:underline min-[577px]:-ml-3">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                                    <rect x="0" y="0" width="15" height="15" fill="none" stroke="#FCD12A" stroke-width="1"/>
                                    <text x="1" y="13" font-size="15" stroke="#FCD12A" fill="#FCD12A" stroke-width="0.1">&#10003;</text>
                                </svg>
                                Agency in this solution.
                            </li>
                        </ul>
                        <hr className="my-8 min-[992px]:w-[460px] min-[1400px]:-ml-32 min-[1200px]:w-[520px] min-[1400px]:w-[550px]" />
                        <div className="min-[577px]:flex min-[577px]:space-x-16 md:space-x-20 min-[992px]:space-x-10 min-[1400px]:-ml-32">
                            <div className="flex space-x-5 mb-8 items-center min-[577px]:mb-0 md:pr-32 md:border-t-0 md:border-l-0 md:border-b-0 md:border-2 md:-mt-8 md:pt-8 min-[992px]:pr-10 min-[1200px]:pr-14 min-[1400px]:pr-[70px]">
                                <div className="w-14 h-14 rounded-full bg-yellow-300 flex justify-center items-center">
                                    <img src="https://www.nicepng.com/png/full/379-3794777_white-phone-icon-white-phone-call-icon.png" className="w-8" />
                                </div>
                                <div>
                                    <a href="tel:+955426535255" className="font-bold transition ease-in-out duration-300 hover:text-green-500">
                                        <p>+955426535255</p>
                                    </a>
                                    <a href="tel:+210154444564" className="font-bold transition ease-in-out duration-300 hover:text-green-500">+210154444564</a>
                                </div>
                            </div>
                            <div className="flex space-x-5 items-center">
                                <a href="https://sorex-react.vercel.app/#0">
                                    <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center min-[992px]:-ml-5">
                                        <div className="w-10 h-10 rounded-full bg-yellow-300 flex justify-center items-center">
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/018/971/605/small/3d-video-play-button-isolated-on-transparent-background-file-format-png.png" />
                                        </div>
                                    </div>
                                </a>
                                <a href="https://sorex-react.vercel.app/#0" className="font-bold hover:text-green-500">Watch Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABeCAYAAABfLCjeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMUYxOEMyNzgzQTYxMUVEQjJGQkJFN0I5QjQ3N0U0RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMUYxOEMyNjgzQTYxMUVEQjJGQkJFN0I5QjQ3N0U0RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMzODkwYTRlMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6A6JngAAAEhElEQVR42uydW0hUURSGl91ACivCJAKLILB7dCG6kdVD0QUJKqiIrB4ki8joYndL6PKUEVT0UkKEJJEEEdJDEhEiYVFIFJEGFSgUjFqK2OVf7H1gmEadmb1n5lzWD/+Do47Hz7XP2metdY4Z5ff/ksiKsgYJA2ONgS/CTwVm4hoJl8Gf4KP8whBhErdGwPvhQ/DosNc7BWbsyoT3wKVwdpTPdwjMgTUMLoKPweP6+bp2gdm3hsKF8Ek4N4avl2UeRYPhbfAZeFIc3ycww8Q7m006Q+cl8P0CE8qAC+Bz8AyD9wl8AloDn4XnWXivwEbmSh2Jiyy+ZyhoMJdoiMuT8N6Bicz5cDm8Kok/w/cwZ2mI63SiIYEZv6boxLIxBRB9C3MyfBreqveNqZRvYE6AT8E7KH2VMM9n8/HwCXi3LkikU56NzLGkqjhczcl0wfF0wb+9BpNbBIfhffBwFx1XJ5F3Ku3cIijRznLh8XkCZl8tAoEZh/g8WEyqUZXtgZUTciPMWFsEEpn9iFsEO/U2J5e8pw43wEy0RSCRGSa+1NusIeaR95UWmLZaBK6EmcpiwFq4AX7gM5Cs9lRFZjJaBIFLQNwi4MJsPvlfSTtnpqJF4HuYTotgPQVP1hLQVPge/CqgIK1EZjpbBL7J5hNJTYals0Xg+WzuphaBZ5d5DqlpWbe0CDwJ060tArepF+7uC+Yo+AC5t0XgyvNlJEyvtAhcDZPPg3vhI+SNFoErt0Xhm/YciUaz5OPA7NKJZiH8RtiYwXT0Ep6r95LdwsgMppPmz8Oz4efCyQymo/fwMp2Y2oVXbNm8vwLFH/gaPA1+JMxiz+b96QupMWZuybYJu/iXeTTdJVW7vCP8zGGyvsPbSd2M9Fk4msF09BieDl/V51aBSWYV8k59Lb8UfifZ3E674YXel3JvvEeyubkYIs8N8Q2dDbLM7egtqcmNg/BPWebm+g1fJjVP9EQi046aSU117IJ/CExz8bPRbunNfrXAtKNWUsOtG+BvPgIZCv8g1ZMYNTpKb+qo9U1UpgOm89fkHvwK+KPAtKM6eCZ8iVRRWmAaivtPPC2yAH4tMO2okdSQ7HENWGAaipf6BX2d/0yyuR19IDUHXxx5sBKZiW/2r5PqPz0UmHb0ldRNWFvInf0nT8F0VEXq8TqVAtOOuFhSCK+GWwSmHdWSKu9dofT3n0Jeh+lEBA/kLoab0ngcHX6A6agenkPqUWU9sszNxRDLNNR6gWlHTXrZl0T+kgIzMXFCqtAJqlZg2lGL3kIVUnL7T+1BgOmoUm/2qySb21Gbvhwt0JentvQrcp8bpLtxuWDChZMbZKf/9F+SC9qtzXzFwv85JZ9UqU9gWhAXn7kIzf9hqldgmovbI/zMOW6XNJpm8qDDdMSNPG7olVJ8/acOgRldvNS55cyt5zpZ5nbEQxE8HFFEA/efBGYM4m0Tj+/wGE+NLHM74gEzHjTjgbNWiUw7qtZRejtisy+RmaC4WMJPnuXh3WbZGtkRj5Vzea8iWoKShzzFL77xoSRaIP4TYACv9P64oU1n1gAAAABJRU5ErkJggg==" className="hidden min-[1200px]:block float-right mr-20 -mt-8 min-[1400px]:-mt-28 min-[1400px]:mr-32 animate-[headerTriangleKeyframe_5s_infinite_ease-in-out]" />
        </>
    )
}
