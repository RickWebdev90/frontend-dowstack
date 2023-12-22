import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </>
  )
}
