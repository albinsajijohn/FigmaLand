import Title from "./title";
export default function Gallery() {
    return(
        <div className="p-10">
            <Title 
              title="Gallery"
              subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="mx-auto  mt-14 w-[1000px] h-[285px] flex place-content-between">
                <img src="src/assets/galleryimage.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/tab.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/people.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/tv.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
            </div>
            <div className="mx-auto mt-8 w-[1090px] h-[285px] flex place-content-between">
                <img src="src/assets/coding.png" alt="" className="w-[395px] h-[285px] rounded-[12px]" />
                <img src="src/assets/laptop.png" alt="" className="w-[225px] h-[285px] rounded-[12px]"/>
                <img src="src/assets/camera.png" alt="" className="w-[401px] h-[285px] rounded-[12px]"/>
            </div>
            <div className="mt-10 mx-auto w-[160px] h-[52px]">
                <button className="w-[160px] h-[52px] border border-white text-white font-medium text-base tracking-[0.2px] ">See More</button>
            </div>
        </div>
    );
}