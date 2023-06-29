import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuList from "@mui/material/MenuList";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";

function RightBar({ setselected }) {
  const categories = [
    {
      name: "All",
      value: "",
    },
    {
      name: "Electronics",
      value: "electronics",
    },
    {
      name: "Jewelery",
      value: "jewelery",
    },
    {
      name: "Men's clothing",
      value: "men's clothing",
    },
    {
      name: "Women's clothing",
      value: "women's clothing",
    },
  ];
  return (
    <div
      style={{  display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"space-evenly" }}
    >
      {categories.map((category) => {
        return (
          <Button
            value={category.value}
            sx={{
              cursor: "pointer",
              bgcolor: "rgba(0, 0, 0, 0.358)",
              width: "200px",
              color: "white",
              "&:hover": {
                bgcolor: "white",
                color:"black"
              },
            }}
            onClick={() => {
              setselected(category.value);
            }}
          >
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}

export default RightBar;
