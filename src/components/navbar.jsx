import Logo from "../assets/logofigmaland.png"
function Navbar(){
    return(
        <nav>
            <div className="container mx-auto flex justify-between  w-[1097px] h-[120px]">
                <div className="self-center ">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="flex self-center">
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Home</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Product</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">About</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Content</a>
                </div>
                <div class="self-center">
                    <button className="w-[140px] h-[52px] leading-6 text-[17px] text-white tracking-[0.2px] border border-white">Login</button>
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;