import ota from '../../assets/WritingWall/ota.png';
import final from '../../assets/WritingWall/final.png';
import ants from '../../assets/WritingWall/ants.png';
import cta2 from '../../assets/WritingWall/cta2.png';
import grad from '../../assets/WritingWall/grad.png';


export default function Carousel() {
    return (
        <div className="flex absolute left-[17%] caro rounded-3xl unselectable  h-[14rem] mt-[22rem]">
            <div className="carousel carousel-center bg-white border-tertiary border-2 w-[60rem] p-4 space-x-4 rounded-3xl">
                <div className="carousel-item">
                    <img src={ota} className="rounded-3xl" />
                </div>
                <div className="carousel-item">
                    <img src={final} className="rounded-3xl" />
                </div>
                <div className="carousel-item">
                    <img src={ants} className="rounded-3xl" />
                </div>
                <div className="carousel-item">
                    <img src={cta2} className="rounded-3xl" />
                </div>
                <div className="carousel-item">
                    <img src={grad} className="rounded-3xl" />
                </div>
            </div>

        </div>

    )
}