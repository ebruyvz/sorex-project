import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function Clients() {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const settings = {
        dots: true,
        customPaging: function(i) {
            return (
                <div
                    style={{
                        width: "18px",
                        height: "18px",
                        border: "2px solid #fde047",
                        backgroundColor: currentSlide === i ? "#fde047" : "inherit",
                        borderRadius: "50%",
                        display: "inline-block",
                        margin: "-50px 5px"
                    }}
                ></div>
            );
        },
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    let imgStlye = {
        backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB4CAYAAAA9kebvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQjY5QTE0NjgzQTQxMUVEQkJBMEY0QzcxODQzRkIwMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQjY5QTE0NTgzQTQxMUVEQkJBMEY0QzcxODQzRkIwMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "150px",
        backgroundPosition: "center"
    };

    let imageStlye = {
        backgroundImage: 'url("https://sorex-react.vercel.app/static/media/testi-shape-4.e9b929b7e01ced1c4c94.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: "top"
    };

    const ref1 = React.useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = React.useRef();
    const isVisible2 = useIsVisible(ref2);

    return(
        <div className="mt-[101px] bg-zinc-800 pb-[240px] md:pt-5 min-[1200px]:pt-20" style={imageStlye}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB4CAYAAADfTf2WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RUI3NjMwOTgzQTYxMUVEQjNERUExQjFEMUE1MUYzMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RUI3NjMwODgzQTYxMUVEQjNERUExQjFEMUE1MUYzMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" className="-ml-12 md:ml-5 min-[1200px]:ml-8 animate-[spinKeyframe_10s_infinite_linear]" />
            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "header-slider" : ""}`}>
                <div className="py-12 -mt-24 md:-mt-28 min-[1200px]:-mt-44">
                    <div className="rounded-full bg-white w-fit px-5 py-1 font-semibold mt-12 mx-auto">
                        <p>Client Testimonial</p>
                    </div>
                    <h2 className="text-3xl font-extrabold mt-3 text-white text-center min-[577px]:text-4xl min-[577px]:w-[570px] min-[577px]:mx-auto md:text-[43px] md:w-[700px] md:leading-[50px] min-[992px]:max-[1200px]:text-4xl min-[992px]:max-[1200px]:w-[550px] min-[992px]:max-[1200px]:leading-[48px]">Perfect Contact This Software Company Manage.</h2>
                </div>
            </div>
            <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "header-slider" : ""}`}>
                <Slider {...settings} className="flex md:mx-auto min-[1400px]:w-[95%]">
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto bg-zinc-700 text-white pb-6 md:w-[90%] md:p-8 md:flex min-[1200px]:w-[90%]" style={imgStlye}>
                            <div className="pt-5">
                                <h3 className="pl-4 font-bold text-2xl hover:text-yellow-500">Karon Rubel</h3>
                                <h4 className="pt-1 pl-4 text-[16px]">Founder</h4>
                                <p className="pt-2 pl-4 italic">We are privileged to work with hundreds future businesses, including many of the world's software, and brands.</p>
                                <div className="flex space-x-1 pt-4 pl-4">
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://www.freeiconspng.com/uploads/white-star-icon-10.png" className="w-8" alt="Transparent White Star Icon" />
                                </div>
                            </div>
                            <img src="https://sorex-react.vercel.app/static/media/testi-1.3e78acca3dc039620e5f.png" className="mt-5 pl-4 md:ml-3 md:pl-0 md:-mt-0.5" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto bg-zinc-700 text-white pb-6 md:w-[90%] md:p-8 md:flex min-[1200px]:w-[90%]" style={imgStlye}>
                            <div className="pt-5">
                                <h3 className="pl-4 font-bold text-2xl hover:text-yellow-500">Karon Rubel</h3>
                                <h4 className="pt-1 pl-4 text-[16px]">Founder</h4>
                                <p className="pt-2 pl-4 italic">We are privileged to work with hundreds future businesses, including many of the world's software, and brands.</p>
                                <div className="flex space-x-1 pt-4 pl-4">
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://www.freeiconspng.com/uploads/white-star-icon-10.png" className="w-8" alt="Transparent White Star Icon" />
                                </div>
                            </div>
                            <img src="https://sorex-react.vercel.app/static/media/testi-2.e375ad98c150025dc666.jpg" className="mt-5 pl-4 md:ml-3 md:pl-0 md:-mt-0.5" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto bg-zinc-700 text-white pb-6 md:w-[90%] md:p-8 md:flex min-[1200px]:w-[90%]" style={imgStlye}>
                            <div className="pt-5">
                                <h3 className="pl-4 font-bold text-2xl hover:text-yellow-500">Karon Rubel</h3>
                                <h4 className="pt-1 pl-4 text-[16px]">Founder</h4>
                                <p className="pt-2 pl-4 italic">We are privileged to work with hundreds future businesses, including many of the world's software, and brands.</p>
                                <div className="flex space-x-1 pt-4 pl-4">
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://www.freeiconspng.com/uploads/white-star-icon-10.png" className="w-8" alt="Transparent White Star Icon" />
                                </div>
                            </div>
                            <img src="https://sorex-react.vercel.app/static/media/testi-1.3e78acca3dc039620e5f.png" className="mt-5 pl-4 md:ml-3 md:pl-0 md:-mt-0.5" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto bg-zinc-700 text-white pb-6 md:w-[90%] md:p-8 md:flex min-[1200px]:w-[90%]" style={imgStlye}>
                            <div className="pt-5">
                                <h3 className="pl-4 font-bold text-2xl hover:text-yellow-500">Karon Rubel</h3>
                                <h4 className="pt-1 pl-4 text-[16px]">Founder</h4>
                                <p className="pt-2 pl-4 italic">We are privileged to work with hundreds future businesses, including many of the world's software, and brands.</p>
                                <div className="flex space-x-1 pt-4 pl-4">
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://www.freeiconspng.com/uploads/white-star-icon-10.png" className="w-8" alt="Transparent White Star Icon" />
                                </div>
                            </div>
                            <img src="https://sorex-react.vercel.app/static/media/testi-2.e375ad98c150025dc666.jpg" className="mt-5 pl-4 md:ml-3 md:pl-0 md:-mt-0.5" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto bg-zinc-700 text-white pb-6 md:w-[90%] md:p-8 md:flex min-[1200px]:w-[90%]" style={imgStlye}>
                            <div className="pt-5">
                                <h3 className="pl-4 font-bold text-2xl hover:text-yellow-500">Karon Rubel</h3>
                                <h4 className="pt-1 pl-4 text-[16px]">Founder</h4>
                                <p className="pt-2 pl-4 italic">We are privileged to work with hundreds future businesses, including many of the world's software, and brands.</p>
                                <div className="flex space-x-1 pt-4 pl-4">
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://clipart-library.com/images_k/star-with-transparent-background/star-with-transparent-background-3.png" className="w-8" />
                                    <img src="https://www.freeiconspng.com/uploads/white-star-icon-10.png" className="w-8" alt="Transparent White Star Icon" />
                                </div>
                            </div>
                            <img src="https://sorex-react.vercel.app/static/media/testi-2.e375ad98c150025dc666.jpg" className="mt-5 pl-4 md:ml-3 md:pl-0 md:-mt-0.5" />
                        </div>
                    </div>
                </Slider>
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABeCAYAAABfLCjeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMUYxOEMyNzgzQTYxMUVEQjJGQkJFN0I5QjQ3N0U0RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMUYxOEMyNjgzQTYxMUVEQjJGQkJFN0I5QjQ3N0U0RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMzODkwYTRlMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6A6JngAAAEhElEQVR42uydW0hUURSGl91ACivCJAKLILB7dCG6kdVD0QUJKqiIrB4ki8joYndL6PKUEVT0UkKEJJEEEdJDEhEiYVFIFJEGFSgUjFqK2OVf7H1gmEadmb1n5lzWD/+Do47Hz7XP2metdY4Z5ff/ksiKsgYJA2ONgS/CTwVm4hoJl8Gf4KP8whBhErdGwPvhQ/DosNc7BWbsyoT3wKVwdpTPdwjMgTUMLoKPweP6+bp2gdm3hsKF8Ek4N4avl2UeRYPhbfAZeFIc3ycww8Q7m006Q+cl8P0CE8qAC+Bz8AyD9wl8AloDn4XnWXivwEbmSh2Jiyy+ZyhoMJdoiMuT8N6Bicz5cDm8Kok/w/cwZ2mI63SiIYEZv6boxLIxBRB9C3MyfBreqveNqZRvYE6AT8E7KH2VMM9n8/HwCXi3LkikU56NzLGkqjhczcl0wfF0wb+9BpNbBIfhffBwFx1XJ5F3Ku3cIijRznLh8XkCZl8tAoEZh/g8WEyqUZXtgZUTciPMWFsEEpn9iFsEO/U2J5e8pw43wEy0RSCRGSa+1NusIeaR95UWmLZaBK6EmcpiwFq4AX7gM5Cs9lRFZjJaBIFLQNwi4MJsPvlfSTtnpqJF4HuYTotgPQVP1hLQVPge/CqgIK1EZjpbBL7J5hNJTYals0Xg+WzuphaBZ5d5DqlpWbe0CDwJ060tArepF+7uC+Yo+AC5t0XgyvNlJEyvtAhcDZPPg3vhI+SNFoErt0Xhm/YciUaz5OPA7NKJZiH8RtiYwXT0Ep6r95LdwsgMppPmz8Oz4efCyQymo/fwMp2Y2oVXbNm8vwLFH/gaPA1+JMxiz+b96QupMWZuybYJu/iXeTTdJVW7vCP8zGGyvsPbSd2M9Fk4msF09BieDl/V51aBSWYV8k59Lb8UfifZ3E674YXel3JvvEeyubkYIs8N8Q2dDbLM7egtqcmNg/BPWebm+g1fJjVP9EQi046aSU117IJ/CExz8bPRbunNfrXAtKNWUsOtG+BvPgIZCv8g1ZMYNTpKb+qo9U1UpgOm89fkHvwK+KPAtKM6eCZ8iVRRWmAaivtPPC2yAH4tMO2okdSQ7HENWGAaipf6BX2d/0yyuR19IDUHXxx5sBKZiW/2r5PqPz0UmHb0ldRNWFvInf0nT8F0VEXq8TqVAtOOuFhSCK+GWwSmHdWSKu9dofT3n0Jeh+lEBA/kLoab0ngcHX6A6agenkPqUWU9sszNxRDLNNR6gWlHTXrZl0T+kgIzMXFCqtAJqlZg2lGL3kIVUnL7T+1BgOmoUm/2qySb21Gbvhwt0JentvQrcp8bpLtxuWDChZMbZKf/9F+SC9qtzXzFwv85JZ9UqU9gWhAXn7kIzf9hqldgmovbI/zMOW6XNJpm8qDDdMSNPG7olVJ8/acOgRldvNS55cyt5zpZ5nbEQxE8HFFEA/efBGYM4m0Tj+/wGE+NLHM74gEzHjTjgbNWiUw7qtZRejtisy+RmaC4WMJPnuXh3WbZGtkRj5Vzea8iWoKShzzFL77xoSRaIP4TYACv9P64oU1n1gAAAABJRU5ErkJggg==" className="float-right mr-20 mt-32 animate-[headerTriangleKeyframe_5s_infinite_ease-in-out]" />
        </div>
    )
}
