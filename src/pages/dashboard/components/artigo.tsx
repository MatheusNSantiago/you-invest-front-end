import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { type Artigo as ArtigoComponent } from "../types";

type ArtigoProps = {
  noticia: ArtigoComponent;
  onClick: () => void;
  className?: string;
};

function ArtigoComponent({ noticia, className, onClick }: ArtigoProps) {
  return (
    <motion.div
      className={cn(
        "hover:cursor-pointer hover:shadow-md",
        "rounded-xl p-4 pb-3 border border-white/[0.2] text-white transition duration-200 dark:shadow-[#1e293b]",
        "row-span-1 justify-between flex flex-col space-y-2",
        className,
      )}
      onClick={onClick}
    >
      <img
        src={noticia.capa}
        className="object-cover object-bottom w-full h-full min-h-[6rem] rounded-ml"
      />
      <h1>{noticia.titulo}</h1>
      <div>
        {noticia.categorias.map((categoria, idx) => (
          <Badge variant="outline" key={idx} className="py-1">
            {categoria}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export { ArtigoComponent };
