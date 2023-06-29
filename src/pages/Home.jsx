import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";

function Home({ selected, filtered, products }) {
  //card

  return (
    <>
      <Grid
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
    </>
  );
}

export default Home;
