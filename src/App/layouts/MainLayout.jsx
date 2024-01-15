import { useState } from "react";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../hooks/UserContext.jsx";

export default function MainLayout() {
  const [user, setUser] = useState("authenticated");

  return (
    <UserProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserProvider>
  );
}
