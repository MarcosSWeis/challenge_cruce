import React from "react";
import { Paper, Card, Grid } from "@material-ui/core";
import CardProduct from "../home/Product-card";
import { Product } from "../../models/Product";
interface ItemProps {
  product: Product;
}

const Item: React.FunctionComponent<ItemProps> = ({ product }) => {
  return (
    <Card>
      <Grid container={true}>
        <CardProduct product={product} />
      </Grid>
    </Card>
  );
};

export default Item;
