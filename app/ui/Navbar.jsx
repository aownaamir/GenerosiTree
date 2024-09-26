import logo from "@/public/images/logo.png";
import logoCircle from "@/public/images/logo-circle.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full pt-5 h-20 px-5 lg:px-10 flex justify-between items-center">
      <div className="flex ">
        <Image src={logoCircle} alt="logo" width={70} height={70} />
        {/* <h1 className="text-xl">GenerosiTree</h1> */}
      </div>
      <ul className="flex lg:gap-10 text-sm justify-center items-center">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <button className="w-[75px] text-sm h-9 border border-black rounded-lg">
          Login
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
