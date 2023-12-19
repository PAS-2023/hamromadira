import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import "../components/AdminDashboard/dashboard.css";
import DashBoard from "../components/AdminDashboard/DashBoard";

const AdminDashboard = () => {
  return (
    <>
      <NavBar />
      <DashBoard />
      <Footer />
    </>
  );
};

export default AdminDashboard;
