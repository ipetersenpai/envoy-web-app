import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "../Screens/DashboardScreen/global/Topbar";
import Sidebar from "../Screens/DashboardScreen/global/Sidebar";
import Dashboard from "../Screens/DashboardScreen/Dashboard";
import Profile from "../Screens/DashboardScreen/Profile";
import UniversityPost from "../Screens/DashboardScreen/PostScreen/University";
import CeaPost from "../Screens/DashboardScreen/PostScreen/Cea";
import CitcPost from "../Screens/DashboardScreen/PostScreen/Citc";
import CotPost from "../Screens/DashboardScreen/PostScreen/Cot";
import CsmPost from "../Screens/DashboardScreen/PostScreen/Csm";
import CstePost from "../Screens/DashboardScreen/PostScreen/Cste";
import UserTable from "../Screens/DashboardScreen/UserTable";
import WIP from "../Screens/DashboardScreen/WIP";

const DashboardRoute = () => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/posts/university" element={<UniversityPost />} />
          <Route path="/posts/cea" element={<CeaPost />} />
          <Route path="/posts/citc" element={<CitcPost />} />
          <Route path="/posts/cot" element={<CotPost />} />
          <Route path="/posts/csm" element={<CsmPost />} />
          <Route path="/posts/cste" element={<CstePost />} />
          <Route path="/under-development" element={<WIP />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoute;
