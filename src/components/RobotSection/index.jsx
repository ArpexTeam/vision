import back from "../../images/Background.jpg";
import "./style.css";

function Robot() {
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 30%",
      }}
      className="bg-black w-full py-20 h-[800px] relative"
    >
      <div className="max-w-[1280px] w-4/5 mr-auto ml-auto h-full relative">
        <div className="flex justify-center content-center w-full h-full flex-wrap text-white -mt-20">
          <h1 className="mb-20 font-[ClashDisplay-Bold] text-[45px]">
            Our Services
          </h1>
          <div className="w-full h-fit flex justify-center">
            <div className="relative w-52 h-20">
              <button className="absolute top-0 -left-9 w-72 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                CGI 3D
              </button>
              <div className="absolute -top-1 -left-10 w-[297px] h-[90px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-b before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
          <div className="w-3/12 flex flex-col gap-5">
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                3D Modeling
              </button>
              <div className="absolute -top-1 right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 right-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
              <p>
                Website creation <br />
                and editing
              </p>
              </button>
              <div className="absolute -top-1 right-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20 ml-auto">
              <button className="absolute top-0 right-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                <p>Graphic <br /> Animation</p>
              </button>
              <div className="absolute -top-1 right-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:from-cyan-600/90 before:to-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
          <div className="w-1/3"></div>
          <div className="w-3/12 flex flex-col gap-5">
            <div className="relative w-52 h-20">
              <button className="absolute top-0 left-11 w-52 h-[70px] font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                3D Animation
              </button>
              <div className="absolute -top-1 left-10 w-[218px] h-[78px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20">
              <button className="absolute top-0 left-[85px] w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                <p>Video <br /> Productions</p>
              </button>
              <div className="absolute -top-1 left-20 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
            <div className="relative w-52 h-20">
              <button className="absolute top-0 left-11 w-52 h-20 font-[ClashDisplay-semibold] text-[20px] text-gray-300
              bg-gradient-to-r from-stone-950 to-gray-950 rounded-lg z-10 flex items-center justify-center">
                Motion Design
              </button>
              <div className="absolute -top-1 left-10 w-[218px] h-[87px] rounded-md z-0 flex items-center justify-center text-gray-300
              before:absolute before:inset-0 before:-z-10 before:rounded-lg 
              before:bg-gradient-to-r before:to-cyan-600/90 before:from-gray-950/10 
              before:p-[2px] before:content-['']">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Robot;
