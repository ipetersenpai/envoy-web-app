import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

import DashboardIcon from "@mui/icons-material/Dashboard";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "white",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <h1>{title}</h1>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      className="flex"
      sx={{
        "& .pro-sidebar-inner": {
          background: "#2E3241 !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 15px 15px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#fffff !important",
        },
        "& .pro-menu-item.active": {
          background: "black !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} className="min-h-screen">
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuIcon
                  sx={{ color: "white", height: "40px", width: "40px" }}
                />
              ) : undefined
            }
          >
            {!isCollapsed && (
              <div className="flex justify-end">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOpenIcon
                    sx={{ color: "white", height: "40px", width: "40px" }}
                  />
                </IconButton>
              </div>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "0px"}>
            <div className="hover:bg-[#4D4D4D] border-b-[0.1px] border-[#4D4D4D]">
              <Item
                title="Dashboard"
                to="/"
                icon={
                  <DashboardIcon
                    sx={{ color: "white", height: "25px", width: "25=px" }}
                  />
                }
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className="hover:bg-[#4D4D4D] border-b-[0.1px] border-[#4D4D4D]">
              <Item
                title="Profile"
                to="/profile"
                icon={
                  <AccountCircleRoundedIcon
                    sx={{ color: "white", height: "25px", width: "25px" }}
                  />
                }
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className="hover:bg-[#4D4D4D] border-b-[0.1px] border-[#4D4D4D]">
              <Item
                title="Reports"
                to="/under-development"
                icon={
                  <AssessmentIcon
                    sx={{ color: "white", height: "25px", width: "25px" }}
                  />
                }
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className="hover:bg-[#4D4D4D] border-b-[0.1px] border-[#4D4D4D]">
              <Item
                title="Help"
                to="/under-development"
                icon={
                  <HelpRoundedIcon
                    sx={{ color: "white", height: "25px", width: "25px" }}
                  />
                }
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;