import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import RightBar from "./Layout/RightBar";
import Loader from "./components/Loader";

function App() {
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

  return (
    <>
      <Layout setselected={setselected}>
        {isloading && <Loader isloading={isloading} />}
        <Container
          maxWidth="el"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            flexDirection: "column",
            position: "relative",
          }}
        >
          <RightBar setselected={setselected} />
          <Home filtered={filtered} products={products} selected={selected} />
        </Container>
      </Layout>
    </>
  );
}

export default App;
