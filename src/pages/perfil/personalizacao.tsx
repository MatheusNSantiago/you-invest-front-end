import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/api-client";
import { useUser } from "@/stores/user";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Personalizacao() {
  const userStore = useUser();
  const navigate = useNavigate();

  const [etapa, setEtapa] = useState(1);
  const [nome, setNome] = useState("");
  const [sobre, setSobre] = useState("");
  const [preferencias, setPreferencias] = useState("");
  const [canais, setCanais] = useState<any[]>([]);

  return (
    <div
      className={cn(
        "py-8 px-4 mt-10 mx-auto text-white sm:px-10 sm:rounded-lg w-full max-w-3xl",
        "bg-[#200c3f]  bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-2xl",
        "shadow-[0_0px_10px_2px_rgba(21,199,224,0.3)]",
        "border-black border-[1px] ",
        "flex flex-col gap-8",
      )}
    >
      {etapa === 1 && (
        <PrimeiraEtapa
          onNext={async (data) => {
            setNome(data.nome);
            setPreferencias(data.preferencias);
            setSobre(data.sobre);

            const { canais } = (await api.post("/perfil/escolher-canais", {
              bio: data.sobre,
            })) as { canais: string[] };

            setCanais(canais);
            setEtapa(2);
          }}
        />
      )}

      {etapa === 2 && (
        <SegundaEtapa
          nome={nome}
          canais={canais}
          onConcluir={() => {
            const user = {
              email: userStore.email,
              senha: userStore.senha,
              artigos: [],
              nome: nome,
              preferencias: {
                bio: sobre,
                usarBulletPoints: true,
                conteudo: preferencias,
                categorias: canais,
              },
              ehPrimeiraVez: false,
            };

            userStore.setUser(user);
            api.post("/perfil/atualizar", user).then((data) => {
              navigate("/dashboard");
            });
          }}
        />
      )}
    </div>
  );
}

type SegundaEtapaProps = {
  nome: string;
  canais: string[];
  onConcluir: () => void;
};

function SegundaEtapa({ nome, canais, onConcluir }: SegundaEtapaProps) {
  return (
    <>
      <h1 className="my-3 text-3xl font-bold text-center">
        Olá, {nome}! Estamos quase lá!
      </h1>
      <p className="text-center">
        Com base no que você nos contou, sugerimos as seguintes fontes:
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {canais.map((canal) => (
          <Badge key={canal} variant="secondary">
            {canal}
          </Badge>
        ))}
      </div>

      <Button onClick={onConcluir}>Concluir</Button>
    </>
  );
}

type PrimeiraEtapaProps = {
  onNext: ({
    nome,
    sobre,
    preferencias,
  }: {
    nome: string;
    sobre: string;
    preferencias: string;
  }) => void;
};

function PrimeiraEtapa({ onNext }: PrimeiraEtapaProps) {
  const [nome, setNome] = useState("João da Silva");
  const [sobre, setSobre] = useState(
    "Sou investidor focado em insumos agrícolas, com interesse em novas tecnologias, sustentabilidade, e tendências de mercado. Meu objetivo é maximizar retornos e promover práticas agrícolas eficientes.",
  );
  const [preferencias, setPreferencias] = useState(
    "Quero textos resumidos tópicos com o mínimo de jargões técnicos possíveis.Sempre que possível, use tabelas para ilustrar os pontos principais",
  );

  return (
    <>
      <h1 className="my-3 text-3xl font-bold text-center">
        Queremos te conhecer melhor
      </h1>
      <div className="grid gap-2.5 w-full">
        <Label htmlFor="nome">Como devemos te chamar?</Label>
        <Input
          className="bg-background"
          placeholder="João da Silva"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="grid gap-2.5 w-full">
        <Label htmlFor="sobre">Escreva um pouco sobre você</Label>
        <Textarea
          placeholder="Sou investidor focado em insumos agrícolas, com interesse em novas tecnologias, sustentabilidade e tendências de mercado. Busco informações sobre fertilizantes, pesticidas, sementes e mudanças regulatórias que impactam o setor. Meu objetivo é maximizar retornos e promover práticas agrícolas eficientes."
          rows={4}
          id="sobre"
          value={sobre}
          onChange={(e) => setSobre(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Essa descrição será utilizada para personalizar o conteúdo que você
          receberá.
        </p>
      </div>

      <div className="grid gap-2.5 w-full">
        <Label htmlFor="preferencias">
          Como você prefere receber informações?
        </Label>
        <Textarea
          placeholder="Quero textos resumidos tópicos com o mínimo de jargões técnicos possíveis. Sempre que possível, use tabelas para ilustrar os pontos principais"
          rows={4}
          id="preferencias"
          value={preferencias}
          onChange={(e) => setPreferencias(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Essa descrição será utilizada para personalizar o conteúdo que você
          receberá.
        </p>
      </div>

      <Button onClick={() => onNext({ nome, sobre, preferencias })}>
        Continuar
      </Button>
    </>
  );
}
