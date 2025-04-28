import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Logo from "../../Assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  IconButton,
  List,
  ListItemButton,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Navbar({ toggleDrawer, isTabletOrMobile, navtext }) {
  const { cardproductdata } = useSelector((state) => state.cardfeatures);
  return (
    <Stack
      direction={"row"}
      gap={"30px"}
      sx={{
        "@media(max-width:962px)": {
          display: "flex",
          justifyContent: "space-between !important",
          width: "100% !important ",
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Logo} alt="Logo" style={{ height: "32px", width: "96px" }} />
      </Box>
      {!isTabletOrMobile && (
        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search here..."
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px",
                width: "100%",
                backgroundColor: "#E4E4E4",
              },
              "& .MuiOutlinedInput-input": {
                padding: "12px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#757575" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
      <Stack direction={"row"} gap={"30px"}>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            gap: "30px",
          }}
        >
          {!isTabletOrMobile &&
            navtext.map((item, i) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton key={i}>{item.name}</ListItemButton>
              </Link>
            ))}
        </List>
      </Stack>
      {!isTabletOrMobile && (
        <Stack direction={"row"} gap={"20px"}>
          <IconButton aria-label="favorite" size="large">
            <FavoriteBorderIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="cart" size="large">
            <Link to="/ShoppingCart" style={{ color: "black" }}>
              <Badge color="secondary" badgeContent={cardproductdata.length}>
                <ShoppingCartOutlinedIcon fontSize="inherit" />
              </Badge>
            </Link>
          </IconButton>
          <IconButton aria-label="user" size="large">
            <PersonOutlineIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      )}

      {isTabletOrMobile && (
        <Stack 
        direction={"row"}
        sx={{
            display:"flex",
            gap:"30px",
            alignItems:"center"
        }}>
          <Link to="/ShoppingCart" style={{ color: "black" }}>
            <Badge color="secondary" badgeContent={cardproductdata.length}>
              <ShoppingCartOutlinedIcon fontSize="inherit" sx={{marginBottom:'5px'}} />
            </Badge>
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
}

export default Navbar;
