import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import AppNavbar from "../components/AppNavbar"

function MainLayout() {
  return (
   <div className="d-flex flex-column min-vh-100">
    <header>
       <AppNavbar />
    </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
