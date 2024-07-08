import { IoLogoGithub } from "react-icons/io";
import logo from "@/assets/logo.png";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";

function NavBar() {
  return (
    <nav
      className={cn(
        "flex gap-6 items-center px-24 w-full h-[4.5em] text-white",
        "fixed z-50 bg-[#17092d] bg-opacity-80 bg-clip-padding backdrop-filter backdrop-blur-3xl",
      )}
    >
      <img
        src={logo}
        alt="logo"
        className="object-cover object-left py-2 h-full w-fit"
      />
      <div className="w-full" />
      <a href="/login" className="font-bold">Entrar</a>
      <Separator orientation="vertical" className="h-8" />
      <IoLogoGithub size={40} color="white" />
    </nav>
  );
}


export default NavBar;
