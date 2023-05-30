import { FaClock, FaComment, FaComments } from 'react-icons/fa';

export default function ChallengeCard(props) {
    return (
        <div class={`card absolute flex items-start justify-between z-[4] rounded-2xl border border-[white] bg-[white] ${props.top} ${props.left == "1" ? "left-[5%]" : props.left == "2" ? "left-[35.5%]" : "left-[66%]"} shadow-xl p-8 w-[26rem]`}>
            <div class="pt-4 text-gray-500">
                {props.icon == "comment" ? (<FaComments className={`w-8 h-8 mb-2 ${props.color}`} />) : 
                props.icon == "time" ? (<FaClock className={`w-8 h-8 mb-2 ${props.color}`} />) : (<FaComment className={`w-8 h-8 mb-2 ${props.color}`} />)}

                <div class={`mt-4 text-lg font-bold  ${props.color} underline`} >{props.title}</div>
                <p class={`mt-2 text-sm blur-none ${props.color}`}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}