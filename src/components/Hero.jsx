import Resume from "../assets/resume-haitham.pdf"
const Hero = () => {
  return (
    <main className="lg:w-[703px] flex flex-col gap-[21px] md:ml-[8px] mt-[100px]">
      <p className="text-[#64FFDA] font-fira">Salut, je m’appelle</p>
      <div className="flex flex-col">
        <h1 className="text-[44px] md:text-[55px] lg:text-[66px] font-fjalla text-[#CCD6F6] leading-normal">
          Haitham Attab.
        </h1>
        <h1 className="text-[44px] md:text-[55px] lg:text-[66px] font-fjalla text-[#8892C0] leading-normal">
          I’m a Mobile developer.
        </h1>
      </div>
      <p className="text-[#fff] text-[18px] md:text-[20px] font-fjalla">
      I’m a Mobile Developer and Software Engineer from Algeria, specializing in building Mobile Apps.
      I’m passionate about solving real-world problems through scalable, high-performance, and user-friendly mobile applications.
      I’m committed to delivering the best possible user experience in every project I take on.
        <br />
        <br />
      </p>
      <div className="w-full flex justify-center">
        <a
          href= {Resume}
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-[#64FFDA] border-[0.5px] font-fira text-[14px] w-fit p-3 rounded-[5px] border-[#64FFDA] hover:bg-[#2b9179] hover:text-white hover:border-white ">
            Download my resume !
          </button>
        </a>
      </div>
    </main>
  );
};

export default Hero;
