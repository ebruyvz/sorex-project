import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurProjects() {
    
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const settings = {
        dots: true,
        customPaging: function(i) {
            return (
                <div
                    style={{
                        width: "18px",
                        height: "18px",
                        border: "1px solid #fde047",
                        backgroundColor: currentSlide === i ? "#fde047" : "white",
                        borderRadius: "50%",
                        display: "inline-block",
                        margin: "-50px 5px"
                    }}
                ></div>
            );
        },
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };

    const sliderRef = React.createRef();

    return(
        <div className="mt-[90px] w-[95%] mx-auto">
            <div className="mx-auto min-[577px]:w-[550px] md:w-[700px] min-[992px]:w-[980px] min-[1200px]:w-[1150px] min-[1400px]:w-[1300px]">
                <div className="rounded-full bg-[#f7f5bc] w-fit px-5 py-1 font-semibold mt-12 min-[577px]:ml-5 min-[1400px]:ml-20">
                    <p>Our Projects Work</p>
                </div>
                <h1 className="text-3xl font-extrabold mt-3 min-[577px]:text-4xl min-[577px]:ml-5 md:w-[400px] md:text-[42px] md:leading-[50px] min-[992px]:text-4xl min-[992px]:w-[500px] min-[992px]:leading-[45px] min-[1200px]:text-[40px] min-[1200px]:leading-[50px] min-[1400px]:ml-20">We Are the Best Software Company Manage.</h1>
            </div>
            <div className="flex float-right -mt-8 min-[577px]:-mt-3 max-[577px]:mb-12 md:-mt-6">
                <button className="bg-white w-16 h-16 rounded-full p-2" onClick={prev}>
                    <div className="w-12 h-12 rounded-full bg-yellow-300/95 mr-5 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300">
                        <svg className="scale-x-[-1] w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M13 5l7 7-7 7M5 12h14"></path> </svg>
                    </div>
                </button>
                <button className="bg-white w-16 h-16 rounded-full p-2 ml-2" onClick={next}>
                    <div className="w-12 h-12 rounded-full bg-yellow-300/95 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300">
                        <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"> <path d="M13 5l7 7-7 7M5 12h14"></path> </svg>
                    </div>
                </button>
            </div>
            <Slider ref={sliderRef} {...settings} className="mt-20 min-[577px]:mt-24 md:mt-20">
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-1.5e493638b5779ac737c9.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-2.4d3d57bc20252c1745b2.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-3.2d37f52953905ca600d8.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-1.5e493638b5779ac737c9.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-3.2d37f52953905ca600d8.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-2.4d3d57bc20252c1745b2.jpg" />
                    </a>
                </div>
                <div className="px-3">
                    <a href="https://sorex-react.vercel.app/project-details">
                        <img src="https://sorex-react.vercel.app/static/media/pro-3.2d37f52953905ca600d8.jpg" className="w-[95%] mx-auto" />
                    </a>
                </div>
            </Slider>
        </div>
    )
}
