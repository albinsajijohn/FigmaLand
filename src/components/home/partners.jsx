import Title from "./title";
export default function Partners(){
    return(
        <div>
            <Title 
              title="Partners"
              subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="mx-auto mt-20 w-[840px] h-[70px] flex place-content-between">
                <img src="src/assets/logos_apple-app-store.png" alt="APPLE APP STORE" />
                <img src="src/assets/logos_apiary.png" alt="APIARY" />
                <img src="src/assets/logos_android-icon.png" alt="ANDROID" />
                <img src="src/assets/logos_basecamp.png" alt="BASECAMP" />
                <img src="src/assets/logos_airbnb.png" alt="AIRBNB" />
                <img src="src/assets/logos_ibm.png" alt="IBM" />
            </div>
            <div className="mt-20 mx-auto w-[160px] h-[52px]">
                <button className="w-[160px] h-[52px] border border-white text-white font-medium text-base tracking-[0.2px] ">All Partners</button>
            </div>
        </div>
    );
}