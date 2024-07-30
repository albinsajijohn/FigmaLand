export default function Title ({title,subtitle}){
    return(
        <div>
            <div className="container py-5 mt-20">
                <h2 className="text-white text-center font-normal text-[52px] leading-[62px] tracking-[0.2px]">{title}</h2>
            </div>
            <div className="w-[600px] pt-5 h-[80px] mx-auto px-5 text-center text-white font-normal text-xl tracking-[0.2px]">
                <h3>{subtitle}</h3>
            </div>  
        </div>                
    );
}