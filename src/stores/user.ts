import { User } from "@/features/users";
import { Artigo } from "@/pages/dashboard/types";
import { create } from "zustand";

type UserStore = User & {
  setUser: (user: User) => void;
  setArtigos: (artigos: Artigo[]) => void;
};

export const useUser = create<UserStore>()((set) => ({
  uid: "",
  email: "",
  senha: "",
  artigos: [],
  nome: "",
  preferencias: {
    bio: "",
    usarBulletPoints: false,
    conteudo: "",
    categorias: [],
  },
  ehPrimeiraVez: false,
  setUser: (user: User) => set(user),
  setArtigos: (artigos: Artigo[]) => set({ artigos }),
}));
