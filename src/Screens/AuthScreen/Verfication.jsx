import React from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const VerificationScreen = () => {
  React.useEffect(() => {
    document.title = "Envoy | Verification";
  }, []);
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col h-[100vh] min-w-full bg-[#F9F9F9]">
      <div className="flex bg-black w-full">
        <div className="bg-envoy_icon bg-no-repeat bg-contain h-10 w-10 m-2 ml-4" />
        <h1 className="text-white font-envoyFont my-auto font-bold text-[24px] p-1">
          Envoy
        </h1>
      </div>
      <div className="flex h-full justify-center items-center flex-col">
        <div className="bg-checkIcon bg-no-repeat bg-contain h-[120px] w-[120px] 2xl:h-[150px] 2xl:w-[150px] m-6" />
        <h1 className="font-bold font-envoyFont text-black text-center px-2 text-[26px] xl:text-[32px]">
          Your Account is now Verified
        </h1>
        <p className="font-envoyFont text-black text-center text-[19px]">
          Press the button below to login.
        </p>
        <button
          className="bg-[#000000] text-white md:h-[45px] w-[250px] mx-auto my-10 p-2 rounded-md font-bold text-xl hover:bg-[#1d1c1c]"
          onClick={() => {
            navigate("/");
          }}
        >
          LOGIN
        </button>
      </div>
      <div className="flex mb-10">
        <Footer />
      </div>
    </div>
  );
};

export default VerificationScreen;
