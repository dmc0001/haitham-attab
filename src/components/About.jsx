import Avatar from "../assets/avatar.jpg"
const About = () => {
  return (
    <div id="about" className="ml-[8px]">
      <div className="flex gap-4 items-center">
        <div className="flex gap-3 items-baseline ">
          <span className="text-[#64FFDA] font-fira text-[20px] md:text-[24px]">01.</span>
          <span className="text-[#fff] font-fira text-[26px] md:text-[32px]">About</span>
        </div>
        <div
          className="flex-grow h-[1px]"
          style={{
            background:
              "repeating-linear-gradient(to right, #64FFDA, #64FFDA 3px, transparent 5px, transparent 8px",
          }}
        ></div>
      </div>
      <div className="flex items-center gap-[26px] lg:gap-[83px] flex-col-reverse lg:flex-row mt-12 lg:mt-0">
        <p className="font-fira text-[14px] md:text-[16px] lg:text-[18px] leading-normal lg:w-[666px]">
          <br /> <br />
          Hello! I’m Haitham and my passion is creating all sorts of things
          related to new technologies. I’m passionate about Mobile development and
          I worked for the first time as a Mobile dev in 2023 at DZExpert.
          <br /> <br /> I started university in 2020 at Yahia Fares University, and since then
          I’ve had a lot of opportunities to work 
          on various technologies, including Dart, Kotlin, and Java. Throughout my academic journey,
          I’ve gained hands-on experience in mobile app development, working with
          frameworks such as Android SDK and Flutter. <br /> <br /> This year I had the
          opportunity to spend 6 month in Algiers at
          <span className="text-[#64FFDA]"> Sphinx itnernational</span> where I further developed
          my skills in mobile app development, worked with a talented team, and
          <span className="text-[#64FFDA]"> contributed to various projects</span> During this time, 
          I was exposed to a wide range of technologies, development methodologies, and real-world challenges that helped me grow both professionally and personally. <br /> <br /> <span className="text-[#64FFDA]">what I do: </span>
          I’m always looking for ways to improve my skills and stay updated with the latest trends in technology, and I’m excited to continue my journey in mobile development while exploring new opportunities.
          <br /> <br />
        </p>

        <div className="relative w-[250px] h-[275px] md:w-[310px] md:h-[345px] lg:w-[365px] lg:h-[406px]">
          <div className=" bg-[#64FFDA] absolute top-[11px] left-[11px] w-full h-full"></div>
          <img
            className="relative bg-[#C4C4C4] w-full h-full"
             src={Avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
