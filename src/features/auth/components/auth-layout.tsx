import * as React from "react";

import logo from "@/assets/logo.png";
import { Link } from "@/components/ui/link";
import { cn } from "@/utils/cn";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col pt-24 min-h-screen sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900 via-[#1e0b3b] to-black  items-center  ">
        <Link className="flex items-center text-white" to="#">
          <img className="w-auto h-24" src={logo} alt="Workflow" />
        </Link>
        <div
          className={cn(
            "py-8 px-4 mt-10   sm:px-10 sm:rounded-lg",
            "bg-[#200c3f] shadow-2xl shadow-black  bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-2xl",
            "border-black border-[1px] ",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
