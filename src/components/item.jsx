import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 200,
  },
  icon: {
    "& svg": {
      width: "3em",
      height: "3em",
      fontSize: "2rem",
    },
    paddingBottom: 20,
    borderBottom: "1px solid #252525",
  },
  content: {
    paddingBottom: 10,
  },
  price: {
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
  },
}));

function getIconFromType(type) {
  switch (type) {
    case "1":
      return <AppleIcon />;
    case "2":
      return <AndroidIcon />;
    case "3":
      return <FitnessCenterIcon />;
    default:
      return <></>;
  }
}

export const Item = ({ type, price, addItemToShoppingCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent classes={{ root: classes.content }}>
        <div className={classes.icon}>{getIconFromType(type)}</div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Typography component="span" className={classes.price}>
          {price} $
        </Typography>
        <Button onClick={addItemToShoppingCart} size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
