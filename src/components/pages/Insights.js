import ScrollButton from '../misc/ScrollButton';
import InsightCard from '../misc/InsightCard';

import { useNavigate } from 'react-router-dom';
import { FaBrain, FaBook, FaCommentDots, FaPenFancy, FaUserFriends } from 'react-icons/fa';

export default function Successes() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <div className='flex justify-end cursor-pointer mt-[0.6rem] -mr-[9rem] scale-[80%]' onClick={handleClick}>
                <a class="relative inline-flex items-center justify-center  px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#E8A360] rounded-3xl shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-[#E8A360] duration-300 -translate-x-full bg-[#FFE19D] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex  items-center justify-center w-full h-full text-[#E8A360] transition-all duration-300 transform group-hover:translate-x-full ease text-2xl font-bold " style={{ fontFamily: "Montserrat" }}>Back</span>
                    <span class="relative invisible">Back</span>
                </a>
            </div>
            <div className="text-7xl text-white flex justify-center font-extrabold unselectable" style={{ fontFamily: "Rubik Puddles" }}> Insights </div>

            <div className='w-[50rem] flex top-[11rem] absolute left-[22%] z-[2]'>
                <div class="block rounded-xl  border-[#] bg-transparent p-8 w-[50rem]">
                    <h3 class="mt-3 text-4xl font-[montserrat] text-center font-bold text-white sm:text-xl">Takeaways</h3>

                    <p class="mt-4 text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        One of the things I haven't mentioned but that helped me this year was the reflections we did in class. In general,
                        these reflections have been a good way for me to assess if I have actually improved and/or met the goals I set
                        at the beginning of the year and semester (taken from one of my prep docs). If I remember this next year, this
                        is something I'd to continue doing.
                    </p>
                </div>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#00AECD' className='mt-[15rem] absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='870' cy='201.1' r='11' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#00B7D5] h-[0rem] flex w-[full] mt-[15rem]' >
            </section>

            <section className='bg-[#FFE19D] h-[36rem] flex w-[full] ' >

                <div className="text-5xl text-white absolute mt-[17rem] left-[26%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}>Things I Hope To Continue </div>

                <div className='insight-grid cards'>
                    <div className='insight-grid-top cards'>
                        <InsightCard title={"Reflections"} icon={<><FaBrain className={`insight-icon w-8 h-8 text-sand-dark`} /></>} color={"text-sand-dark"} />
                        <InsightCard title={"Reading Log"} icon={<><FaBook className={`insight-icon w-8 h-8 text-primary`} /></>} color={"text-primary"} />
                        <InsightCard title={"Peer Review"} icon={<><FaCommentDots className={`insight-icon w-8 h-8 text-sand-dark`} /></>} color={"text-sand-dark"} />
                    </div>

                    <div className='insight-grid-bottom cards'>
                        <InsightCard title={"Layered Annotations"} icon={<><FaPenFancy className={`insight-icon w-8 h-8 text-primary`} /></>} color={"text-primary"} />
                        <InsightCard title={"Reflections"} icon={<><FaBrain className={`insight-icon w-8 h-8 text-sand-dark`} /></>} color={"text-sand-dark"} />
                        <InsightCard title={"Group Discussions"} icon={<><FaUserFriends className={`insight-icon w-8 h-8 text-primary`} /></>} color={"text-primary"} />
                    </div>
                </div>
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#FFE19D" className='absolute flip-x ' viewBox='0 0 1185 248'>
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />

            </svg>

            <section className='bg-[#25B83F] h-[21.3rem] flex w-[full] ' >


            </section>
            <ScrollButton />


        </div>
    )
}