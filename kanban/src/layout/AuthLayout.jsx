import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AuthLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
