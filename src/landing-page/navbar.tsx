import { IoLogoGithub } from "react-icons/io";
import logo from "/logo.png";
import { Separator } from "@/components/ui/separator";

function NavBar() {
  return (
    <nav className="flex gap-6 items-center px-24 w-full h-16 text-white">
      <img
        src={logo}
        alt="logo"
        className="object-cover object-left py-2 h-full"
      />
      <div className="w-full" />
      <a className="font-bold">Foo</a>
      <a className="font-bold">Bar</a>
      <Separator orientation="vertical" className="h-8" />
      <IoLogoGithub size={40} color="white" />
    </nav>
  );
}


export default NavBar;
