import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "headphones",
    description: "Cool Headphones.",
    price: "$5000",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F8269%2Fi%2F2015%2F104%2F7%2Fa%2Fcool_abstract_beats_headphones_design___photoshop_by_diggamcam-d8d6v2s.png&f=1&nofb=1",
  },
  {
    id: 2,
    name: "linuxStickers",
    description: "Cool Stickes.",
    price: "$3424",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.275543067.5157%2Fstf%2Csmall%2C600x600.jpg&f=1&nofb=1",
  },
];

function Products() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
