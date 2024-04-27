import noticias from "./assets/noticias.json";
import Sidebar from "@/components/sidebar";
import Searchbar from "./components/searchbar";
import { cn } from "./lib/utils";
import React from "react";
import { Separator } from "./components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "./components/ui/badge";

function App() {
  const [selectedNoticia, setSelectedNoticia] = React.useState<Noticia>();

  return (
    <main className="flex h-full bg-black">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Searchbar onClick={() => { }} />
        <Grid
          noticias={noticias}
          onNoticiaClick={(noticia) => {
            if (selectedNoticia) return setSelectedNoticia(undefined);
            setSelectedNoticia(noticia);
          }}
        />
        <AnimatePresence>
          {selectedNoticia && (
            <NoticiaPopup
              noticia={selectedNoticia}
              onClose={() => setSelectedNoticia(undefined)}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

type GridProps = {
  noticias: Noticia[];
  onNoticiaClick: (noticia: Noticia) => void;
};
function Grid({ noticias, onNoticiaClick }: GridProps) {
  return (
    <div className="grid gap-4 m-4 md:grid-cols-4 md:auto-rows-[18rem]">
      {noticias.map((noticia, idx) => {
        const isImportant = [2, 8].includes(idx);
        return (
          <Noticia
            key={idx}
            noticia={noticia}
            onClick={() => onNoticiaClick(noticia)}
            className={isImportant ? "md:col-span-2" : ""}
          />
        );
      })}
    </div>
  );
}

type Noticia = {
  titulo: string;
  data: string;
  texto: string;
  url: string;
  categorias: string[];
  pontos_chave: string[];
  capa: string;
};
function Noticia({
  noticia,
  className,
  onClick,
}: {
  noticia: Noticia;
  onClick: () => void;
  className?: string;
}) {
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
      <h1 >{noticia.titulo}</h1>
      <div >
        {noticia.categorias.map((categoria) => (
          <Badge variant="outline" className="py-1">
            {categoria}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

type NoticiaPopupProps = {
  noticia: Noticia;
  onClose: () => void;
};
function NoticiaPopup({ noticia }: NoticiaPopupProps) {
  return (
    <motion.div
      className={cn(
        "fixed w-[800px] top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center",
        "bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-95",
        "bg-[#07090d] rounded-md border p-4 shadow-2xl shadow-[#07090c]",
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

export default App;
