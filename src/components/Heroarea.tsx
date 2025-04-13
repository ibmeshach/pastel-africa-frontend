import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Heroarea = () => {
  return (
    <div className="w-full">
      <div className="py-16 container flex flex-col gap-12">
        <span className="w-fit px-6 py-2.5 rounded-full bg-[#ddd9fd] text-black font-semibold text-lg">
          No-Code WordPress Site Builder
        </span>

        <div className="w-full flex items-stretch justify-between">
          <div className="w-[76%]">
            <h1
              style={{
                lineHeight: "1.1em",
                letterSpacing: "-5px",
              }}
              className="font-semibold text-8xl text-left w-[75%]"
            >
              Break Limits. Build{" "}
              <span className="text-indigo-500 font-medium">Anything</span>. No
              Code Needed.{" "}
            </h1>
          </div>
          <div className="w-[24%] flex flex-col justify-between gap-1">
            <div className="bg-[#ebe8fe] rounded-[1.125rem] p-6 flex-grow">
              <p
                style={{
                  lineHeight: "25.2px",
                  letterSpacing: "-0.36px",
                }}
                className="text-[#605c7a] text-lg"
              >
                Droip is a no-code, drag-and-drop WordPress builder that
                simplifies website creation with powerful capabilities.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center rounded-[1.125rem] gap-2 bg-[#ebe8fe] text-secondary py-3 px-4 font-medium">
                <span className="font-600 text-base">Watch Intro</span>
                <AiOutlinePlayCircle size={20} />
              </button>

              <button className="flex items-center justify-center text-lg gap-1.5 bg-secondary text-white py-2 rounded-[1.125rem]">
                <span>Get started with Droip</span>
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
