import { useNavigate } from "react-router-dom";
import { Layout } from "../components/auth-layout";
import { LoginForm } from "../components/login-form";

export const LoginRoute = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <LoginForm onSuccess={() => navigate("/dashboard")} />
    </Layout>
  );
};
