import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  createStyles,
} from "@material-ui/core";
import LocalSeeIcon from "@material-ui/icons/LocalSee";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = createStyles({
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
});

function getIconFromType(type) {
  switch (type) {
    case "TYPE_1":
      return <BeachAccessIcon />;
    case "TYPE_2":
      return <LocalSeeIcon />;
    case "TYPE_3":
      return <FitnessCenterIcon />;
    default:
      return <></>;
  }
}

class Item extends Component {
  render() {
    const { type, price, addItemToShoppingCart, classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent classes={{ root: classes.content }}>
          <div className={classes.icon}>{getIconFromType(type)}</div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Typography component="span" className={classes.price}>
            {price} $
          </Typography>
          <Button onClick={addItemToShoppingCart} size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Item);
