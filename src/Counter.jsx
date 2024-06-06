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

export default function Counter() {

    const [work, setWork] = React.useState(0);
    const [keyword, setKeyword] = React.useState(0);
    const [search, setSearch] = React.useState(0);
    const [ındexed, setIndexed] = React.useState(0);

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

    React.useEffect(() => {
        let interval1, interval2, interval3, interval4;

        if (isVisible1) {
            interval1 = setInterval(() => {
                setWork(prevWork => {
                    if (prevWork === 12) {
                        clearInterval(interval1);
                        return prevWork;
                    } else {
                        return prevWork + 1;
                    }
                });
            }, 150);
        }
        
        if (isVisible2) {
            interval2 = setInterval(() => {
                setKeyword(prevKeyword => {
                    if (prevKeyword === 99) {
                        clearInterval(interval2);
                        return prevKeyword;
                    } else {
                        return prevKeyword + 1;
                    }
                });
            }, 40);
        }
        
        if (isVisible3) {
            interval3 = setInterval(() => {
                setSearch(prevSearch => {
                    if (prevSearch === 87) {
                        clearInterval(interval3);
                        return prevSearch;
                    } else {
                        return prevSearch + 1;
                    }
                });
            }, 40);
        }
        
        if (isVisible4) {
            interval4 = setInterval(() => {
                setIndexed(prevIndexed => {
                    if (prevIndexed === 5) {
                        clearInterval(interval4);
                        return prevIndexed;
                    } else {
                        return prevIndexed + 1;
                    }
                });
            }, 300);
        }

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        };
    }, [isVisible1, isVisible2, isVisible3, isVisible4]);

    return(
        <div className="mt-28 min-[992px]:mt-24">
            <div className="bg-black w-[95%] mx-auto pt-12 rounded-2xl md:w-[90%]">
                <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "header-slider" : ""}`}>
                    <div className="rounded-full bg-white mx-auto w-fit px-5 py-1 font-semibold mt-12">
                        <p>We Best Counter</p>
                    </div>
                    <h2 className="text-3xl font-extrabold mt-3 text-white text-center min-[577px]:text-4xl md:max-[992px]:text-[45px] min-[1400px]:text-[45px]">Counter Industries server</h2>
                </div>
                <div className="md:grid md:grid-cols-2 md:w-[650px] mx-auto min-[990px]:w-[900px] min-[1200px]:grid-cols-4 min-[1200px]:w-[1000px] min-[1400px]:w-[1200px] min-[1400px]:mt-6">
                    <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "header-slider" : ""}`}>
                        <div className="bg-blue-400 relative mt-10 w-[430px] min-[577px]:w-[500px] mx-auto rounded-md md:w-[300px] min-[990px]:w-[400px] min-[1200px]:w-[230px] min-[1400px]:w-[280px]">
                            <p className="pt-12 font-bold text-center text-xl">Work Per Week</p>
                            <img src="https://i.pinimg.com/originals/3e/26/d6/3e26d6754031f68dd0c9037434d4e8cd.png" className="w-16 mx-auto mt-5" />
                            <p className="text-5xl font-extrabold text-center mt-2 pb-12">{work}K</p>
                        </div>
                    </div>
                    <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "header-slider" : ""}`}>
                        <div className="bg-yellow-400 relative mt-6 w-[430px] min-[577px]:w-[500px] mx-auto rounded-md md:w-[300px] md:mt-10 min-[990px]:w-[400px] min-[1200px]:w-[230px] min-[1400px]:w-[280px]">
                            <p className="pt-12 font-bold text-center text-xl">Keywords Updated</p>
                            <img src="https://cdn.icon-icons.com/icons2/1129/PNG/512/chattwooutlinedinterfacesymbol_79873.png" className="w-16 mx-auto mt-5" />
                            <p className="text-5xl font-extrabold text-center mt-2 pb-12">{keyword}+</p>
                        </div>
                    </div>
                    <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "header-slider" : ""}`}>
                        <div className="bg-green-400 relative mt-6 w-[430px] min-[577px]:w-[500px] mx-auto rounded-md md:w-[300px] md:mt-10 min-[990px]:w-[400px] min-[1200px]:w-[230px] min-[1400px]:w-[280px]">
                            <p className="pt-12 font-bold text-center text-xl">Google Search</p>
                            <img src="https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-three-gear-wheels-icon-flat-design-vector-png-image_6434503.png" className="w-24 mx-auto" />
                            <p className="text-5xl font-extrabold text-center pb-12">{search}+</p>
                        </div>
                    </div>
                    <div ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? "header-slider" : ""}`}>
                        <div className="bg-red-400 relative mt-6 w-[430px] min-[577px]:w-[500px] mx-auto rounded-md md:w-[300px] md:mt-10 min-[990px]:w-[400px] min-[1200px]:w-[230px] min-[1400px]:w-[280px]">
                            <p className="pt-12 font-bold text-center text-xl">Indexed Google</p>
                            <img src="https://cdn-icons-png.flaticon.com/512/2667/2667401.png" className="w-16 mt-5 mx-auto" />
                            <p className="text-5xl font-extrabold text-center mt-3 pb-12">{ındexed}K</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between min-[577px]:-mt-10 min-[577px]:-mt-16">
                    <img src="https://sorex-react.vercel.app/static/media/counter-shape-1.8c7bc024fe522e961851.png" className="-mt-48" />
                    <img src="https://sorex-react.vercel.app/static/media/counter-shape-1.8c7bc024fe522e961851.png" className="hidden min-[1200px]:flex -mt-48" />
                </div>
            </div>
        </div>
    )
}

