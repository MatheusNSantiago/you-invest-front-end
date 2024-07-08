import { motion } from "framer-motion";
import { Artigo } from "../types";
import { cn } from "@/utils/cn";
import { Separator } from "@/components/ui/separator";

type ArtigoPopupProps = {
  noticia: Artigo;
  onClose: () => void;
};

function ArtigoPopup({ noticia }: ArtigoPopupProps) {
  return (
    <motion.div
      className={cn(
        "fixed w-[800px] top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center",
        "bg-[#0b0414] bg-opacity-80 bg-clip-padding backdrop-filter backdrop-blur-3xl",
        "rounded-md border p-4 shadow-2xl shadow-[#07090c]",
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="p-8 text-white rounded-xl">
        <h1 className="text-2xl font-bold">{noticia.titulo}</h1>
        <Separator className="my-5" />
        <ul className="list-disc list-outside">
          {noticia.pontos_chave.map((ponto, i) => (
            <li key={i} className="my-[4.5px]">
              {ponto}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
export default ArtigoPopup
