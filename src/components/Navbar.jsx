import { navLinks } from "../constatns";

const Navbar = () => {
  return (
    <header className="w-full h-[66px] flex border-b-[0.5px] border-solid border-[#64FFDA]">
      <div className="flex h-full flex-col justify-center ml-4">
        <p className="text-[#64FFDA] text-center text-[30px] font-[400] font-fira">
          Haithem Attab
        </p>
      </div>

      <div className="flex-grow"></div>

      <div className="flex h-full justify-center gap-16 mr-8">
      {navLinks.map((link,index) => {
        return(
            <div key={link.id} className="h-full flex gap-3 items-center">
                
            <span className="text-[#64FFDA] font-fira">0{index+1}.</span>
            <span className="font-fira ">{link.title}</span>


            </div>
            
        )
      })}
      </div>
    </header>
  );
};

export default Navbar;
