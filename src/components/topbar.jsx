import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Badge,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: "white",
  },
}));

export const Topbar = ({ shoppingCartCount, handleClearCart }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const onClearCart = () => {
    handleClearCart();
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography component="h2">Example app</Typography>
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <IconButton size="small" onClick={handleOpenMenu}>
              <ShoppingCartOutlinedIcon className={classes.icon} />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
        <MenuItem onClick={onClearCart}>Clear cart</MenuItem>
      </Menu>
    </div>
  );
};
