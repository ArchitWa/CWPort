import ScrollButton from '../misc/ScrollButton';
import ChallengeCard from '../misc/ChallengeCard';

import { useNavigate } from 'react-router-dom';


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
            <div className="text-7xl text-white flex justify-center font-extrabold [word-spacing:20px] unselectable" style={{ fontFamily: "Rubik Puddles" }}> Challenges And Growth </div>

            <div className='w-[50rem] flex top-[11rem] absolute left-[22%] z-[2]'>
                <div class="block rounded-xl  border-[#] bg-transparent p-8 w-[50rem]">
                    <h3 class="mt-3 text-4xl font-[montserrat] text-center font-bold text-white sm:text-xl">Rising To The Challenge</h3>

                    <p class="mt-4 text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        Looking at the number of successes I've had this year, it feels like the year was a breeze for me. Yet,
                        even with the successes I've had, I've had to overcome challenges and obstacles that I wouldn't have faced in another
                        class. Compared to last year, where literature class primarily consisted of teacher lectures and occasional student
                        participation, this year's experience has been significantly distinct. However, I think I have been able to rise to
                        the challenge and grow from it.

                    </p>
                </div>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#00AECD' className='mt-[20rem] absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='870' cy='201.1' r='11' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#00B7D5] cards h-[55rem] flex w-[100%] mt-[20rem]' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[40%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Challenges </div>

                <ChallengeCard
                    left={"1"}
                    top={"top-[50rem]"}
                    icon={"feedback"}
                    color={"text-primary"}
                    title={"Applying Feedback"}
                    description={
                        <>
                            After the numerous lit assignments, we've had this year, the most common feedback I've received is to "connect
                            the dots". At the beginning of the year, this comment would frequently appear on my CTA's in the form of "2C".
                            As the year progressed, I slowly came to dislike this feedback code because I didn't know how to fix it.
                            However now, I no longer feel this frustration.
                        </>
                    }
                />

                <ChallengeCard
                    left={"2"}
                    top={"top-[50rem]"}
                    icon={"time"}
                    color={"text-primary"}
                    title={"Procrastination"}
                    description={
                        <>
                            While not a huge problem, procrastination (and specifically for literature) has been a problem for me.
                            Usually, when there is a large lit assignment due, I'll finish all my work for every other class before
                            it. For example, for the first IR project, I left it off until the last weekend before it. I don't think
                            this is because of a lack of time management skills, but rather because I spend more time on lit than on
                            any other class. I said this once on one of the reflections, but when I write a CTA, I usually spend 2-3
                            writing it. I think this is because I'm a perfectionist and I want to make sure that my writing flows
                            well. And even though I spend so much time on it, I still sometimes forget trivial parts of the piece.
                        </>
                    }
                />

                <ChallengeCard
                    left={"3"}
                    top={"top-[50rem]"}
                    icon={"comment"}
                    color={"text-primary"}
                    title={"Large Group Discussions"}
                    description={
                        <>
                            I mentioned this earlier, but I think the large group discussions were the biggest challenge for me.
                            I'm not the most confident speaker and so I'm more hesitant to participate in discussions. In smaller
                            groups, I usually don't have a problem talking, but in larger groups, I tend to be more quiet. During
                            the first conference in semester one, this issue was brought up. One of the reasons I was silent was
                            that I thought my input was either too obvious or not relevant. However, between then and now, I've
                            come to realize that this isn't true. This challenge can most clearly be seen in the Socratic reflection.
                            There, I said "I would give myself a pretty low score for today's discussion" because I had only talked
                            twice. Additionally, in the first 6 weeks of semester two, my overall student habits were on a downtrend.
                            In general, speaking out has been a challenge for me.
                        </>
                    }
                />

            </section>

            {/* <svg xmlns='http://www.w3.org/2000/svg' fill="#00B7D5" className='absolute' viewBox='0 0 1185 248'>
                <path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' />
            </svg>

            <section className='bg-[#29C9E3] h-[50rem] flex w-[full] ' >


            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#29C9E3' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[white] h-[50rem] flex w-[full] ' >


                </section> */}

            <svg xmlns='http://www.w3.org/2000/svg' fill='#00B7D5' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='160' cy='164.1' r='20' class='a' />
                <circle cx='970' cy='201.1' r='11' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-sand cards h-[60rem] flex w-[full] ' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[43%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Growth </div>

                <ChallengeCard
                    left={"1"}
                    top={"top-[105rem]"}
                    icon={"feedback"}
                    color={"text-sand-dark"}
                    title={"Applying Feedback"}
                    description={
                        <>
                            In the beginning, I would frequently get "blooming" on my rhetorical analyses with the main feedback
                            being to elaborate more. And so, to improve, I started to add more detail to my analyses. To do this, I
                            tried a couple of methods. First, I tried to write my analysis as if I was explaining it to someone who
                            didn't know anything about the topic. This helped me write the analysis more clearly. Second (I only started
                            doing this later in the year), I would ask my friends to read over my piece and ask if they understood it.
                            But the thing that helped me the most was the structure Mrs. Fujii suggested on my CTA #1 reflection. She
                            commented that connecting the dots was "like establishing an idea, explaining the parts of that idea in
                            1-2 additional sentences, and then bringing it all back to the og idea." This structure helped me when writing
                            the Gatsby final and I think it worked too well because I ended up writing a lot more than needed.
                        </>
                    }
                />

                <ChallengeCard
                    left={"2"}
                    top={"top-[111.3rem]"}
                    icon={"time"}
                    color={"text-sand-dark"}
                    title={"Procrastination"}
                    description={
                        <>
                            Thankfully, this problem didn't ever become too big of an issue. While I did start most assignments close to the
                            due date, I was always able to get them done. In fact, on multiple occasions, I have chosen to have my conference
                            on one of the later dates. This doesn't entirely stem from procrastination though, I just like having more evidence to
                            talk about Also, it gave me something to write one of my jots about which made for a pretty easy writing experience.
                            I can't really say I grew too much in this area, but at least for this assignment, I started much earlier than I
                            usually do. However, it does make me wonder how much better my writing would be if I had decided to start the larger
                            writing pieces earlier (something to work on next year).
                        </>
                    }
                />

                <ChallengeCard
                    left={"3"}
                    top={"top-[116.3rem]"}
                    icon={"comment"}
                    color={"text-sand-dark"}
                    title={"Large Group Discussions"}
                    description={
                        <>
                            This is the area I believe I've grown the most in. As seen on the successes page, I got fully bloomed on the last big
                            discussion we had (on RITS). During the most recent podcast discussion, the notes Mrs. Fujii took were also glowing:
                            "very participatory" and "clearly active listening". While I did only get 2/6 in full class contributions at the beginning
                            of this six-week period, I think a few of those are from the times I was absent for AP testing and FBLA. Overall, I think
                            I've grown a lot in this area and from what I hear, participating will also be a big part of AP Lit next year.
                        </>
                    }
                />

            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#FFE19D" className='absolute flip-x ' viewBox='0 0 1185 248'>
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
                <circle cx='460' cy='104.1' r='20' class='a' fill="#25B83F" />
                <circle cx='970' cy='61.1' r='11' class='a' fill="#25B83F" />
            </svg>

            <section className='bg-[#25B83F] h-[40rem] flex w-[full] ' >
                <div className="text-5xl text-white absolute mt-[16rem] left-[44%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Overall </div>

                <div className='flex justify-center mx-auto'>
                    <p class="mt-[22rem] z-[4] w-[55rem]  text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        I'll keep this part short because I feel like I'm starting to repeat what I've said in earlier sections already. In general,
                        the challenges I've faced this year have not been too difficult to overcome. I've been able to improve my writing and adapt 
                        to the structure of the class without too much trouble. As a learner, I've grown to value the importance of participating in
                        class discussions and I've also learned to be more attentive during group discussions. This is something at the start of the 
                        year I didn't think was impactful but I've realized that speaking with more people lets one see more perspectives and ideas.
                        I've also learned (recently) that creative writing can actually be a cathartic experience. I typically see writing as a way
                        to convey information or argue a perspective, but I've realized that it can also be a way to express one's emotions. In 
                        conclusion, all of the challenges I've faced (be it small or large) have helped me grow as a learner and as a person.   
                    </p>
                </div>

            </section>

            <ScrollButton />


        </div>
    )
}