import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Stack from "@mui/material/Stack";
import RightBar from "../Layout/RightBar";

function Home() {
  const Base_URL = "https://fakestoreapi.com";
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(false);


  //fetch method
  const getAllProducts = async () => {
    setisloading(true);
    const result = await fetch(`${Base_URL}/products`)
      .then((res) => res.json())
      .then((res) => res);
    setproducts(result);
    console.log(result);
    setisloading(false);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  //filter method

  const [selected, setselected] = useState("");
  const [filtered, setfiltered] = useState([]);
  console.log(selected);
  const filterCategories = () => {
    const filterdProducts = products.filter(
      (product) => product.category === selected
    );
    setfiltered(filterdProducts);
  };

  useEffect(() => {
    filterCategories();
  }, [selected]);



  //card

  return (
    <>
      {isloading && <Loader isloading={isloading} />}
      <Container
        maxWidth="el"
        sx={{
          backgroundColor: "lavender",
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexDirection: "row",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          container
          rowGap={2}
          columnGap={2}
          direction="row"
        >
          {selected !== ""
            ? filtered.map((category) => {
                return <ProductCard product={category} />;
              })
            : products.map((product) => {
                return <ProductCard product={product} />;
              })}
        </Grid>
        <Stack
          justifyContent="center"
          sx={{
            width: 300,
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <RightBar setselected={setselected} />
        </Stack>
      </Container>
    </>
  );
}

export default Home;
