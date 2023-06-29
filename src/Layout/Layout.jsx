import { AppBar, Box } from "@mui/material";
import React from "react";
import RightBar from "./RightBar";

export default function Layout({ children, setselected }) {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "lightcoral",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
     
    
      <Box sx={{ width: "100%", padding: 1, overflowY: "scroll" }}>
        {children}
      </Box>
    </Box>
  );
}
