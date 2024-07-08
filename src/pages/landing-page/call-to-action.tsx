import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useNavigate } from "react-router-dom";

export function CallToAction() {
  const words = ["Foque", "no", "que", "é", "importante", "para", "você."].map(
    (word) => ({
      text: word,
      className: ["para", "você."].includes(word) ? "dark:text-violet-600" : "",
    }),
  );
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16 justify-center items-center px-5 mx-auto mt-44 mb-24  text-center">
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
      <HoverBorderGradient
        className="w-64 rounded-md"
        onClick={() => navigate("/register")}
      >
        Registrar
      </HoverBorderGradient>
    </div>
  );
}

export default CallToAction;
