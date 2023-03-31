import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";
import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";

function Loader({ isloading }) {
  return (
    <Modal open={isloading}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    </Modal>
  );
}

export default Loader;
