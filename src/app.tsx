import { AppProvider } from "@/providers/app";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Dashboard from "./pages/dashboard";
import { LoginRoute, RegisterRoute } from "./features/auth";

function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        {/* <Route */}
        {/*   path="/app" */}
        {/*   element={ */}
        {/*     <ProtectedRoute> */}
        {/*       <MainApp /> */}
        {/*     </ProtectedRoute> */}
        {/*   } */}
        {/* > */}
        {/*   <Route path="/app/discussions" element={<DiscussionsRoute />} /> */}
        {/*   <Route */}
        {/*     path="/app/discussions/:discussionId" */}
        {/*     element={<DiscussionRoute />} */}
        {/*   /> */}
        {/*   <Route path="/app/users" element={<UsersRoute />} /> */}
        {/*   <Route path="/app/profile" element={<ProfileRoute />} /> */}
        {/*   <Route path="/app/" element={<DashboardRoute />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<NotFoundRoute />} /> */}
      </Routes>
    </AppProvider>
  );
}

export default App;
