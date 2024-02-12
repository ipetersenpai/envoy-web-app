import React, { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { AuthenticationContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { setLoginAccess } = useContext(AuthenticationContext);
  const [onclick, setOnclick] = useState(true);
  const ClickHandle = (event) => {
    if (onclick === true) {
      setOnclick(false);
      setAnchorEl(event.currentTarget);
    } else if (onclick === false) {
      setOnclick(true);
      setAnchorEl(null);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-white p-2 shadow-md bg-200 w-[100%] text-black">
      <Box
        display="flex"
        className="bg-envoy_icon bg-no-repeat bg-contain h-10"
      >
        <h1 className=" ml-12 font-envoyFont font-bold text-[24px] p-1">
          ENVOY
        </h1>
      </Box>
      {/* //bg-default-profile bg-no-repeat bg-contain h-10 */}
      <Box display="flex">
        <p className="hidden md:flex xl:flex mr-2 font-envoyFont font-normal text-[20px] p-1">
          Mark ZuckerBerg
        </p>
        <IconButton
          sx={{ height: 40, width: 40 }}
          className="bg-default_profile bg-no-repeat bg-contain"
        />
        <IconButton onClick={ClickHandle}>
          {onclick ? (
            <ArrowDropDownIcon sx={{ color: "black" }} />
          ) : (
            <ArrowDropUpIcon sx={{ color: "black" }} />
          )}
        </IconButton>
        <Menu
          display="flex"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={ClickHandle}
          disableSwipeToOpen={false}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              navigate("/under-development");
            }}
          >
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              setLoginAccess(false);
              navigate("/");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Topbar;