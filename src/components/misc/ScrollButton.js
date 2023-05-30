import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='fixed w-[3rem] left-[96%] bottom-[0.5rem] h-[5rem] text-[3rem] z-[1] cursor-pointer text-[#286874]'>
            <FaArrowCircleUp onClick={scrollToTop}  className={`inline ${visible ? 'animate-fadeIn' : 'animate-fadeOut' }`} />
        </button>
    );
}

export default ScrollButton;