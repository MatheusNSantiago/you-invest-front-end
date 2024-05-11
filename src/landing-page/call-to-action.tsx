import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function CallToAction() {
  const words = ["Foque", "no", "que", "é", "importante", "para", "você."].map(
    (word) => ({
      text: word,
      className: word === "você." ? "dark:text-violet-600" : "",
    }),
  );

  return (
    <div className="flex flex-col gap-16 justify-center items-center px-5 mx-auto max-w-3xl text-center mt-44 mb-24">
      <h1 className="font-extrabold tracking-tight scroll-m-20 font-inter">
        <span className="text-4xl text-foreground/95">
          {"Não se distraia no mar de informações"}
        </span>
        <TypewriterEffectSmooth words={words} className="font-extrabold" />
        <span className="font-normal text-white">
          Se mantenha atualizado com artigos relevantes para você e totalmente
          personalizados para o seu perfil.
        </span>
      </h1>
      <HoverBorderGradient className="w-64 rounded-md" >
        Registrar
      </HoverBorderGradient>
    </div>
  );
}

export default CallToAction;
