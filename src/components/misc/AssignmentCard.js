import { FaSeedling } from 'react-icons/fa';

export default function AssignmentCard(props) {
    const bloomingIcon =
        (<svg className='w-8 h-8 mb-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <g fill={props.color === "text-sand-dark" ? "#E8A360" : "#00aecd"} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                <g transform="scale(5.12,5.12)">
                    <path d="M48.35938,18.96875c-1.66016,-6.0625 -9.92969,-6.74219 -12.9375,-6.78516c-0.89062,-2.4375 -4.20312,-10.19922 -10.39062,-10.19922c-6.15234,0 -9.46484,7.67969 -10.375,10.16016c-0.20703,-0.00781 -0.44531,-0.01172 -0.71484,-0.01172c-3.08984,0 -10.46875,0.66406 -12.23047,6.82422c-1.89063,6.58594 4.34375,11.56641 6.47656,13.04297c-0.75781,2.45703 -2.59766,10.13672 2.38672,14.28906c1.37109,1.14844 3.02344,1.72656 4.90625,1.72656c4.0625,0 8.11328,-2.71484 9.60547,-3.82812c1.56641,0.98438 5.81641,3.38672 9.90234,3.38672c1.68359,0 3.16797,-0.40625 4.41016,-1.21094c5.0625,-3.28516 3.14453,-11.86328 2.44531,-14.39062c1.99219,-1.54687 8.17969,-6.92969 6.51563,-13.00391zM25.73047,25.95313c0,0 5.91016,4.25 3.77734,5.96875c-2.13672,1.72266 -4.50781,-5.4375 -4.50781,-5.4375c0,0 -2.57031,7.10938 -4.51172,5.4375c-1.9375,-1.66797 3.78125,-5.96875 3.78125,-5.96875c0,0 -7.52344,-0.05078 -6.56641,-2.60937c0.95703,-2.55859 6.84375,1.75 6.84375,1.75c0,0 -2.24609,-7.05078 0.45313,-7.05078c2.69922,0 0.44922,7.05078 0.44922,7.05078c0,0 5.84766,-4.30078 6.84766,-1.75c0.99609,2.55078 -6.56641,2.60938 -6.56641,2.60938z">
                    </path>
                </g>
            </g>
        </svg>)

    return (
        <div class={`card absolute flex items-start justify-between z-[4] rounded-2xl border border-[white] bg-[white] ${props.top} ${props.left == true ? "left-[9%]" : "left-[52%]"} shadow-xl p-8 w-[35rem]`}>
            <div class="pt-4 text-gray-500">
                {props.grade == "budding" ? (
                    <FaSeedling className={`w-8 h-8 mb-2 ${props.color}`} />
                ) : (
                    bloomingIcon
                )}
                <a class={`mt-4 text-lg font-bold  ${props.color} underline`} target='_blank' href={props.link}>{props.title}</a>

                <p class={`mt-2 text-sm blur-none ${props.color}`}>
                    {props.description}
                </p>
            </div>

            <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 tracking-wider">{props.date}</span>
        </div>
    )
}