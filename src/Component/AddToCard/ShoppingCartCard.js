import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementcount,
  decrementcount,
  priceremoveproduct,
} from "../../redux/slices/addtocard/AddtoCardFeatures";
import { removeproduct } from "../../redux/slices/CardFeatures/CardFeaturesSlice";
import ClearIcon from "@mui/icons-material/Clear";

function ShoppingCartCard({ item, index }) {
  const cartItems = useSelector((state) => state.addtocard.cartItems);
  const count = cartItems[item.id] || 1;
  const dispatch = useDispatch();
  const incrementfunctioncount = () => {
    dispatch(incrementcount(item));
  };
  const decrementfunctioncount = () => {
    dispatch(decrementcount(item));
  };
  const removeprodectdata = () => {
    dispatch(removeproduct(item));
    dispatch(priceremoveproduct(item));
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        display: window.innerWidth < 600 ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // height: "160px",
        width: "100%",
        gap: "10px",
        pb:"20px",
      }}
      key={item.id || index}
    >
      <img
        src={item.image}
        alt="//img"
        style={{ height: "91%", width: "25%" }}
      />
      <Typography
        component={"h5"}
        variant="h6"
        sx={{
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        {item.title}
      </Typography>
      <Stack direction={"row"}
      sx={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Button
          sx={{
            color: "black",
            fontSize: "20px",
          }}
          onClick={incrementfunctioncount}
        >
          +
        </Button>
        <span
          style={{
            height: "40px",
            width: "40px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          {count}
        </span>
        <Button
          sx={{
            color: "black",
            fontSize: "20px",
          }}
          onClick={decrementfunctioncount}
        >
          -
        </Button>
        <Typography
          component={"span"}
          variant="span"
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ${item.price}
          <Button
            startIcon={<ClearIcon sx={{ color: "black" }} />}
            onClick={removeprodectdata}
          ></Button>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ShoppingCartCard;
