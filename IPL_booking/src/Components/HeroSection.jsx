import { ButtonStore } from "./ButtonStore";
import { StatCard } from "./StatCard";



export function HeroSection(){
    return <div>
        {/*Home component 1 */}
        <div className="h-auto py-20 z-40  bg-white flex flex-col justify-center items-center text-center space-y-7 opacity-80">
                <div className="flex justify-center items-center space-x-2  ">
                    <span className="font-bold text-black text-[40px] md:text-[70px]">IPL 2025</span>
                    <span className="font-bold text-orange-600 text-[40px] md:text-[70px]">Live Scores</span>
                </div>
                <div>
                    <p className="text-gray-900 text-[15px] md:text-[20px] w-auto px-3 md:px-100    ">Stay updated with real-time scores, team standings, and match schedules for the Indian Premier League.</p>
                </div>
                <div className="flex space-x-5 justify-center items-center opacity-100">
                    <ButtonStore typeA={"type1"} text="Live Scores" />
                    <ButtonStore className='bg-red-400' typeB={"type1"} text="Schedule" />
                </div>
        </div>
        {/*Home component 2*/}
        <div className='flex flex-col items-center bg-white p-2 py-10 justify-between opacity-80 mt-10 space-y-10'>
            <div className="flex items-center justify-between w-full px-15">
                <div className="font-bold text-xl cursor-pointer">Live Scores</div>
                <div><button className="bg-black text-white px-5 py-2 cursor-pointer">View all</button></div>
            </div>
            <div className='w-full h-auto bg-gray-400'>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </div> 
        </div>
        {/*Home component 3*/}
        <div>
            <div className="h-auto bg-white m-10 md:m-15">
                <div>Team 1</div>
                <div>Team 2</div>
                <div>Team 3</div>
                <div>Team 4</div>
            </div>
        </div>
        {/*Home component 4*/}
        <StatCard />
    </div>
}