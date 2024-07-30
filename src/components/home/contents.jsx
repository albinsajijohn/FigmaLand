import Title from "./title.jsx";
export default function Contents(){
    return(
        <div >
            <Title 
              title="Contents"
              subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="pt-14 w-[1000px] mx-auto flex place-content-between">
                <div className="p-10 w-[475px] h-[625px] rounded-[10px] flex flex-col justify-between bg-white ">
                    <div>
                        <h3 className="font-medium text-xl tracking-[0.1px] text-center">Work</h3>
                        <div className="p-4 w-[290px] h-[95px] mx-auto">
                            <p className="font-normal text-base tracking-[0.2px] text-center">Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                        </div>
                    </div>
                    <div className="mx-auto w-[150px] h-[55px]">
                        <button className=" w-[150px] h-[55px] bg-[#4452FE] text-white font-medium text-base tracking-[0.2px]">Sign Up</button>
                    </div>
                    <img src="src/assets/work.png" alt="work" />
                </div>
                <div className="px-10 pt-10 w-[475px] h-[625px] rounded-[10px] flex flex-col justify-between bg-white ">
                    <div>
                        <h3 className="font-medium text-xl tracking-[0.1px] text-center">Design with real data</h3>
                        <div className="p-4 w-[290px] h-[95px] mx-auto">
                            <p className="font-normal text-base tracking-[0.2px] text-center">Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                        </div>
                    </div>
                    <div className="mx-auto w-[150px] h-[55px]">
                        <button className=" w-[150px] h-[55px] bg-[#4452FE] text-white font-medium text-base tracking-[0.2px]">Try For Free</button>
                    </div>
                    <img src="src/assets/BoardsNotifications.png" alt="boards" />
                </div>
            </div>
        </div>
        
    );
}