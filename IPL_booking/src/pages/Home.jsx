import { Header } from "../Components/Header"
import { ButtonStore } from "../Components/ButtonStore"
import { HeroSection } from "../Components/HeroSection"


export function Home(){
    return <div>
        <Header />
        {/* <div className="sticky z-40 top-16">
            <img className="h-auto  w-full" src="/newStadium.jpg" alt="stadium" />
        </div> */}
        <div className="bg-[url('/newStadium.jpg')]  bg-fixed           bg-cover bg-center bg-no-repeat min-h-screen">
            <HeroSection/> 
        </div>
    </div>
}