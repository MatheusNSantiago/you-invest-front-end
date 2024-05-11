import Dashboard from "./dashboard";
import LandingPage from "./landing-page";

function App() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? <Dashboard /> : <LandingPage />}
    </>
  );
}

export default App;
