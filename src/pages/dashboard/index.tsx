// import noticias from "public/noticias.json";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/sidebar";
import Searchbar from "./components/searchbar";
import { Artigo } from "./types";
import { ArtigoComponent } from "./components/artigo";
import { AnimatePresence } from "framer-motion";
import ArtigoPopup from "./components/artigoPopup";
import { useUser } from "@/stores/user";
import Personalizacao from "../perfil/personalizacao";
import { useOnClickOutside } from "usehooks-ts";

import { api } from "@/lib/api-client";
import Perfil from "../perfil";
import ilustracao from "@/assets/undraw_content_re_33px.svg";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  const ref = useRef(null);
  const [selectedArtigo, setSelectedArtigo] = useState<Artigo>();
  let { artigos, setArtigos, ehPrimeiraVez, email, nome } = useUser();
  const [atualizar, setAtualizar] = useState(!ehPrimeiraVez);
  const [isPerfilOpen, setIsPerfilOpen] = useState(false);

  useEffect(() => () => setAtualizar(true), [nome]);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoArtigos"],
    enabled: atualizar,
    retry: 1,
    queryFn: () => api.post("/artigos", { email }),
    select: function(data) {
      setArtigos(data as unknown as Artigo[]);
      setAtualizar(false);
      return data;
    },
  });

  useOnClickOutside(ref, () => setIsPerfilOpen(false));

  return (
    <main className="bg-gradient-to-r from-[#16082b] to-black flex ">
      <Sidebar onClickPerfil={() => setIsPerfilOpen(true)} />
      <div className="flex flex-col w-full">
        <Searchbar onClick={() => { }} />
        {ehPrimeiraVez && <Personalizacao />}
        <div ref={ref}>{isPerfilOpen && <Perfil />}</div>
        <div className="grid gap-4 m-4 md:grid-cols-4 md:auto-rows-[18rem]">
          {artigos.length > 0 ? (
            artigos.map((artigo, idx) => {
              const isImportant = [2, 8].includes(idx);
              return (
                <ArtigoComponent
                  key={idx}
                  noticia={artigo}
                  onClick={() => {
                    const isPopupOpen = selectedArtigo !== undefined;
                    if (isPopupOpen) return setSelectedArtigo(undefined);

                    setSelectedArtigo(artigo);
                  }}
                  className={(() => {
                    let className = "";
                    if (isImportant) className += "md:col-span-2";
                    if (artigo === selectedArtigo) className += "shadow-2xl ";

                    return className;
                  })()}
                />
              );
            })
          ) : (
            <SemArtigos />
          )}
        </div>
        <AnimatePresence>
          {selectedArtigo && (
            <ArtigoPopup
              noticia={selectedArtigo}
              onClose={() => setSelectedArtigo(undefined)}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function SemArtigos() {
  return (
    <div className="z-[-10] flex flex-col absolute inset-0 justify-center items-center">
      <img src={ilustracao} height="500px" width="500px" />
      <p className="my-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
        Você não possui artigos.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Vá para seu perfil e escolha seu feed
      </p>
    </div>
  );
}

export default Dashboard;
