import {
  Archive,
  File,
  Inbox,
  User,
} from "lucide-react";
import { Nav } from "./mail/nav";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";
import logo from "@/assets/logo.jpeg";

function Sidebar() {
  return (
    <div className="flex flex-col w-72 border">
      <img src={logo} alt="logo" className="mr-14 ml-2 mt-3" />

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

// type Menu = {
//   label: string;
//   name: string;
//   icon: React.ReactNode;
//   submenu?: Submenu[];
//   href: string;
// };
//
// type Submenu = {
//   name: string;
//   icon: React.ReactNode;
//   href: string;
// };

// export default function Sidebar() {
//   const menus: Menu[] = [
//     {
//       label: "Discover",
//       name: "Home",
//       icon: <Home size={15} className="mr-2" />,
//       href: "/home",
//     },
//     {
//       label: "Discover",
//       name: "Browse",
//       icon: <SquareStack size={15} className="mr-2" />,
//       href: "/home",
//     },
//     {
//       label: "Discover",
//       name: "Playlist",
//       icon: <Play size={15} className="mr-2" />,
//       href: "/home/playlist",
//       submenu: [
//         {
//           name: "Playlist 1",
//           icon: <ListVideo size={15} className="mr-2" />,
//           href: "/home/",
//         },
//         {
//           name: "Playlist 2",
//           icon: <ListVideo size={15} className="mr-2" />,
//           href: "/home/",
//         },
//         {
//           name: "Playlist 3",
//           icon: <ListVideo size={15} className="mr-2" />,
//           href: "/home/",
//         },
//       ],
//     },
//     {
//       label: "Tópicos",
//       name: "Radio",
//       icon: <RadioIcon size={15} className="mr-2" />,
//       href: "/home/",
//     },
//     {
//       label: "Tópicos",
//       name: "Songs",
//       icon: <Music size={15} className="mr-2" />,
//       href: "/home/",
//     },
//     {
//       label: "Tópicos",
//       name: "Made for You",
//       icon: <User size={15} className="mr-2" />,
//       href: "/home/",
//     },
//     {
//       label: "Tópicos",
//       name: "Artist",
//       icon: <Mic2 size={15} className="mr-2" />,
//       href: "/home/",
//     },
//   ];
//
//   const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));
//
//   return (
//     <ScrollArea className="h-screen rounded-md shadow">
//       <div className="md:px-4 sm:p-0 mt-5 w-96">
//         {uniqueLabels.map((label, index) => (
//           <React.Fragment key={label}>
//             {label && (
//               <p
//                 className={`mx-4 mb-3 text-xs text-left tracking-wider font-bold text-slate-300 ${index > 0 ? "mt-10" : ""}`}
//               >
//                 {label}
//               </p>
//             )}
//             {menus
//               .filter((menu) => menu.label === label)
//               .map((menu) => (
//                 <React.Fragment key={menu.name}>
//                   {menu.submenu && menu.submenu.length > 0 ? (
//                     <Accordion
//                       key={menu.name}
//                       type="single"
//                       className="mt-[-10px] mb-[-10px] p-0 font-normal"
//                       collapsible
//                     >
//                       <AccordionItem
//                         value="item-1"
//                         className="m-0 p-0 font-normal"
//                       >
//                         <AccordionTrigger>
//                           <a
//                             key={menu.name}
//                             className="w-full flex justify-start text-xs font-normal h-10 bg-background my-2 items-center p-4 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background rounded-md"
//                           >
//                             <div
//                               className={cn(
//                                 "flex justify-between w-full [&[data-state=open]>svg]:rotate-180",
//                               )}
//                             >
//                               <div className="flex">
//                                 <div className="w-6">{menu.icon}</div>
//                                 {menu.name}
//                               </div>
//                               <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
//                             </div>
//                           </a>
//                         </AccordionTrigger>
//                         <AccordionContent>
//                           {menu.submenu.map((submenu) => (
//                             <a
//                               key={submenu.name}
//                               // href={submenu.href}
//                               className="text-gray-400 mt-0 mb-0 flex text-xs h-10 bg-white dark:bg-background dark:hover:bg-primary dark:hover:text-background my-2 items-center p-4 hover:bg-primary hover:text-white rounded-md"
//                             >
//                               <div className="w-6">{submenu.icon}</div>
//                               {submenu.name}
//                             </a>
//                           ))}
//                         </AccordionContent>
//                       </AccordionItem>
//                     </Accordion>
//                   ) : (
//                     <div key={menu.name}>
//                       <a
//                         // href={menu.href}
//                         className="flex text-xs h-10 bg-white dark:bg-background my-2 items-center p-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md"
//                       >
//                         <div className="w-6">{menu.icon}</div>
//                         {menu.name}
//                       </a>
//                     </div>
//                   )}
//                 </React.Fragment>
//               ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </ScrollArea>
//   );
// }
