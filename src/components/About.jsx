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
          Hello! I’m Baptiste and my passion is creating all sorts of things
          related to new technologies. I’m passionate about Web development and
          I worked for the first time as a Front-End dev in 2018 at CAUE Du
          Nord. <br /> <br /> I’ve started university in 2018 at Epitech Lille
          (school of ….) and since then I’ve had a lot of opportunities to work
          on various technologies such as React Native, Swift, VueJs, Unity,
          C++, C# and a lot more. I also have had the opportunity to work as a
          DevOps during my scholarship. <br /> <br /> This year I had the
          opportunity to spend 6 month in California at
          <span className="text-[#64FFDA]">CSUSM</span> where my major was
          Computer Science. I ended this semester with the award of the
          <span className="text-[#64FFDA]">Outstanding studient</span> for my
          dedication and work in this university. <br /> <br /> And finally I
          started to <span className="text-[#64FFDA]">stream</span> a part of
          what I do : my training, my projects and my ideas on Twitch. For me
          it’s a good way to share with other people my journey and maybe to
          change the way people can see tech jobs & life.
          <br /> <br />
        </p>

        <div className="relative">
          <div className="w-[250px] h-[275px] md:w-[310px] md:h-[345px] lg:w-[365px] lg:h-[406px] bg-[#64FFDA] absolute top-[11px] left-[11px]"></div>
          <svg
            className="fill-[#C4C4C4] relative bg-[#C4C4C4] w-[250px] h-[275px] md:w-[310px] md:h-[345px] lg:w-[365px] lg:h-[406px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"

          >
            <path d="M0 0H365V406H0V0Z" fill="#C4C4C4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
