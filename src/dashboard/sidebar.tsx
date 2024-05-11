import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Nav } from "@/components/ui/nav";
import { Separator } from "@/components/ui/separator";
import {
  Archive,
  File,
  Inbox,
  User,
} from "lucide-react";
import logo from "/logo.png";

function Sidebar() {
  return (
    <div className="flex flex-col w-72 border">
      <img src={logo} alt="logo" className="mr-14 ml-4 mt-3" />

      <Separator className="mt-[8px]"/>
      <div className="flex items-center m-4">
        <Avatar>
          <AvatarFallback>
            <User className=" text-white" />
          </AvatarFallback>
        </Avatar>
        <p className=" ml-2 text-white font-semibold">Matheus Santiago</p>
      </div>
      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Todos",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Categoria 1",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Categoria 2",
            label: "",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Arquivados",
            label: "",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
</div>
  );
}

export default Sidebar;
