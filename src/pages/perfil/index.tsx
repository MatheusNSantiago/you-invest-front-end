import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/cn";

function Perfil() {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        "py-8 px-4 mt-10 mx-auto text-white sm:px-10 sm:rounded-lg max-w-3xl",
        "bg-[#200c3f]  bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-2xl",
        "shadow-[0_0px_10px_2px_rgba(21,199,224,0.3)]",
        "border-black border-[1px] ",
        "flex flex-col gap-8",
      )}
    >
      <h1 className="my-3 text-3xl font-bold text-center">
        Personalizar Perfil
      </h1>
      <div className="grid gap-2.5 w-full">
        <Label htmlFor="nome">Como devemos te chamar?</Label>
        <Input
          className="bg-background"
          placeholder="João da Silva"
          id="nome"
          // value=""
          onChange={() => { }}
        />
      </div>
      <div className="gap-2.5 w-full">
        <Label htmlFor="sobre">Escreva um pouco sobre você</Label>
        <Textarea
          placeholder="Sou investidor focado em insumos agrícolas, com interesse em novas tecnologias, sustentabilidade e tendências de mercado. Busco informações sobre fertilizantes, pesticidas, sementes e mudanças regulatórias que impactam o setor. Meu objetivo é maximizar retornos e promover práticas agrícolas eficientes."
          rows={4}
          id="sobre"
          className="my-2 h-40"
          // value=""
          onChange={() => { }}
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
          // value=""
          onChange={() => { }}
        />
        <p className="text-sm text-muted-foreground">
          Essa descrição será utilizada para personalizar o conteúdo que você
          receberá.
        </p>
      </div>

      <Button className="w-full" onClick={() => { }}>
        Continuar
      </Button>
    </div>
  );
}

export default Perfil;
