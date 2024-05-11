import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Precos() {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);

  const plans = [
    {
      title: "Básico",
      monthlyPrice: 10,
      yearlyPrice: 100,
      description: "O plano ideal para quem está começando",
      features: ["1 usuário", "200 artigos por mês"],
      actionLabel: "Começar",
    },
    {
      title: "Profissional",
      monthlyPrice: 25,
      yearlyPrice: 250,
      description: "Perfeito para executivos e investidores experientes",
      features: [
        "Até 3 usuários",
        "1000 artigos por mês",
        "Suporte prioritário",
      ],
      actionLabel: "Começar",
      popular: true,
    },
    {
      title: "Empresarial",
      price: "",
      description:
        "Suporte e infraestrutura dedicados para atender às suas necessidades",
      features: [
        "Artigos ilimitados",
        "Suporte 24/7",
        "Integração com sistemas internos",
      ],
      actionLabel: "Contate-nos",
      exclusive: true,
    },
  ];
  return (
    <div className="py-8 text-white">
      <PricingHeader
        title="Planos e Preços"
        subtitle="Escolha o plano que melhor se encaixa nas suas necessidades"
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col gap-8 justify-center mt-8 sm:flex-row sm:flex-wrap">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />;
        })}
      </section>
    </div>
  );
}

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="pt-1 text-xl">{subtitle}</p>
    <br />
  </section>
);

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="mx-auto w-40" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Mensal
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Anual
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
}: PricingCardProps) => (
  <Card
    className={cn(
      `w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`,
      {
        "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
          exclusive,
      },
    )}
  >
    <div>
      <CardHeader className="pt-4 pb-8">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">
              {title}
            </CardTitle>
            <div
              className={cn(
                "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                {
                  "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                    popular,
                },
              )}
            >
              Poupe ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">
            {title}
          </CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {yearlyPrice && isYearly
              ? "$" + yearlyPrice
              : monthlyPrice
                ? "$" + monthlyPrice
                : "Personalizado"}
          </h3>
          <span className="flex flex-col justify-end mb-1 text-sm">
            {yearlyPrice && isYearly ? "/ano" : monthlyPrice ? "/mês" : null}
          </span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="inline-flex relative justify-center items-center px-6 w-full font-medium text-white bg-black rounded-md transition-colors dark:text-black dark:bg-white focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-slate-400 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-sm text-zinc-700 dark:text-zinc-300">{text}</p>
  </div>
);
