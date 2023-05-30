import { ReactComponent as IslandTwoT } from "../../assets/IslandTwo/IslandT.svg"
import { ReactComponent as IslandTwoF } from "../../assets/IslandTwo/IslandF.svg"
import { ReactComponent as IslandTwoS } from "../../assets/IslandTwo/IslandS.svg"
import { ReactComponent as IslandTwoO } from "../../assets/IslandTwo/IslandO.svg"
import { ReactComponent as IslandTwoTop } from "../../assets/IslandTwo/IslandTop.svg"

import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function IslandTwo() {
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
        navigate("/challengesAndGrowth")
    }

    return (
        <div className={`absolute mt-[5rem] ${hovered}`}>
            <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <h2 className='absolute unselectable text-[#F2F2F2] text-[3rem] font-bold left-[13rem] z-[6] top-[10.5rem] text-center rotate-[15deg] leading-[3.2rem]' style={{ fontFamily: "Rubik Puddles" }}>Challenges <br />/</h2>
                <h2 className='absolute unselectable text-[#F2F2F2] text-[2.9rem] font-bold left-[14.5rem] z-[6] top-[16.5rem] text-center rotate-[15deg]' style={{ fontFamily: "Rubik Puddles" }}>Growth</h2>
            </div>
            <IslandTwoTop className='w-[26rem] absolute top-[2rem] z-[5] left-[8rem]' />
            <IslandTwoO className='w-[30rem] absolute z-[4] left-[6rem]' />
            <IslandTwoT className="w-[32rem] left-[5rem] z-[3] -top-[1rem]  absolute " />
            <IslandTwoF className="w-[36rem] z-[2] -top-[2.8rem] left-[3rem] absolute " />
            <IslandTwoS className="w-[44rem] z-[1] -top-[7rem] -left-[2rem] absolute " />
        </div>
    )
}