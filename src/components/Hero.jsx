const Hero = () => {
  return (
    <main className="w-[703px] flex flex-col gap-[21px] ml-[8px] mt-[100px]">
      <p className="text-[#64FFDA] font-fira">Salut, je m’appelle</p>
      <div className="flex flex-col">
        <h1 className="text-[66px] font-fjalla text-[#CCD6F6] leading-normal">
          Baptiste Fortier.
        </h1>
        <h1 className="text-[66px] font-fjalla text-[#8892C0] leading-normal">
          I’m a reactJS & Swift developer.
        </h1>
      </div>
      <p className="text-[#fff] text-[20px] font-fjalla">
        I’m a software engineer from Epitech specialized in building Web & IOS
        App. I also love designing them to create vibrant UI experiences. In the
        past few month I focused on personal project to upgrade my skills and be
        more efficiant.
        <br />
        <br />
      </p>
      <button className="text-[#64FFDA] border-[0.5px] font-fira text-[14px] w-fit p-3 rounded-[5px] border-[#64FFDA]">
        Download my resume !
      </button>
    </main>
  );
};

export default Hero;
