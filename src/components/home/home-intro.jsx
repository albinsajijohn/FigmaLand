export default function Homeintro(){
    return(
        <div>
            <div className="container mx-auto py-5 w-[730px] h-[200px]">
                <h1 className="text-white font-medium text-[80px] leading-[88px] tracking-[0.2px] text-center">Work at the speed of thought</h1>
            </div>
            <div className="mx-auto p-3.5 gap-y-2.5 w-[600px] h-[80px]">  
                <h3 className="text-white font-normal text-xl leading-8 tracking-[0.2px] text-center">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h3>
            </div>
            <div className="pt-20 container mx-auto flex justify-between w-[400px]">
                <button className="h-[65px] w-[180px] text-white bg-[#4452FE]">Try For Free</button>
                <button className="h-[65px] w-[180px] border border-white text-white text-white">Learn More</button>
            </div>
            <div className="pt-20">
                <img src="src/assets/Dashboard.png" alt="dashboard" />
            </div>    
        </div>    
    );
}