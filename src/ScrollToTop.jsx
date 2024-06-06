import React from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if ((document.documentElement.scrollTop / scrollTotal) > 0.02) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <button className={showButton ? "scrollToTopBtn showBtn" : "scrollToTopBtn"} onClick={scrollToTop} >
        <div className="flex items-center justify-center rotate-180">
            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
            </svg>
            <svg className="w-2.5 h-2.5 -ms-[10px] mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 1 4 4 4-4"/>
            </svg>
        </div>
    </button>
  );
};
