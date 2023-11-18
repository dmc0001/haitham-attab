const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-52">
      <div className="flex gap-3 items-baseline">
        <span className="text-[#64FFDA] font-fira text-[24px]">04.</span>
        <span className="text-[#fff] font-fira text-[32px]">Wanna talk ?</span>
      </div>
      <p className="text-center text-[#CCD6F6] font-fira text-[24px] w-[782px]">
        <br />
        <br />
        <br /> I’m always looking for new opportunities and in various form:
        Freelance, Part-time or Contract. <br /> <br /><br />
      </p>
      <button className="text-[#64FFDA] border-[0.5px] font-fira text-[14px] w-fit py-3 px-12 rounded-[5px] border-[#64FFDA]">
        Hey!
      </button>
    </div>
  );
};

export default Contact;