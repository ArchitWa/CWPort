import { ReactComponent as IslandThreeT } from "../../assets/IslandThree/IslandT.svg"
import { ReactComponent as IslandThreeF } from "../../assets/IslandThree/IslandF.svg"
import { ReactComponent as IslandThreeS } from "../../assets/IslandThree/IslandS.svg"
import { ReactComponent as IslandThreeO } from "../../assets/IslandThree/IslandO.svg"
import { ReactComponent as IslandThreeTop } from "../../assets/IslandThree/IslandTop.svg"

import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function IslandThree() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const hovered = isHovered ? 'island-hover' : '';

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => { 
        navigate("/insights")   
    }


    return (
        <div className={`absolute mt-[5rem] ${hovered}`}>
            <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <h2 className='absolute unselectable text-[#F2F2F2] text-[3rem] font-bold left-[15.5rem] rotate-[230deg] z-[6] top-[15.5rem] text-center' style={{ fontFamily: "Rubik Puddles" }}>Insights</h2>
            </div>
            <IslandThreeTop className='w-[26rem] absolute top-[2rem] z-[5] left-[7rem]' />
            <IslandThreeO className='w-[30rem] absolute z-[4] left-[5rem]' />
            <IslandThreeT className="w-[32rem] z-[3] -top-[1rem] left-[4rem] absolute " />
            <IslandThreeF className="w-[36rem] z-[2] -top-[2.8rem] left-[2rem] absolute " />
            <IslandThreeS className="w-[44rem] z-[1] -top-[7rem] -left-[2rem] absolute " />
        </div>
    )
}