import { ReactComponent as IslandOneT } from "../../assets/IslandOne/IslandT.svg"
import { ReactComponent as IslandOneF } from "../../assets/IslandOne/IslandF.svg"
import { ReactComponent as IslandOneS } from "../../assets/IslandOne/IslandS.svg"
import { ReactComponent as IslandOneO } from "../../assets/IslandOne/IslandO.svg"
import { ReactComponent as IslandOneTop } from "../../assets/IslandOne/IslandTop.svg"

import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function IslandOne() {
    const [isHovered, setIsHovered] = useState(false);
    const hovered = isHovered ? 'island-hover' : '';
    const navigate = useNavigate();
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        navigate("/successes")
    }

    return (
        <div className={`relative mt-[5rem] h-full ${hovered}`} >
            <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <a className='absolute text-[#F2F2F2] text-[3rem] unselectable font-bold left-[10rem] z-[6] top-[13.5rem]' style={{ fontFamily: "Rubik Puddles" }}>Successes</a>
            </div>
            <IslandOneTop className='w-[26rem] absolute top-[2rem] z-[5] left-[7rem]' />
            <IslandOneO className='w-[30rem] absolute z-[4] left-[5rem]' />
            <IslandOneT className="w-[32rem] z-[3] -top-[1rem] left-[4rem] absolute " />
            <IslandOneF className="w-[36rem] left-[2rem] z-[2] -top-[2.8rem]  absolute " />
            <IslandOneS className="w-[44rem] z-[1] -top-[7rem] -left-[2rem] absolute " />
        </div>
    )
}