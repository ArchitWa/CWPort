export default function InsightCard(props) {
    return (
        <div class={`card flex items-start justify-between z-[4] rounded-2xl border border-[white] bg-[white] shadow-xl p-5 w-[20rem]`}>
            <div class="py-2 text-gray-500 flex align-middle w-[20rem] ">
                {props.icon}

                <h1 class={`insight-title text-lg font-bold ml-2 align-middle ${props.color}`} >{props.title}</h1>

            </div>
        </div>
    )
}
