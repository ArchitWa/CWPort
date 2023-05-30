import IslandOne from '../islands/IslandOne'
import IslandTwo from '../islands/IslandTwo'
import IslandThree from '../islands/IslandThree'
import IslandFour from '../islands/IslandFour'
import MiniIsland from '../islands/MiniIsland'
import Cruiser from '../../assets/Ships/ship1.jpg'
import FishingBoat from '../../assets/Ships/ship2.jpg'
import MiniBoat from '../../assets/Ships/ship3.jpg'

import { useState, useEffect } from 'react';

export default function Main() {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2400);
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
        
    }, []);

    const miniIslandPath = "M18.8,-26.7C22.6,-19.3,22.7,-11.6,22.8,-4.9C22.9,1.8,23,7.6,21,12.9C18.9,18.3,14.5,23.2,8.2,27.6C1.9,32.1,-6.4,36.1,-15,35.5C-23.6,34.8,-32.5,29.3,-36.4,21.5C-40.3,13.7,-39.2,3.5,-36.7,-5.8C-34.3,-15.1,-30.5,-23.5,-24.1,-30.5C-17.8,-37.5,-8.9,-43.2,-0.7,-42.3C7.5,-41.5,15,-34.2,18.8,-26.7Z"

    return (

        loading ? (
            <div className="text-5xl text-black mt-[20rem] justify-center " >
                <div className="flex justify-center h-[10rem] place-items-center animate-delay-[2050ms] animate-zoomOut animate-duration-[500ms]">
                    <div className="w-[100rem] h-[10rem] ">
                        <div id="mask" className='unselectable h-[10rem] text-8xl'>Creative Writing Portfolio</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="text-5xl text-black sea animate-zoomIn animate-duration-[800ms]">
                <div className={`absolute -mt-[2rem] scale-[90%] `} >
                    <IslandOne />
                </div >

                <div className='ml-[42rem] scale-[90%] -mt-[5rem] absolute'>
                    <IslandTwo />
                </div>

                <div className='mt-[17rem] ml-[55rem] scale-[80%]  rotate-90 absolute'>
                    <IslandThree />
                </div>

                <div className='mt-[16rem] ml-[97rem] scale-[95%] rotate-90 absolute'>
                    <IslandFour />
                </div>

                <div className='mt-[35rem] absolute scale-[25%] rotate-90 ml-[20rem]'>
                    <MiniIsland path={miniIslandPath} />
                </div>

                <svg className='ml-[34rem] w-[15rem] mt-[10rem]' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path fill="#00B7D5" d="M21.6,2.4C21.6,13.4,10.8,26.7,-1.9,26.7C-14.6,26.7,-29.1,13.4,-29.1,2.4C-29.1,-8.5,-14.6,-17.1,-1.9,-17.1C10.8,-17.1,21.6,-8.5,21.6,2.4Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="#00B7D5"></path>
                </svg>

                <svg className='absolute w-[10rem] ml-[84rem] mt-[10rem]' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path fill="rgba(0, 183, 213, 1)" d="M26.6,-32.4C33.9,-25.5,38.9,-16.6,40.7,-7.1C42.5,2.5,41.2,12.8,35.9,19.6C30.6,26.5,21.4,30,13.2,30.5C5,31,-2.2,28.4,-10.9,26.7C-19.5,24.9,-29.7,23.9,-33.2,18.7C-36.7,13.5,-33.7,4.1,-29.7,-3C-25.8,-10,-21,-14.6,-15.9,-21.8C-10.8,-29.1,-5.4,-38.9,2.1,-41.5C9.6,-44,19.3,-39.2,26.6,-32.4Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="rgba(0, 183, 213, 1)"></path>
                </svg>

                <div className='cruiser absolute mt-[2rem] ml-[40rem] w-[3rem] h-[5rem] unselectable '>
                    <img className='rotate-45' src={Cruiser} alt='Cruiser' />
                </div>

                <div className='fishing-boat absolute w-[2rem] mt-[30rem] ml-[25rem] unselectable'>
                    <img className='-rotate-[60deg]' src={FishingBoat} alt='Fishing Boat' />
                </div>

                <div className='absolute w-[3rem] mt-[37rem] ml-[50rem] unselectable'>
                    <img className='rotate-[210deg]' src={MiniBoat} alt='Mini Boat' />
                </div>
            </div >
        )

    )
}