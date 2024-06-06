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

export default function Footer() {

    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    return(
        <div className="bg-zinc-700 text-white p-4 text-[15px]">
            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "header-slider" : ""}`}>
                <div className="md:w-[90%] md:flex md:justify-between md:mx-auto">
                    <h1>Copyright Sorex 2023, All Right Reserved</h1>
                    <div className="space-x-3 mt-3 min-[577px]:space-x-8 md:mt-0 md:space-x-3 min-[992px]:space-x-8">
                        <a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out hover:text-yellow-300 duration-500">Home</a>
                        <a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out hover:text-yellow-300 duration-500">Cases</a>
                        <a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out hover:text-yellow-300 duration-500">About</a>
                        <a href="https://sorex-react.vercel.app/#0" className="transition ease-in-out hover:text-yellow-300 duration-500">Privacy & Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
