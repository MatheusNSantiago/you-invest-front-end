import { Artigo } from "@/pages/dashboard/types";

type Preferencias = {
  bio: string;
  usarBulletPoints: boolean;
  conteudo: string;
  categorias: string[];
};

export type User = {
  uid: string;
  email: string;
  senha: string;
  nome: string;
  artigos: Artigo[];
  preferencias: Preferencias;
  ehPrimeiraVez: boolean;
};
