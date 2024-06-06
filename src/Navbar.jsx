import React from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isHomeOpen, setIsHomeOpen] = React.useState(false);
    const [isAboutOpen, setIsAboutOpen] = React.useState(false);
    const [isServOpen, setIsServOpen] = React.useState(false);
    const [isPageOpen, setIsPageOpen] = React.useState(false);
    const [isBlogOpen, setIsBlogOpen] = React.useState(false);
    const [showDiv, setShowDiv] = React.useState(false);
    const menuRef = React.useRef();

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
      
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  
    return(
        <>
            <nav className="flow-root bg-zinc-800 fixed top-0 z-50 w-[100%]">
                <a href="https://themeforest.net/item/bootsland-multipurpose-wordpress-theme/44853147?_ga=2.169911968.1625667972.1709010775-1680749170.1708498659">
                    <img src="https://d1bltcifwhkdae.cloudfront.net/uploads/envato-market-light.png" alt="envato-logo" className="h-[50px] p-[16px] float-left" />
                </a>
                <a href="https://themeforest.net/checkout/100569977/create_account?_ga=2.165866046.1625667972.1709010775-1680749170.1708498659">
                    <button className="bg-[#8ABC40] hover:bg-[#77a336] float-right text-white m-3 w-[100px] py-1 my-[12px] rounded">Buy now</button>
                </a>
            </nav>
            {showDiv && (
                <div className="slideDownTwo fixed top-[56px] z-50 bg-white w-[100%] h-[55px] py-[45px]">
                    <div className="flex flex-wrap items-center justify-between -my-6 w-[90%] mx-auto min-[1400px]:w-[85%]">
                        <div className="w-fit min-[992px]:-mt-6">
                            <a href="https://sorex-react.vercel.app/">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAvCAYAAAB3/oHUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ3RUFDNDgyMTAxMUVEQTQxREIzQzg2QTZENjA3QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ3RUFDMzgyMTAxMUVEQTQxREIzQzg2QTZENjA3QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDA4NGQ3ZjctNDE4Mi01ZjRmLTg4ZmItYjMxZDUzNjExMDhkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Zjg2ODRhYWItZWViNi0xMWU2LWI2MWQtZjFjMzg5MGE0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" alt="sorex logo" />
                            </a>
                        </div>
                        <div className="hidden min-[992px]:flex min-[992px]:mt-4">
                            <div className="flex space-x-6 -mt-10">
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    Home
                                                    <span className="absolute bottom-[31px] left-1/3 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-1/3 min-[1200px]:group-hover:w-2/5"></span>
                                                    <span className="absolute bottom-[31px] right-2/3 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-1/3"></span>
                                                </p>
                                                <img src="https://static-00.iconduck.com/assets.00/chevron-double-down-icon-512x512-j2bberkf.png" className="ms-2 w-2.5" />
                                            </a>
                                        </div>
                                        <div className="invisible w-[200px] bg-black text-white absolute z-20 group-hover:visible mt-[4px]">
                                            <a href="https://sorex-react.vercel.app/" className="text-yellow-300 pt-8 pl-8 block inline-flex w-[200px] text-sm font-semibold">
                                                Creative Agency
                                            </a>
                                            <a href="https://sorex-react.vercel.app/home-2" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Personal Portfolio
                                            </a>
                                            <a href="https://sorex-react.vercel.app/home-3" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Startup Business
                                            </a>
                                            <a href="https://sorex-react.vercel.app/home-4" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Digital Agency
                                            </a>
                                            <a href="https://sorex-react.vercel.app/home-5" className="block hover:text-yellow-300 pl-8 pb-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                IT Service Agency
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/about-us" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    About
                                                    <span className="absolute bottom-[31px] left-1/3 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[38%] min-[1200px]:group-hover:w-2/5"></span>
                                                    <span className="absolute bottom-[31px] right-2/3 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-1/3"></span>
                                                </p>
                                                <img src="https://static-00.iconduck.com/assets.00/chevron-double-down-icon-512x512-j2bberkf.png" className="ms-2 w-2.5" />
                                            </a>
                                        </div>
                                        <div className="invisible w-[200px] bg-black text-white absolute z-10 group-hover:visible mt-[4px]">
                                            <a href="https://sorex-react.vercel.app/about-me" className="block hover:text-yellow-300 pt-8 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                About Me
                                            </a>
                                            <a href="https://sorex-react.vercel.app/about-us" className="block hover:text-yellow-300 pl-8 pb-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                About Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/service-details" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    Service
                                                    <span className="absolute bottom-[31px] left-[50%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[25%] min-[1200px]:group-hover:w-[30%]"></span>
                                                    <span className="absolute bottom-[31px] right-[50%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[50%]"></span>
                                                </p>
                                                <img src="https://static-00.iconduck.com/assets.00/chevron-double-down-icon-512x512-j2bberkf.png" className="ms-2 w-2.5" />
                                            </a>
                                        </div>
                                        <div className="invisible w-[200px] bg-black text-white absolute z-20 group-hover:visible mt-[4px]">
                                            <a href="https://sorex-react.vercel.app/service-1" className="block hover:text-yellow-300 pt-8 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Service 01
                                            </a>
                                            <a href="https://sorex-react.vercel.app/service-2" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Service 02
                                            </a>
                                            <a href="https://sorex-react.vercel.app/service-3" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Service 03
                                            </a>
                                            <a href="https://sorex-react.vercel.app/service-details" className="block hover:text-yellow-300 pl-8 pb-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Service Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    Page
                                                    <span className="absolute bottom-[31px] left-[40%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[30%]"></span>
                                                    <span className="absolute bottom-[31px] right-[60%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[40%]"></span>
                                                </p>
                                                <img src="https://static-00.iconduck.com/assets.00/chevron-double-down-icon-512x512-j2bberkf.png" className="ms-2 w-2.5" />
                                            </a>
                                        </div>
                                        <div className="invisible w-[650px] -ml-64 grid grid-cols-3 bg-black text-white absolute z-20 group-hover:visible mt-[4px]">
                                            <a href="https://sorex-react.vercel.app/project" className="block hover:text-yellow-300 pt-8 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Portfolio
                                            </a>
                                            <a href="https://sorex-react.vercel.app/project-1" className="block hover:text-yellow-300 pl-8 pt-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Portfolio Filter 1
                                            </a>
                                            <a href="https://sorex-react.vercel.app/project-2" className="block hover:text-yellow-300 pl-8 pt-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Portfolio Filter 2
                                            </a>
                                            <a href="https://sorex-react.vercel.app/project-masonary" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Portfolio Masonry
                                            </a>
                                            <a href="https://sorex-react.vercel.app/project-details" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Portfolio Details
                                            </a>
                                            <a href="https://sorex-react.vercel.app/product" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Product
                                            </a>
                                            <a href="https://sorex-react.vercel.app/product-details" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Product Details
                                            </a>
                                            <a href="https://sorex-react.vercel.app/testimonial" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Testimonial
                                            </a>
                                            <a href="https://sorex-react.vercel.app/job" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Job
                                            </a>
                                            <a href="https://sorex-react.vercel.app/job-details" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Job Details
                                            </a>
                                            <a href="https://sorex-react.vercel.app/faq" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Faq
                                            </a>
                                            <a href="https://sorex-react.vercel.app/price" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Price
                                            </a>
                                            <a href="https://sorex-react.vercel.app/cart" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Cart
                                            </a>
                                            <a href="https://sorex-react.vercel.app/checkout" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Checkout
                                            </a>
                                            <a href="https://sorex-react.vercel.app/login" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Login
                                            </a>
                                            <a href="https://sorex-react.vercel.app/register" className="block hover:text-yellow-300 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Register
                                            </a>
                                            <a href="https://sorex-react.vercel.app/404" className="block hover:text-yellow-300 pl-8 pb-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                404
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/blog-details" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    Blog
                                                    <span className="absolute bottom-[31px] left-[40%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[30%]"></span>
                                                    <span className="absolute bottom-[31px] right-[60%] w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-[40%]"></span>
                                                </p>
                                                <img src="https://static-00.iconduck.com/assets.00/chevron-double-down-icon-512x512-j2bberkf.png" className="ms-2 w-2.5" />
                                            </a>
                                        </div>
                                        <div className="invisible w-[200px] bg-black text-white absolute z-10 group-hover:visible mt-[4px]">
                                            <a href="https://sorex-react.vercel.app/blog" className="block hover:text-yellow-300 pt-8 pl-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Blog Sidebar
                                            </a>
                                            <a href="https://sorex-react.vercel.app/blog-details" className="block hover:text-yellow-300 pl-8 pb-8 transition ease-in-out delay-150 duration-300 inline-flex pt-3 w-[200px] text-sm font-semibold">
                                                Blog Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="menu group relative cursor-pointer">
                                        <div className="flex items-center justify-between space-x-2 mt-[32px] pb-[36px]">
                                            <a href="https://sorex-react.vercel.app/contact" className="inline-flex items-center justify-center">
                                                <p className="font-semibold text-sm min-[1200px]:text-[17px]">
                                                    Contact
                                                    <span className="absolute bottom-[31px] left-1/2 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-1/2"></span>
                                                    <span className="absolute bottom-[31px] right-1/2 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-1/2"></span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-10 -mt-3">
                            <a href="https://sorex-react.vercel.app/contact">
                                <button className="hidden min-[1200px]:block bg-[#ffd801] py-4 px-6 text-sm rounded-full font-semibold relative flex items-center justify-center overflow-hidden bg-[#ffd801] hover:text-white transition-all before:absolute before:-top-12 before:right-0 before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-1000 before:ease-out hover:before:h-56 hover:before:w-[150px] min-[1200px]:hover:before:w-[201px] min-[1200px]:hover:before:-right-1 min-[1200px]:py-4">
                                        <span class="relative z-10">Get A Quote</span>
                                </button>
                            </a>
                            <button onClick={() => setIsOpen(true)} className='bg-black rounded-lg pt-[17px] px-2 min-[992px]:-mt-3 min-[1200px]:h-14 min-[1200px]:-mt-1'>
                                <svg viewBox="0 0 100 100" width="30" className="fill-yellow-400 pb-[7px] ml-1.5">
                                    <rect width="75" height="10"></rect>
                                    <rect y="25" width="75" height="10"></rect>
                                    <rect y="50" width="75" height="10"></rect>
                                </svg>
                            </button>
                        </div>
                        {isOpen && (<div className="backdrop fixed top-[56px] inset-0 bg-black opacity-55 z-40" onClick={() => setIsOpen(false)}></div>)}
                        <div ref={menuRef} className={`h-[100vh] transition-all duration-500 ease-in-out ${isOpen ? 'w-[300px] min-[577px]:w-[400px] md:w-[480px]' : 'w-0'} block fixed right-0 top-[58px] -mt-0.5 overflow-y-scroll bg-zinc-800 border-t border-black text-white text-sm font-extrabold z-50`}>
                            <div className="flex justify-around mt-8 w-[300px] min-[577px]:w-[400px] md:w-[480px]">
                                <a href="https://sorex-react.vercel.app/">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAAvCAYAAACG9dpZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCMEVBMzJFRDY0RjNFMzExOTY5Njk0QTJERDQ2MDE3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNDU1QThGMTgzQjMxMUVEOUFBREJGNTQ4ODIwOEI2MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNDU1QThGMDgzQjMxMUVEOUFBREJGNTQ4ODIwOEI2MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZTUwZDAxZC1jMDkwLWYzNDYtYTIwMC1lMTlmYTNjNjBkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmODY4NGFhYi1lZWI2LTExZTYtYjYxZC1mMWMz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" alt="sorex logo" />
                                </a>
                                <button onClick={() => setIsOpen(false)} className="text-zinc-600 text-4xl font-light max-[577px]:mr-6 transition ease-in-out duration-500 hover:text-white">×</button>
                            </div>
                            <div className="w-[300px] min-[577px]:w-[400px] md:w-[480px]">
                                <div className="mt-14 w-[75%] mx-auto min-[992px]:hidden">
                                    <div className="flex">
                                        <div className="w-[85%] min-[577px]:w-[90%]">
                                            <a href="https://sorex-react.vercel.app/">
                                                <p className="hover:text-yellow-300 transition ease-in-out duration-500">HOME</p>
                                            </a>
                                        </div>
                                        <button onClick={() => setIsHomeOpen(!isHomeOpen)} className="border border-zinc-600 w-8 h-8 font-light text-lg -mt-2 hover:text-yellow-300 transition ease-in-out duration-500">
                                            {isHomeOpen ? "×" : "+" }
                                        </button>
                                    </div>
                                    {isHomeOpen && (
                                        <div className="text-[13px]">
                                            <hr className='border-zinc-600 mt-3' />
                                            <a href="https://sorex-react.vercel.app/"><p className="pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500">CREATIVE AGENCY</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/home-2"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PERSONAL PORTFOLIO</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/home-3"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>STARTUP BUSINESS</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/home-4"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>DIGITAL AGENCY</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/home-5"><p className='pl-[15px] pt-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>IT SERVICE AGENCY</p></a>
                                        </div>
                                    )}
                                    <hr className='border-zinc-600 mt-2.5 mb-4' />
                                </div>
                                <div className="mt-2.5 w-[75%] mx-auto min-[992px]:hidden">
                                    <div className="flex">
                                        <div className="w-[85%] min-[577px]:w-[90%]">
                                            <a href="https://sorex-react.vercel.app/about-us">
                                                <p className="hover:text-yellow-300 transition ease-in-out duration-500">ABOUT</p>
                                            </a>
                                        </div>
                                        <button onClick={() => setIsAboutOpen(!isAboutOpen)} className="border border-zinc-600 w-8 h-8 font-light text-lg -mt-2 hover:text-yellow-300 transition ease-in-out duration-500">
                                            {isAboutOpen ? "×" : "+" }
                                        </button>
                                    </div>
                                    {isAboutOpen && (
                                        <div className="text-[13px]">
                                            <hr className='border-zinc-600 mt-3' />
                                            <a href="https://sorex-react.vercel.app/about-me"><p className="pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500">ABOUT ME</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/about-us"><p className='pl-[15px] pt-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>ABOUT US</p></a>
                                        </div>
                                    )}
                                    <hr className='border-zinc-600 mt-2.5 mb-4' />
                                </div>
                                <div className="mt-2.5 w-[75%] mx-auto min-[992px]:hidden">
                                    <div className="flex">
                                        <div className="w-[85%] min-[577px]:w-[90%]">
                                            <a href="https://sorex-react.vercel.app/service-details">
                                                <p className="hover:text-yellow-300 transition ease-in-out duration-500">SERVICE</p>
                                            </a>
                                        </div>
                                        <button onClick={() => setIsServOpen(!isServOpen)} className="border border-zinc-600 w-8 h-8 font-light text-lg -mt-2 hover:text-yellow-300 transition ease-in-out duration-500">
                                            {isServOpen ? "×" : "+" }
                                        </button>
                                    </div>
                                    {isServOpen && (
                                        <div className="text-[13px]">
                                            <hr className='border-zinc-600 mt-3' />
                                            <a href="https://sorex-react.vercel.app/service-1"><p className="pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500">SERVICE 01</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/service-2"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>SERVICE 02</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/service-3"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>SERVICE 03</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/service-details"><p className='pl-[15px] pt-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>SERVICE DETAILS</p></a>
                                        </div>
                                    )}
                                    <hr className='border-zinc-600 mt-3.5 mb-4' />
                                </div>
                                <div className="mt-2.5 w-[75%] mx-auto min-[992px]:hidden">
                                    <div className="flex">
                                        <div className="w-[85%] min-[577px]:w-[90%]">
                                            <a href="https://sorex-react.vercel.app/">
                                                <p className="hover:text-yellow-300 transition ease-in-out duration-500">PAGE</p>
                                            </a>
                                        </div>
                                        <button onClick={() => setIsPageOpen(!isPageOpen)} className="border border-zinc-600 w-8 h-8 font-light text-lg -mt-2 hover:text-yellow-300 transition ease-in-out duration-500">
                                            {isPageOpen ? "×" : "+" }
                                        </button>
                                    </div>
                                    {isPageOpen && (
                                        <div className="text-[13px]">
                                            <hr className='border-zinc-600 mt-3' />
                                            <a href="https://sorex-react.vercel.app/project"><p className="pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500">PORTFOLIO</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/project-1"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PORTFOLIO FILTER 1</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/project-2"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PORTFOLIO FILTER 2</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/project-masonary"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PORTFOLIO MASONRY</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/project-details"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PORTFOLIO DETAILS</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/product"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PRODUCT</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/product-details"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PRODUCT DETAILS</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/testimonial"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>TESTIMONIAL</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/job"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>JOB</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/job-details"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>JOB DETAILS</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/faq"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>FAQ</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/price"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>PRICE</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/cart"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>CART</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/checkout"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>CHECKOUT</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/login"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>LOGIN</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/register"><p className='pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>REGISTER</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/404"><p className='pl-[15px] pt-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>404</p></a>
                                        </div>
                                    )}
                                    <hr className='border-zinc-600 mt-3.5 mb-4' />
                                </div>
                                <div className="mt-2.5 w-[75%] mx-auto min-[992px]:hidden">
                                    <div className="flex">
                                        <div className="w-[85%] min-[577px]:w-[90%]">
                                            <a href="https://sorex-react.vercel.app/blog-details">
                                                <p className="hover:text-yellow-300 transition ease-in-out duration-500">BLOG</p>
                                            </a>
                                        </div>
                                        <button onClick={() => setIsBlogOpen(!isBlogOpen)} className="border border-zinc-600 w-8 h-8 font-light text-lg -mt-2 hover:text-yellow-300 transition ease-in-out duration-500">
                                            {isBlogOpen ? "×" : "+" }
                                        </button>
                                    </div>
                                    {isBlogOpen && (
                                        <div className="text-[13px]">
                                            <hr className='border-zinc-600 mt-3' />
                                            <a href="https://sorex-react.vercel.app/blog"><p className="pl-[15px] py-2.5 hover:text-yellow-300 transition ease-in-out duration-500">BLOG SIDEBAR</p></a>
                                            <hr className='border-zinc-600' />
                                            <a href="https://sorex-react.vercel.app/blog-details"><p className='pl-[15px] pt-2.5 hover:text-yellow-300 transition ease-in-out duration-500'>BLOG DETAILS</p></a>
                                        </div>
                                    )}
                                    <hr className='border-zinc-600 mt-3.5' />
                                    <a href="https://sorex-react.vercel.app/contact"><button className="my-2.5 w-full text-left hover:text-yellow-300 transition ease-in-out duration-500">CONTACT</button></a>
                                </div>
                                <div className="hidden min-[992px]:block mt-14 w-[75%] mx-auto">
                                    <p className="text-zinc-300 font-normal text-[18px] leading-[25px]">Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non. Euismod viverra nibh cras pulvinar suspen.</p>
                                    <hr className='border-zinc-600 mt-8 -mb-3' />
                                </div>
                                <div className="mt-2.5 w-[75%] mx-auto">
                                    <h2 className="text-[20px] my-12">Get In Touch</h2>
                                    <div className="flex gap-5 mt-5">
                                        <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                                            <img src="https://cdn-icons-png.freepik.com/512/8721/8721411.png" className="w-8 mx-auto" />
                                        </div>
                                        <div>
                                            <p className="text-zinc-400 font-normal text-[16px]">Email</p>
                                            <a href="maito:hello@yourmail.com" className="text-[15px] hover:text-yellow-300 transition duration-300">hello@yourmail.com</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                                            <img src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png" className="w-9 mx-auto" />
                                        </div>
                                        <div>
                                            <p className="text-zinc-400 font-normal text-[16px]">Phone</p>
                                            <a href="tel:(00)45611227890" className="text-[15px] hover:text-yellow-300 transition duration-300">(00) 456 1122 7890</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-5">
                                        <div className="w-20 min-[577px]:w-[53px] h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/441/088/small_2x/location-pointer-pin-black-shadow-icon-socialicon-set-png.png" className="w-4 mx-auto" />
                                        </div>
                                        <div>
                                            <p className="text-zinc-400 font-normal text-[16px]">Location</p>
                                            <a href="https://sorex-react.vercel.app/" className="text-[15px] hover:text-yellow-300 transition duration-300">
                                                Riverside 255, San Francisco, USA
                                            </a>
                                        </div>
                                    </div>
                                    <hr className='border-zinc-600 my-12' />
                                    <div className="flex items-center gap-1 mb-12 md:gap-3.5 relative z-10">
                                        <a href="https://sorex-react.vercel.app/#0">
                                            <div className="w-[49px] h-[49px] rounded-xl bg-white flex items-center justify-center hover:bg-yellow-300 transition duration-300">
                                                <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path fill="black" d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://sorex-react.vercel.app/#0">
                                            <div className="w-[49px] h-[49px] rounded-xl bg-white flex items-center justify-center hover:bg-yellow-300 transition duration-300">
                                                <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" className="w-[17px] mx-auto invert" />
                                            </div>
                                        </a>
                                        <a href="https://sorex-react.vercel.app/#0">
                                            <div className="w-[49px] h-[49px] rounded-xl bg-white flex items-center justify-center hover:bg-yellow-300 transition duration-300">
                                                <svg fill="#000000" className="w-[20px] h-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://sorex-react.vercel.app/#0">
                                            <div className="w-[49px] h-[49px] rounded-xl bg-white flex items-center justify-center hover:bg-yellow-300 transition duration-300">
                                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/ball-basketball-icon.png" className="w-[17px] rotate-[245deg] mx-auto" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-red-500 text-5xl invisible min-[1400px]:hidden">xxx</div>
                                    <img src="https://sorex-react.vercel.app/static/media/offcanvas-shape-1.54b21fdbb82cb8b1b5e4.jpg" className="hidden min-[1400px]:block fixed bottom-10 float-right scale-[1.33]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-[45px] min-[992px]:mt-[28px] shadow-[rgba(0,0,15,0.3)_0px_0px_1px_0px]" />
                </div>
            )}
        </>
    )
}
