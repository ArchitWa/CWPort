import ScrollButton from '../misc/ScrollButton';
import BookCard from '../misc/BookCard';

import sem1 from '../../assets/Trackers/sem1.png';
import sem2 from '../../assets/Trackers/sem2.png';
import risks from '../../assets/Trackers/risks.png';
import indep from '../../assets/Trackers/indep.png';

import { useNavigate } from 'react-router-dom';
import { FaSearch, FaExclamationTriangle, FaDrawPolygon } from 'react-icons/fa';

export default function Successes() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }


    return (
        <div className="animate-fadeIn">
            <div className='flex justify-end cursor-pointer mt-[0.6rem] -mr-[9rem] scale-[80%]' onClick={handleClick}>
                <a class="relative inline-flex items-center justify-center  px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-[#E8A360] rounded-3xl shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-[#E8A360] duration-300 -translate-x-full bg-[#FFE19D] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex  items-center justify-center w-full h-full text-[#E8A360] transition-all duration-300 transform group-hover:translate-x-full ease text-2xl font-bold " style={{ fontFamily: "Montserrat" }}>Back</span>
                    <span class="relative invisible">Back</span>
                </a>
            </div>
            <div className="text-7xl text-white flex justify-center font-extrabold unselectable" style={{ fontFamily: "Rubik Puddles" }}> Goals </div>

            <div className='w-[50rem] flex top-[11rem] absolute left-[22%] z-[2]'>
                <div class="block rounded-xl  border-[#] bg-transparent p-8 w-[50rem]">
                    <h3 class="mt-3 text-4xl font-[montserrat] text-center font-bold text-white sm:text-xl">
                        Books and Creativity
                    </h3>

                    <p class="mt-4 text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        One of my goals for this year was to read more books. For semester one, I tracked my reading minutes and while
                        it was a struggle to be diligent and keep the log accurate, I was able to read 4 books. For semester two, I
                        decided to focus on another goal and so I didn't track the minutes however I still continued to read and branch
                        out the genres I read. I finished reading <span className='font-semibold italic'>Hundred Years Of Solitude </span>
                        recently and IMO, the ending was one of the best I've read. Over the summer, I plan to read <span className=
                            'font-semibold italic'>The Metamorphosis</span>.
                    </p>
                </div>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#00AECD' className='mt-[20rem] absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='870' cy='201.1' r='11' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#00B7D5] h-[60rem] flex w-[full] mt-[20rem]' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[26%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Books I've Read This Year </div>

                <div className='book-container z-[4] scale-[70%] absolute top-[45rem]'>
                    <BookCard
                        cover={"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/4c62a764e19643510c3878a9329bee78.jpe"}
                        color={"rgb(255 225 157"}
                        title={"CotE"}
                        review={<>
                            I never got around to finishing this series, but I enjoyed the first 10 volumes. The story,
                            while cliche, still had interesting plot points. If I have time, I might finish it.
                        </>}
                    />

                    <BookCard
                        cover={"https://m.media-amazon.com/images/I/A1MD9rpyl3L._AC_UF1000,1000_QL80_.jpg"}
                        color={"#29C9E3"}
                        title={"LoA"}
                        review={<>
                            I don't usually like reading historical fiction, but this book was an exception. The story
                            was well written and based on real events, offering a unique perspective on World War II.
                        </>}
                    />

                    <BookCard
                        cover={"https://e1.pxfuel.com/desktop-wallpaper/424/357/desktop-wallpaper-tbate-novel-tbate.jpg"}
                        color={"rgb(255 225 157"}
                        title={"TBatE"}
                        review={<>
                            I started reading this summer of 2022 (it's ongoing)but I haven't read the latest chapters.
                            I would recommend it to anyone who enjoys reincarnation novels (+ fantasy).
                        </>}
                    />

                    <BookCard
                        cover={"https://m.media-amazon.com/images/I/61dkndvKhaL._AC_UF1000,1000_QL80_.jpg"}
                        color={"#29C9E3"}
                        title={"Fly By Night"}
                        review={<>
                            While the worldbuilding was certainly unique, the story felt predictable at times and I didn't really
                            enjoy it. It also felt like the author was being overly descriptive.
                        </>}
                    />
                </div>

                <div className='book-container-2 z-[4] scale-[70%] absolute top-[66.5rem] left-[13%]'>
                    <BookCard
                        cover={"https://m.media-amazon.com/images/I/81GjCVSEDAL._AC_UF1000,1000_QL80_.jpg"}
                        color={"rgb(255 225 157"}
                        title={"The Stranger"}
                        review={<>
                            While a short read, I really enjoyed the main character's perspective on life.
                            Its climactic epiphany sparked introspection and showed me another unique perspective.
                        </>}
                    />

                    <BookCard
                        cover={"https://m.media-amazon.com/images/I/71Djqom1jRL._AC_UF1000,1000_QL80_.jpg"}
                        color={"#29C9E3"}
                        title={"C&P"}
                        review={<>
                            Tbh, the only reason I read this book was because I had heard it was a classic. The
                            story was hard to follow (bc of the Russian names) but the ending was satisfying.
                        </>}
                    />

                    <BookCard
                        cover={"https://m.media-amazon.com/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg"}
                        color={"rgb(255 225 157"}
                        title={"100 Years of Solitude"}
                        review={<>
                            Probably my favorite book I've read this year. The ending was among the best I've read.
                            While the story is technically magic realism, all the other elements make it so much better.
                        </>}
                    />

                </div>


            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#00B7D5" className='absolute' viewBox='0 0 1185 248'>
                <path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' />
            </svg>

            <section className='bg-secondary h-[52rem] flex w-[full] ' >

                <div className="text-5xl text-white absolute mt-[17rem] left-[34%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Evidence Trackers </div>

                <div className='evidence-grid cards absolute z-[4] top-[111.5rem] left-[3%]'>
                    <a target='_blank' className='h-[2rem] card rounded-2xl' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=607216381">
                        <img src={sem1} className='w-[27rem] rounded-2xl border-white border-2 shadow-xl' />
                    </a>

                    <div class={`card rounded-2xl border border-[white] bg-[white] shadow-xl p-8 w-[27rem]`}>
                        <div class="pt-4 text-gray-500">

                            <FaSearch className={`w-8 h-8 mb-2 text-primary`} />

                            <a class={`mt-4 text-lg font-bold  text-primary underline`} target='_blank' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=607216381">Progress!</a>

                            <p class={`mt-2 text-sm blur-none text-primary`}>
                                Looking at the difference between the two trackers, I think my growth in terms of goal #6 is obvious. At
                                the beginning of semester one, I was consistently getting bloomings on my paragraphs. It was only towards
                                the end of the S1 when I started getting a couple fully bloomed. If you click on either of the images, it will take
                                you to my trackers which have additional notes for each assignment. Initially, the important part I was lacking
                                was the analysis - most of my paragraphs made sweeping statements. While this skill focuses on the quality of
                                evidence, I think the analysis is what makes the evidence "good". In S2, I consistently got fully bloomed throughout
                                the year. This is definitely a result of the feedback I got from Mrs. Fujii and the steps I took (outlined on the
                                challenges page). In conclusion, I think I've made a lot of progress in terms of goal #6.
                            </p>
                        </div>
                    </div>

                    <a target='_blank' className='h-[2rem] card rounded-2xl' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=1369544763">
                        <img src={sem2} className='w-[27rem] rounded-2xl border-white border-2 shadow-xl' />
                    </a>
                </div>
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#29C9E3' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[white] h-[45rem] flex w-[full] ' >
                <div className="text-5xl text-tertiary flex justify-center mx-auto mt-[17rem] font-extrabold unselectable" style={{ fontFamily: "Rubik Puddles" }}> Risks </div>

                <div className='risk-grid cards absolute z-[4] top-[163rem] left-[9%]'>
                    <a target='_blank' className='card rounded-2xl' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=0">
                        <img src={risks} className='w-[35rem] rounded-2xl border-white border-2 shadow-xl' />
                    </a>

                    <div class={`card rounded-2xl border-white border-2 bg-[white] shadow-xl p-8 h-[20rem] mt-[2rem] w-[35rem]`}>
                        <div class="pt-4 text-gray-500">

                            <FaExclamationTriangle className={`w-8 h-8 mb-2 text-secondary`} />

                            <a class={`mt-4 text-lg font-bold  text-secondary underline`} target='_blank' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=0">Taking Risks</a>

                            <p class={`mt-2 text-sm blur-none text-secondary`}>
                                Since I already mentioned this in the challenges section, I'll keep this brief. For semester one, one of my goals was to
                                take more risks, whether it be in participating in class or in my writing. Through the tracker, it's not very clear if I
                                actually improved or not but I think have. In general, I'm more participatory in class and more willing to share a rogue
                                idea/thought. In terms of writing, I've started to explore different writing styles (especially with this new unit). I'm
                                happy with how far I've progressed for this goal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill='white' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='260' cy='224.1' r='20' class='a' />
                <circle cx='970' cy='201.1' r='11' class='a' />

                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#FFE19D] cards h-[45rem] flex w-[full] ' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[37%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Independence </div>

                <div className='flex cards absolute z-[4] top-[206rem] left-[3%] gap-[2rem]'>
                    <a target='_blank' className='mt-[3.5rem] card rounded-2xl h-full' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=2013850160">
                        <img src={indep} className='w-[48rem] rounded-2xl border-white border-2 shadow-xl' />
                    </a>

                    <div class={`card rounded-2xl border-white border-2 bg-[white] shadow-xl p-8 w-[35rem]`}>
                        <div class="pt-4 text-gray-500">

                            <FaDrawPolygon className={`w-8 h-8 mb-2 text-sand-dark`} />

                            <a class={`mt-4 text-lg font-bold text-sand-dark underline`} target='_blank' href="https://docs.google.com/spreadsheets/d/1BLrbjoYFhvjJZPX0-Oqq5hMyS2XXFviE64fh5jTEE3o/edit#gid=2013850160">Exploring</a>

                            <p class={`mt-2 text-sm blur-none text-sand-dark`}>
                                As someone who likes instructions, goal #3 was difficult for me to be intentional about. However for most of this semester,
                                I've been trying to explore different writing styles and techniques (idk how well that has shone). Looking at the tracker,
                                most of the assignments were written in basic paragraphs. However, I did try to experiment with different mediums when the
                                option was there like in semester one with the IR Project and with this new unit. One comment I got on my Gatsby final was
                                "you give great detail and descriptions..." which I think shows how my writing has become more descriptive/creative.
                                Additionally, using my CS and web design skills is my way of exploring new things and so far, I'm happy with how this final
                                is turning out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#FFE19D" className='absolute flip-x' viewBox='0 0 1185 248'>
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />

            </svg>

            <section className='bg-[#25B83F] h-[20rem] flex w-[full] ' >

                <div className='flex justify-center mx-auto'>
                    <p class="mt-[16rem] z-[4] w-[55rem]  text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        (Intentionally left out student habits since they're talked about in the other sections)
                    </p>
                </div>
            </section>
            <ScrollButton />


        </div>
    )
}