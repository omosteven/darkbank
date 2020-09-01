import React from "react";
import Footer from "../../footer";
import AdminHeader from "./admin-header";
import "./body.css";
import SideBar from "./sidebar";

function AdminDashboard() {
  return (
    <div>
        {/* <AdminHeader/> */}
        {AdminHeader("hello")}
        <SideBar/>
        {/* <MainNavbar/> */}
        {/* <div className="dashview">hhh</div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default AdminDashboard;
