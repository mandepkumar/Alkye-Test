import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
