import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Nav } from "@/components/ui/nav";
import { Separator } from "@/components/ui/separator";
import { Archive, File, Inbox, User } from "lucide-react";
import logo from "@/assets/logo.png";
import { useUser } from "@/stores/user";

type SidebarProps = {
  onClickPerfil: () => void;
};
function Sidebar({ onClickPerfil }: SidebarProps) {
  const { artigos } = useUser();

  return (
    <div className="flex flex-col w-72 border">
      <img src={logo} alt="logo" className="mt-3 mr-14 ml-4" />

      <Separator className="mt-[8px]" />
      <div
        className="flex items-center m-4 cursor-pointer"
        onClick={onClickPerfil}
      >
        <Avatar>
          <AvatarFallback>
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
        <p className="ml-2 font-semibold text-white">Matheus Santiago</p>
      </div>
      <Nav
        isCollapsed={false}
        links={[
          {
            title: "Todos",
            label: artigos.length.toString(),
            icon: Inbox,
            variant: "default",
          },
          { title: "Categoria 1", label: "9", icon: File, variant: "ghost" },
          { title: "Categoria 2", label: "", icon: File, variant: "ghost" },
          { title: "Arquivados", label: "", icon: Archive, variant: "ghost" },
        ]}
      />
    </div>
  );
}

export default Sidebar;
