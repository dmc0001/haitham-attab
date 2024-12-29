const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mb-52"
    >
      <div className="flex gap-3 items-baseline">
        <span className="text-[#64FFDA] font-fira text-[20px] md:text-[24px]">
          04.
        </span>
        <span className="text-[#fff] font-fira text-[26px] md:text-[32px]s">
          Wanna talk ?
        </span>
      </div>
      <p className="text-center text-[#CCD6F6] font-fira text-[20px] md:text-[24px] md:w-[782px]">
        <br />
        <br />
        <br /> I’m always looking for new opportunities and in various form:
        Freelance, Part-time or Contract. <br /> <br />
        <br />
      </p>
      <a href="https://www.linkedin.com/in/haitham-attab-99435a21b/" target="_blank" rel="noreferrer">
        <button className="text-[#64FFDA] border-[0.5px] font-fira text-[14px] w-fit py-3 px-12 rounded-[5px] border-[#64FFDA] transition-all duration-300 hover:bg-[#2b9179] hover:text-white hover:border-white"
                
        >
          Hey!
        </button>
      </a>
    </div>
  );
};

export default Contact;
