import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto pt-34">
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </>
  );
}
