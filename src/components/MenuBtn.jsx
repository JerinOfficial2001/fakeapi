import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React, { useState } from "react";

function MenuBtn({ open }) {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
    </Menu>
  );
}

export default MenuBtn;
