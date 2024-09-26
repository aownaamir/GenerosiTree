import Image from "next/image";
// import logo from "@/public/images/trans-logo.png";

function Header() {
  return (
    <div className="w-full h-28 border border-black bg-gradient-to-t from-blue-400 via-blue-500 to-blue-400 flex justify-between items-center px-7">
      <div className="flex items-center justify-center">
        <div>
          {/* <Image src={logo} alt="logo" className="w-[80px] h-[60px]" /> */}
        </div>
        <h1 className="text-4xl font-bold">GenerosiTree</h1>
      </div>
      <div>
        <ul className="flex">
          <li>Home&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li>About&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li>Contact&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
