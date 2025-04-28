import React from "react";
import { Stack, Button } from "@mui/material";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { Link } from "react-router";

function Subnavbar({ isTabletOrMobile }) {
  return (
    <>
      {!isTabletOrMobile && (
        <Stack
          direction={"row"}
          sx={{
            height: "48px",
            border: "1px solid black",
            paddingLeft: "10% !important ",
            paddingRight: "10% !important",
            paddingTop: "0.5%",
            paddingBottom: "0.5%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#2E2E2E",
            "@media (max-width:1050px)": {
              padding: "5px !important",
            },
          }}
        >
          <Button
            variant="outlined"
            startIcon={<PhoneIphoneOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
              borderRight: "2px solid white",
              borderRadius: "revert",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              Phones
            </Link>
          </Button>
          <Button
            variant="outlined"
            startIcon={<ComputerOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
              borderRight: "2px solid white",
              borderRadius: "revert",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Computer
            </Link>
          </Button>
          <Button
            variant="outlined"
            startIcon={<VideogameAssetOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
              borderRight: "2px solid white",
              borderRadius: "revert",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Videogame
            </Link>
          </Button>
          <Button
            variant="outlined"
            startIcon={<CameraAltOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
              borderRight: "2px solid white",
              borderRadius: "revert",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Camera
            </Link>
          </Button>
          <Button
            variant="outlined"
            startIcon={<HeadphonesOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
              borderRight: "2px solid white",
              borderRadius: "revert",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              Headphones
            </Link>
          </Button>
          <Button
            variant="outlined"
            startIcon={<VideogameAssetOutlinedIcon />}
            sx={{
              color: "white",
              border: "none ",
              width: "17%",
            }}
          >
            <Link
              to="/Productspage"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Watches
            </Link>
          </Button>
        </Stack>
      )}
    </>
  );
}

export default Subnavbar;
