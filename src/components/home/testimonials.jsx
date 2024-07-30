export default function Testimonials(){
    const Testimonial=({photo,name,designation,description}) =>(
        <div className="p-10 rounded-[10px] border border-white">
            <div className="flex gap-2">
                <img src={photo} alt={name}  />
                <div>
                    <h3 className="font-medium text-base tracking-[0.2px] text-white">{name}</h3>
                    <h3 className="font-medium text-base tracking-[0.2px] text-white">{designation}</h3>
                </div>
            </div> 
            <div className="pt-3 w-[320px] ">
                <p className="font-normal text-base tracking-[0.2px] text-white">{description}</p>
            </div>
        </div>
    );
    return(
        <div>
            <div className="container py-5 mt-20">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">Testimonials</h2>
            </div>
            <div className="flex justify-center gap-6 mt-20">
                <div className="flex flex-col gap-y-7 column-6">
                    <Testimonial
                        photo="src/assets/claire.png"
                        name="Claire Bell"
                        designation="Designer"
                        description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year."
                    /> 
                    <Testimonial
                        photo="src/assets/Ralph.png"
                        name="Ralph Fisher"
                        designation="Designer"
                        description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year."
                    />     
                </div>
                <div className="flex flex-col gap-y-7 column-6">
                    <Testimonial
                        photo="src/assets/Francisco.png"
                        name="Francisco Lane"
                        designation="Designer"
                        description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                    /> 
                    <Testimonial
                        photo="src/assets/Jorge.png"
                        name="Jorge Murphy"
                        designation="Designer"
                        description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                    />     
                </div>
            </div>
        </div>
    );
}