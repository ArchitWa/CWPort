import ScrollButton from '../misc/ScrollButton';
import AssignmentCard from '../misc/AssignmentCard';
import Carousel from '../misc/Carousel';

import { useNavigate } from 'react-router-dom';


export default function Successes() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/main")
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
            <div className="text-7xl text-white flex justify-center font-extrabold unselectable" style={{ fontFamily: "Rubik Puddles" }}> Successes </div>

            <div className='w-[50rem] flex top-[11rem] absolute left-[22%] z-[2]'>
                <div class="block rounded-xl  border-[#] bg-transparent p-8 w-[50rem]">
                    <h3 class="mt-3 text-4xl font-[montserrat] text-center font-bold text-white sm:text-xl">
                        My Experience
                    </h3>

                    <p class="mt-4 text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        I've seen a lot of growth in my writing during this year of literature. My evidence has gotten much stronger,
                        my sentence structure is more varied, and most importantly, my analysis has become much more nuanced.
                        At the beginning of the year, while my writing wasn't terrible, it lacked the elaboration and deeper
                        analysis that is now much more commonly seen in my writing. A year of receiving specific feedback and
                        actively revising my pieces has improved my writing a lot! Here are some of the assignments and comments
                        I'm particularly proud of this year.
                    </p>
                </div>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#00AECD' className='mt-[20rem] absolute z-[1]' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='870' cy='201.1' r='11' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#00B7D5] cards h-[77rem] w-[full] mt-[20rem]' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[36%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Semester One </div>

                <AssignmentCard
                    grade={"budding"}
                    left={true}
                    top={"top-[49rem]"}
                    color={"text-primary"}
                    date={"10.6"}
                    title={"Rhetorical Analysis Paragraph 3"}
                    link={"https://docs.google.com/document/d/18Y3cKlcQ3EKYP6N-NGh13M4zxMN54-eLmfeylukP9Bs/edit"}
                    description={
                        <>
                            Even though this piece wasn't the best example of my writing (in fact it's my worst!), I'm proud of it
                            because it showed a lot of potential - I just needed to work on my analysis and elaboration. While the
                            overall piece received a "budding", my analysis was <span className='font-semibold'>"REALLY STRONG"</span> -
                            a sign that I was on the right track. Initially, I had been a little demoralized by the budding grade, but
                            after seeing the positive feedback on the analysis, I was motivated to work harder and not forget the thing I had
                            forgotten: the claim. Another success that came from this low grade was that I also got a sophistication
                            point. Overall, this piece, while not the best, was a good learning experience for me and set me up for the rest
                            of the year.
                        </>
                    }
                />

                <AssignmentCard
                    grade={"not"}
                    left={false}
                    top={"top-[calc(63rem-5rem)]"}
                    color={"text-primary"}
                    date={"11.15"}
                    title={"Unit 1 Final"}
                    link={"https://docs.google.com/document/d/1S7v-yEFG_MaACpv7i8Qak29Eyd540d2dnefYXo0wEXo/edit"}
                    description={
                        <>
                            To be honest, I was a little surprised when I saw I got fully bloomed on this piece. I had been expecting a
                            blooming because my claim and CI weren't that strong. This was also one of the first pieces I wrote that
                            included a personal anecdote, so I was a little worried about how it would be received. However, I was
                            pleasantly surprised to see that my analysis was strong enough to get me a fully bloomed (still there was
                            room to elaborate more). This assignment along with the previous one both showed me that I needed to work
                            on my claims and controlling ideas - something I continued to improve for the rest of the year.
                        </>
                    }
                />

                <AssignmentCard
                    grade={"not"}
                    left={true}
                    top={"top-[77rem]"}
                    color={"text-primary"}
                    date={"11.23"}
                    title={"IR Final Assessment"}
                    link={"https://docs.google.com/document/d/1ig2dmxsfqYH7JpEIJI_c53HHXHArDltQvHc9tYV54_o/edit"}
                    description={
                        <>
                            Out of all the projects we've done this year, the IR projects have been the most fun. I've mentioned in past
                            conferences that I used to enjoy reading but stopped after COVID. However, this project (along with IR reading
                            in general) allowed me to reflect on what I had read in a way that was more creative. The book I read for this
                            project was <span className='font-semibold italic'>The Librarian Of Auschwitz</span> by Antonio Iturbe. This
                            book helped me branch out into other genres like absurdist, historical and philosophical fiction. Reading in
                            general has been one of my successes this year (I finished <span className='font-semibold italic'>Hundred Years
                                Of Solitude</span> recently), and I hope to continue reading more books in the future.
                        </>
                    }
                />

                <AssignmentCard
                    grade={"not"}
                    left={false}
                    top={"top-[calc(90rem-5rem)]"}
                    color={"text-primary"}
                    date={"12.20"}
                    title={"Transcendentalism Analysis"}
                    link={"https://docs.google.com/document/d/1uggewqbxUcnoU57F0-11ygL2nQWjgWxKNS7imjNl0rE/edit"}
                    description={
                        <>
                            The last major assignment for semester one was the transcendentalism final. Like the IR project, I chose to
                            do a combination of analysis and creative writing. In terms of the creative aspect, I created a mock newspaper
                            to reflect on how transcendentalism can be seen in society today. While this project wasn't as difficult to
                            analyze as future writings, it was still a challenge to find the right quotes and evidence to support my claims.
                            The feedback I received was glowing - "connected all the dots" and "written component is comprehensive and
                            detailed".
                        </>
                    }
                />
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#00B7D5" className='absolute' viewBox='0 0 1185 248'>
                <path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' />
            </svg>

            <section className='bg-secondary h-[30rem] flex w-[full] ' >

                <div className="text-5xl text-white absolute mt-[15rem] left-[40%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> To Recap! </div>

                <div className='flex justify-center mx-auto'>
                    <p class="mt-[23rem] z-[4] w-[45rem]  text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        A lot of the feedback I received in semester one was about digging deeper into my evidence and making a more thorough claim.
                        In the next semester, the application of these elements really started to show. While it started off a slow start (with the
                        budding), I was able to learn from all the comments and reflections to improve my writing. Since then I've continued to build
                        off the feedback I've received and have continued to write fully bloomed pieces.
                    </p>
                </div>

            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill='#29C9E3' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='76' cy='121.1' r='20' class='a' />
                <circle cx='814.5' cy='165.6' r='24.5' class='a' />
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[white] h-[35rem] flex w-[full] ' >
                <div className="text-5xl text-tertiary flex justify-center mx-auto mt-[17rem] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Writing Wall  </div>
                <span className='text-primary absolute font-[montserrat] text-xs [word-spacing:1px] font-light z-[4] mt-[36.4rem] ml-[68rem]'> (Scroll Horizontally)</span>
                <div className='z-[3]'>
                    <Carousel />
                </div>
            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill='white' className='absolute' viewBox='0 0 1185 248'>
                <circle cx='160' cy='164.1' r='20' class='a' />
                <circle cx='970' cy='201.1' r='11' class='a' />

                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />
            </svg>

            <section className='bg-[#FFE19D] cards h-[70rem] flex w-[full] ' >
                <div className="text-5xl text-white absolute mt-[15rem] left-[36%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Semester Two </div>

                <AssignmentCard
                    grade={"not"}
                    left={true}
                    top={"top-[191rem]"}
                    color={"text-sand-dark"}
                    date={"2.28"}
                    title={"Final RITS Socratic Seminar"}
                    link={""}
                    description={
                        <>
                            Out of all of the assignments this year, I'm probably the most proud of this one. While it's not a writing
                            piece, I think it's a great example of how I've grown as a writer. Usually during Socratic seminars, I'm
                            the type of person to let other people do the talking and just listen. However, this time I had the goal of
                            participating at least 5 times (which I did) and in a meaningful way. For this discussion, I got fully bloomed -
                            a major step up from the last seminar where I was still budding. I think the reason it was easier this time
                            was because I was more confident in my points since I had prepared before.
                        </>
                    }
                />

                <AssignmentCard
                    grade={"not"}
                    left={false}
                    top={"top-[203rem]"}
                    color={"text-sand-dark"}
                    date={"3.02"}
                    title={"RITS Final Slide Deck"}
                    link={"https://docs.google.com/presentation/d/127K0t0eE2-O3l-5fQWDf7hnPXgmnEfLT19YeXvtfD4Q/edit#slide=id.p"}
                    description={
                        <>
                            I felt that this unit was harder for me to analyze but this was helped by the fact that I also learned about
                            two critical lenses - feminist and psychoanalytical. Throughout the unit, I enjoyed applying the psychoanalytical
                            lens to the text and this also prompted me to check out Freud's work on dreams. In this slide deck, I had
                            a really strong analysis for the ants quote however lacked the full connection for the previous quote. Writing
                            just the CTA parts for this assignment definitely made me better at writing them overall. Additionally, the
                            presentation aspect of this assignment improved my public speaking skills.
                        </>
                    }
                />

                <AssignmentCard
                    grade={"not"}
                    left={true}
                    top={"top-[218rem]"}
                    color={"text-sand-dark"}
                    date={"5.01"}
                    title={"Final Gatsby Paper"}
                    link={"https://docs.google.com/document/d/1JdPd-R8eRwLN3Tnhjf9v-dY4yseFIZAoguwbdNiIinc/edit"}
                    description={
                        <>
                            As the final large-scale paper of the year, I wanted to make sure that I did well on this one. The separate "step"
                            assignments we had prevented me from procrastinating and helped me to write a better paper. My analysis of the Gatsby
                            quotes and the connection to the prompt was strong (though it was very long - room to improve). I also enjoyed writing
                            another personal anecdote except it was more difficult this time as I had a hard time coming up with what to talk about.
                            Overall, this paper shows how much I've grown as a writer this year.
                        </>
                    }
                />



            </section>

            <svg xmlns='http://www.w3.org/2000/svg' fill="#FFE19D" className='absolute flip-x ' viewBox='0 0 1185 248'>
                <path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a' />

            </svg>

            <section className='bg-[#25B83F] h-[38rem] flex w-[full] ' >
                <div className="text-5xl text-white absolute mt-[16rem] left-[38%] font-extrabold unselectable [word-spacing:20px]" style={{ fontFamily: "Rubik Puddles" }}> Put Together </div>

                <div className='flex justify-center mx-auto'>
                    <p class="mt-[22rem] z-[4] w-[55rem]  text-base leading-[1.5rem] font-medium text-center font-[montserrat] text-gray-50">
                        This year, I've learned a lot about myself as a writer. I went from writing weak claims and surface-level analyses to
                        writing complex claims and deep explanations. I've learned about the different lenses writers view texts and how they
                        can help unlock different meanings. A major success I've had is in my student habits. In the last few weeks, I've been
                        participating almost every class (aside from the days I was absent for AP tests and FBLA). During group discussions, I'm
                        a lot more attentive. My reading habits are also on track to be what they were a few years ago. Overall, this year in
                        lit has been a success and I'm excited to see what next year brings!
                    </p>
                </div>
            </section>
            <ScrollButton />


        </div>
    )
}