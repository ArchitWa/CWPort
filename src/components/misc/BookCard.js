import React, { useState } from 'react'


export default function BookCard(props) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className=''>
            <article class="book-card border-2 border-secondary-200" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img class="card__background" src={props.cover} alt={props.title} />
                <div class="card__content | flow ">
                    <div class="card__content--container | flow">
                        <h2 class={`card__title font-semibold text-[1.7rem] text-white ${isHovered ? "animate-fadeIn" : "animate-fadeOut"}`} style={{ "--bg-color": props.color }}>{props.title}</h2>
                        <p class="card__description text-white text-[1rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 w-[20rem]">
                            {props.review}
                        </p>
                    </div>

                </div>
            </article>
        </div>
    )
}