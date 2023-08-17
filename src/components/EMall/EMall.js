import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import mVid from "../../assets/videoMall.mp4";
import restVid from "../../assets/videoRest.mp4";
import recordsVid from "../../assets/videoRecords.mp4";

const EMall = () => {
  const videoLinkTextStyles =
    "font-bold text-4xl pointer-events-none absolute top-16 opacity-80 left-36 text-[#f3efa3] z-10 text-center";
  const linkWrapperStyle = "relative min-w-[40%] p-[1px] rounded";
  const commonLinkStyles =
    "transition duration-200 text-center blur-[0.1vw] hover:blur-0";
  const commonBGcolor = "bg-[#5a6966de]";

  return (
    <div className="all">
      <Navbar title={"E-Mall"} />
      <div className="relative z-[-99]">
        <p className="bg-[#72827ff0] text-[#f3efa3] absolute top-[240px] left-[46%] rotate-[1.8deg] text-[2.5rem] rounded">
          {" "}
          IRT E-Mall{" "}
        </p>
        <video
          src={mVid}
          autoPlay
          loop
          muted
          className="px-1 blur-[1.5px] absolute top-[50px] w-100  opacity-70"
        ></video>
      </div>{" "}
      <header className="px-1 text-[#f3efa3] text-center font-bold">
        <h1 className={`${commonBGcolor} text-[2.5rem] min-h-[50px]`}>
          {" "}
          IRT E-Mall{" "}
        </h1>
        <p className={`text-2xl ${commonBGcolor}`}> Welcome to our E-Mall! </p>
        <p className={`text-xl ${commonBGcolor}`}> Look around and have fun </p>
      </header>
      <main className="min-h-[380px] flex flex-wrap items-center justify-center p-1">
        <div className={linkWrapperStyle}>
          <Link to={"/restaurant"} className={commonLinkStyles}>
            <video
              className="rounded w-[100%]"
              src={restVid}
              muted
              autoPlay
              loop
            ></video>
            <p className={videoLinkTextStyles}>Enter Restaurant</p>
          </Link>
        </div>
        <div className={linkWrapperStyle}>
          <Link
            to="/records"
            className={
              commonLinkStyles + " w-[100%] inline-block hover:opacity-90"
            }
          >
            <video
              className="rounded w-[100%]"
              src={recordsVid}
              muted
              autoPlay
              loop
            ></video>
            <p className={videoLinkTextStyles}>Records Store </p>
          </Link>
        </div>
      </main>
      <Footer page={"E-Mall Landing "} />
    </div>
  );
};

export default EMall;
