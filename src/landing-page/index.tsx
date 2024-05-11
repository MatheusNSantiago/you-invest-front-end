import { Testemunhos } from "./testemunhos";
import Precos from "./precos";
import CallToAction from "./call-to-action";
import NavBar from "./navbar";

function LandingPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900 via-[#1e0b3b] to-black flex flex-col  items-center">
      <NavBar />
      <CallToAction />
      <Testemunhos />
      <Precos />
    </div>
  );
}

export default LandingPage;
