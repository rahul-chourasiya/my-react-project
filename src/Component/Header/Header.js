import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Button,
  Drawer,
  useMediaQuery,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Navbar from "./Navbar";
import Subnavbar from "./Subnavbar";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const navtext = [
  { name: "Home", path: "/" },
  { name: "About",  },
  { name: "Contact", },
  { name: "Blog",  },
];
const buttonicon = [
  { name: "Phone", icon: <PhoneIphoneOutlinedIcon /> },
  { name: "Computer", icon: <ComputerOutlinedIcon /> },
  { name: "Videogame", icon: <VideogameAssetOutlinedIcon /> },
  { name: "Camera", icon: <CameraAltOutlinedIcon /> },
  { name: "Headphone", icon: <HeadphonesOutlinedIcon /> },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery("(max-width: 960px)");
  const [open, setOpen] = useState(false);
  const { cardproductdata } = useSelector((state) => state.cardfeatures);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ height: "auto", backgroundColor: "#F5F5F5" }}
      >
        <Toolbar
          sx={{
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            display: "flex",
            justifyContent: "center",
            "@media(max-width:962px)": {
              display: "flex",
              justifyContent: "flex-start !important ",
            },
          }}
        >
          <Navbar
            isTabletOrMobile={isTabletOrMobile}
            toggleDrawer={toggleDrawer}
            navtext={navtext}
          />
        </Toolbar>
        <Subnavbar isTabletOrMobile={isTabletOrMobile} />
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, paddingTop: "20px" }}>
          <List>
            {navtext.map((item, i) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton key={i}>{item.name}</ListItemButton>
              </Link>
            ))}
            <IconButton aria-label="favorite">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="user">
              <PersonOutlineIcon />
            </IconButton>
          </List>
          <List>
            <Button
              variant="contained"
              onClick={() => setOpen(!open)}
              sx={{
                marginBottom: 2,
                marginLeft: "10px",
                gap: "30px",
                backgroundColor: "transparent",
                border: "none ",
                color: "black",
                boxShadow: "none !important",
              }}
            >
              Category {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Collapse in={open}>
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                {buttonicon.map((item, index) => (
                  <ListItem disablePadding key={item.name || index}>
                    <Link
                      to="/Productspage"
                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
