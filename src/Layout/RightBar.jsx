import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuList from "@mui/material/MenuList";
import InputLabel from "@mui/material/InputLabel";

function RightBar({ setselected }) {
  const categories = [
    {
      name: "Show All",
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
    <Stack spacing={2} direction="column">
      <FormControl variant="standard">
        <InputLabel>Category</InputLabel>
        <Select label="Categories" >
          {categories.map((category) => {
            return (
              <MenuList
                value={category.value}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setselected(category.value);
                }}
              >
                {category.name}
              </MenuList>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default RightBar;
