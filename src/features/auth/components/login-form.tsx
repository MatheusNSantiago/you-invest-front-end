import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useUser } from "@/stores/user";
import { loginWithEmailAndPassword } from "../api/login";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido." }),
  senha: z.string().min(6, { message: "Senha deve ter mais de 6 caracteres" }),
});

export function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const userStore = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "email@gmail.com",
      senha: "123456",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async ({ email, senha }) => {
          const result = await loginWithEmailAndPassword(email, senha);
          if (result.isSuccess()) {
            userStore.setUser(result.value.user);
            onSuccess();
            return;
          }
        })}
      >
        <div className="space-y-5 w-80 text-white">
          <h1
            className="mb-6 text-4xl font-bold center-text fo"
            style={{ fontFamily: "Inter" }}
          >
            Entrar
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email
                  </Label>
                  <FormControl>
                    <Input
                      id="email"
                      className="text-black focus-visible:ring-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="senha" className="text-muted-foreground">
                  Senha
                </Label>
                <FormControl>
                  <Input
                    id="senha"
                    type="password"
                    className="text-black focus-visible:ring-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="h-4" />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
