export default function Freetrial(){
    return(
        <div>
            <div className="w-[80%] h-[370px] rounded-[33px] mx-auto mt-40 bg-[#343434] flex items-center">
                <div className=" w-[50%]  ">
                    <div className="w-[500px] mx-auto">
                        <div className="w-[500px] h-[125px] ">
                            <h2 className="font-normal text-[52px] leading-[62px] text-white tracking-[0.2px]">OpenType features and Variable fonts</h2>
                        </div>
                        <div className="mt-10 ">
                            <button className="h-[52px] w-[232px] text-white bg-[#4452FE]">Try For Free</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="src/assets/prototype.png" alt="" />
                </div>
            </div>
        </div>
    );
}