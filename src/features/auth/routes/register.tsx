import { useNavigate } from "react-router-dom";
import { Layout } from "../components/auth-layout";
import { RegisterForm } from "../components/register-form";

export const RegisterRoute = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <RegisterForm onSuccess={() => navigate("/dashboard")} />
    </Layout>
  );
};
