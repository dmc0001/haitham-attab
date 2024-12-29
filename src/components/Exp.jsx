import { experiences } from "../constatns";
const Exp = () => {
  return (
    <div id="experience" className="ml-[7px]">
      <div className="flex gap-4 items-center mb-20">
        <div className="flex gap-3 items-baseline ">
          <span className="text-[#64FFDA] font-fira text-[20px] md:text-[24px]">02.</span>
          <span className="text-[#fff] font-fira text-[26px] md:text-[32px]">
            My experience
          </span>
        </div>
        <div
          className="flex-grow h-[1px]"
          style={{
            background:
              "repeating-linear-gradient(to right, #64FFDA, #64FFDA 3px, transparent 5px, transparent 8px",
          }}
        ></div>
      </div>

      {experiences.map((exp, index) => {
        return (
          <div key={index} className="flex gap-[20px] sm:gap-[35px]">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  x="4.12476"
                  y="12.4583"
                  width="11.7851"
                  height="11.7851"
                  transform="rotate(-45 4.12476 12.4583)"
                  fill="#8892C0"
                />
                <rect
                  x="1.41421"
                  y="12.5"
                  width="15.6777"
                  height="15.6777"
                  transform="rotate(-45 1.41421 12.5)"
                  stroke="#64FFDA"
                  strokeWidth="2"
                />
              </svg>
              <div
                className="w-[1px] flex-grow my-2"
                style={{
                  background:
                    "repeating-linear-gradient(to bottom, #64FFDA, #64FFDA 3px, transparent 5px, transparent 8px",
                }}
              ></div>
              {index + 1 == experiences.length && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <rect
                    x="4.12476"
                    y="12.4583"
                    width="11.7851"
                    height="11.7851"
                    transform="rotate(-45 4.12476 12.4583)"
                    fill="#8892C0"
                  />
                  <rect
                    x="1.41421"
                    y="12.5"
                    width="15.6777"
                    height="15.6777"
                    transform="rotate(-45 1.41421 12.5)"
                    stroke="#64FFDA"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>

            <div className="flex flex-col gap-[28px] pb-12">
              <h1 className="text-[14px] text-[#E5E5E5] font-fira leading-[1.2rem]">
                {exp.title} <br />{" "}
                <span className="font-[10px] text-gray-300 text-opacity-25">
                  {exp.date}
                </span>{" "}
              </h1>

              <div className="flex flex-col gap-[25px] sm:gap-[10px] ml-[20px] sm:ml-[35px]">
                {exp.details.map((det, index) => {
                  return (
                    <div key={index} className="flex gap-[8px] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="4"
                        viewBox="0 0 5 4"
                        fill="none"
                      >
                        <path
                          d="M5 2L0.5 3.73205V0.267949L5 2Z"
                          fill="#64FFDA"
                        />
                      </svg>

                      <p className="font-fira text-[12px] leading-[1.2rem] sm:w-[363px]">
                        {det}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exp;
