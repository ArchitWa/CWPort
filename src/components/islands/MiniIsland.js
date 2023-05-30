
export default function MiniIsland(props) {
    return (
        <div className="absolute mt-[5rem]">
            <svg viewBox="0 0 100 100" className='w-[30rem] absolute mt-[0rem] z-[4] ml-[5rem]' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color="rgba(255, 207, 153, 1)" offset="0%"></stop>
                        <stop id="stop2" stop-color="rgba(232, 163, 96, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d={props.path} width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="url(#sw-gradient)"></path>
            </svg>

            <svg viewBox="0 0 100 100" className='w-[32rem] ml-[5rem] z-[3] -top-[1rem] -left-4 absolute' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path fill="rgba(255, 255, 255, 1)" d={props.path} width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="rgba(255, 255, 255, 1)"></path>
            </svg>
            <svg viewBox="0 0 100 100" className='w-[36rem] ml-[5rem] z-[2] -top-[2.8rem] -left-12 absolute' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path fill="#29C9E3" d={props.path} width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="#29C9E3"></path>
            </svg>
            <svg viewBox="0 0 100 100" className='w-[44rem] ml-[5rem] z-[1] -top-[7rem] -left-[6rem] absolute' xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path fill="#00B7D5" d={props.path} width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }} stroke="#00B7D5"></path>
            </svg>
        </div>
    )
}