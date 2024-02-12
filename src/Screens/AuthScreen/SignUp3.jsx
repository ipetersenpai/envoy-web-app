import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SignUpPannel3 = ({ seconds = 30 }) => {
  useEffect(() => {
    document.title = "Envoy";
  }, []);

  const [disabled, setdisabled] = useState(true);

  const formalTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes <= 10) minutes = "0" + minutes;
    if (seconds <= 10) seconds = "0" + seconds;
    return seconds + "s";
  };
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setdisabled(false);
    }
  }, [countdown]);

  return (
    <div className="flex absolute w-full h-[100vh] font-envoyFon bg-black bg-opacity-70">
      <div className="mx-auto bg-white 2xl:h-[465px] 2xl:w-[460px] md:w-[390px] md:h-[450px] w-[360px] h-[470px] mt-[10vh] rounded-xl shadow-2xl md:mt-[10vh] flex flex-col text-black">
        <Link to="/signup$">
          <button className="h-10 w-10 ml-4 hover:scale-105 duration-300">
            <ArrowBackIcon
              sx={{
                color: "black",
                marginTop: 2,
                marginLeft: 1.5,
                fontSize: 30,
              }}
            />
          </button>
        </Link>
        <h2 className="font-semibold 2xl:text-[130%] md:text-[120%] text-[120%] ml-[70px] mt-[-1.5rem]">
          Step 3 of 3
        </h2>
        <h1 className="font-bold 2xl:text-[290%] md:text-[260%] text-[290%] ml-7 mt-5">
          SIGN UP
        </h1>
        <p className="font-regular 2xl:text-[110%] md:text-[90%] text-[110%] ml-7 mt-[-0.8rem] mb-7">
          Create your account in quick and easy step.
        </p>
        <h1 className="font-bold 2xl:text-[130%] md:text-[120%] text-[105%] mx-auto mt-5">
          VERIFY YOUR EMAIL ADDRESS
        </h1>
        <p className="font-regular 2xl:text-[110%] md:text-[90%] text-[90%] mx-20 text-center mb-[15%]">
          We have sent you an email for account verification
        </p>

        <button
          //DARIA LNG EH INSERT LINK PARA SA ACTIVATION.
          disabled={disabled}
          className={
            disabled
              ? "bg-[#ffffff] text-gray-300 md:h-[45px] border-2 w-[80%] mx-auto my-4 p-2 rounded-xl font-semibold text-sm mt-1"
              : "bg-[#000000] text-white md:h-[45px] w-[80%] mx-auto my-4 p-2 rounded-xl font-semibold text-sm mt-1 hover:bg-[#1d1c1c]"
          }
          onClick={() => {
            console.log("toplok!");
            window.location.reload(false);
          }}
        >
          RESEND VERIFICATION EMAIL
        </button>

        <p className="mx-auto 2xl:text-[100%] md:text-[85%] text-[100%] ">
          Resend available in{" "}
          <span>
            <button className="text-[#0094FF] 2xl:text-[100%] md:text-[100%] text-[100%] hover:scale-105 duration-300 hover:underline">
              {formalTime(countdown)}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPannel3;
