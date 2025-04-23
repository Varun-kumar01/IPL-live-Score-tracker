import { Users, Trophy, TrendingUp, CalendarDays } from 'lucide-react'



function Stat({Icon ,text, stat}){
    return <div className='flex flex-col space-y-4 items-center border p-5 px-15'>
        <Icon Users size={40} color="#f3f2f2" />
        <div className='text-white font-bold text-lg whitespace-wrap'>{text}</div>
        <div className='text-white font-bold text-3xl'>{stat}</div>
    </div>
}

export function StatCard(){
    return <div>
        <div className="bg-linear-to-l from-lime-950 to-blue-950 p-15 opacity-100 flex flex-col items-center space-y-10">
            <div className="text-white font-bold text-2xl sm:text-3xl ">
                 IPL 2025 stats & Highlights
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg: gap-10 max-w-10xl  px-4">
                <Stat Icon={Users} text={"Total Matches"} stat={74} />
                <Stat Icon={Trophy} text={"Teams"} stat={10} />
                <Stat Icon={TrendingUp} text={"Tournament Duration"} stat={"51 days"} />
                <Stat Icon={CalendarDays} text={"Highest Score"} stat={"286/6"} />
            </div>
        </div>
    </div>
}