import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"

export const UserContext = createContext(null);

export default function MainLayout() {

  const [user, setUser]=useState("authenticated")

  return (
    <>
        <UserContext.Provider value={{user, setUser}}>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
        </UserContext.Provider>
    </>
  )
}
