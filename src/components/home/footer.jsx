export default function Footer(){
    const Title =({title}) =>(
           <h3 className="font-medium text-xl text-white tracking-[0.1px]">{title}</h3>
    );
    const Content=({content}) =>(
        <p className="font-medium text-base tracking-[0.2px] text-white">{content}</p>
    );
    const Features=({title,content1,content2,content3,content4}) => (
        
        <div className="flex flex-col w-[120px]">
            <Title title={title} />
            <div  className="mt-10">
                <Content content={content1} />
                <Content content={content2}/>
                <Content content={content3}/>
                <Content content={content4}/>
            </div>
        </div>
        
    )
    return(
        <div className="flex w-[60%] mx-auto mt-40 py-20 place-content-between ">
            <div className="flex place-content-between w-[520px]">
                 <Features title="Fingertipe" content1="Home" content2="Examples" content3="Pricing" content4="Updates"/>
                 <Features title="Resources" content1="Home" content2="Examples" content3="Pricing" content4="Updates"/>
                 <Features title="About" content1="Home" content2="Examples" content3="Pricing" content4="Updates"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <img src="src/assets/location.png" alt="" />
                    <p className="font-medium text-base tracking-[0.2px] text-white">7480 Mockingbird Hill undefined</p>
                </div>
                <div className="flex gap-2">
                    <img src="src/assets/ic_baseline-phone-android.png" alt="" />
                    <p className="font-medium text-base tracking-[0.2px] text-white">(239) 555-0108</p>
                </div>
                <div className="flex gap-3 pt-3 items-center">
                    <a href="#"><img src="src/assets/twitter.png" alt="Twitter Icon" /></a>
                    <a href="#"><img src="src/assets/facebook.png" alt="Facebook Icon" /></a>
                    <a href="#"><img src="src/assets/linkedln.png" alt="Linkedln Icon" /></a>
                </div>

            </div>
        </div>
    );
}