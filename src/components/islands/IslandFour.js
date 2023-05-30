import { ReactComponent as IslandFourT } from "../../assets/IslandFour/IslandT.svg"
import { ReactComponent as IslandFourF } from "../../assets/IslandFour/IslandF.svg"
import { ReactComponent as IslandFourS } from "../../assets/IslandFour/IslandS.svg"
import { ReactComponent as IslandFourO } from "../../assets/IslandFour/IslandO.svg"
import { ReactComponent as IslandFourTop } from "../../assets/IslandFour/IslandTop.svg"

import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function IslandFour() {
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
        navigate("/goals")
    }

    return (
        <div className={`absolute mt-[5rem] ${hovered}`}>
            <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <h2 className='absolute unselectable text-[#F2F2F2] text-[4rem] font-bold left-[15.5rem] rotate-[270deg] z-[6] top-[13.5rem]' style={{ fontFamily: "Rubik Puddles" }}>Goals</h2>
            </div>
            <IslandFourTop className='w-[26rem] absolute top-[2rem] z-[5] left-[7rem]' />
            <IslandFourO className='w-[30rem] absolute  z-[4] left-[5rem]' />
            <IslandFourT className="w-[32rem] left-[4rem] z-[3] -top-[1rem] absolute " />
            <IslandFourF className="w-[36rem] left-[2rem] z-[2] -top-[2.8rem]  absolute " />
            <IslandFourS className="w-[44rem] z-[1] -top-[7rem] -left-[1rem] absolute " />
        </div>
    )
}