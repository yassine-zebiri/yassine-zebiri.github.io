import Image from "next/image";
import Pic from "assets/404.png"
import Background from "./@background/default";
export default function Custom404() {
    return (
      <div className="p-5">
        <Background/>
        <div className="max-w-[500px] mt-14 sm:mt-0 w-3/4 m-auto animation-pic">
          <Image
          src={Pic}
          width={400}
          height={400}
          alt="404 ..."
          />
        </div>
        <div className="max-w-[500px] m-auto flex flex-col gap-5 items-center text-center text-white mt-5" >
          <h1 className=" text-3xl font-bold">404 - Page not found</h1>
          <p className=" sm:text-lg text-base mt-3 font-semibold">Sorry, we can't find the page you're looking for.</p>
          <a href="/" className="btn btn-primary">
          <span className="text-2xl">go Home</span>
          </a>
        </div>
      </div>
    );
  }