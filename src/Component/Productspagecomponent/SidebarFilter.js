import React, { useEffect, useState } from 'react'
import { Box, Button, Collapse, Stack, Slider, Typography, TextField, List, ListItem, Checkbox, FormControlLabel, } from '@mui/material'
import InputAdornment from "@mui/material/InputAdornment";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterproduct } from '../../redux/slices/features/productSlice';

const mobileCompanies = [
    "sony",
    "microsoft",
    "logitech G",
    "song",
    "urbanista",
    "xiaomi",
    "boat",
    "samsung",
    "Amkette",
    "apple",
    "Sennheiser",
    "ant esports",
    "CredevZone",
    "panasonic",
    "mivi",
    "JBL",
    "soundcore",
    "Marshall",
    "Bang & Olufsen",
    "Denon",
    "redmi",
    "mi",
    "acer",
    "LG"
];
const mobileMemories = ["8GB", "16GB", "32GB", "64GB", "128GB", "256GB"];
function SidebarFilter() {
    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [checkedItems, setCheckedItems] = useState([]);
    const [price, setPrice] = useState(false);
    const [brand, setBrand] = useState(false);
    const [memory, setMemory] = useState(false);
    const dispatch = useDispatch()

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        console.log(price)
    };
    const handleToggle = (item) => {
        setCheckedItems((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };
    useEffect(() => {
        dispatch(filterproduct(checkedItems))
    }, [dispatch, checkedItems])
    return (
        <Box component={"div"} sx={{ paddingLeft: "2%" }}>
            <Stack direction={"column"} sx={{ gap: `${!price ? "0px" : "30px"}` }}>
                <Button
                    variant="contained"
                    onClick={() => setPrice(!price)}
                    sx={{ borderRadius: "0px", gap: "30px", backgroundColor: "transparent", border: "none ", borderBottom: "1px solid #9f9f9f", color: "black", boxShadow: "none !important", display: "flex", justifyContent: "space-between", padding: "0px", height: "48px", fontSize: "medium", fontWeight: "600" }}
                >
                    Price {price ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
                <Collapse in={price}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack direction={"column"}>
                            <Typography sx={{ color: "#9F9F9F" }}> From</Typography>
                            <span style={{ height: "33px", width: "100px", border: "1px solid #9f9f9f", textAlign: "start", fontWeight: "600", padding: "8px 8px 0px 8px" }}>${priceRange[0]}</span>
                        </Stack>
                        <Stack direction={"column"}>
                            <Typography sx={{ color: "#9F9F9F", textAlign: "end" }}> To</Typography>
                            <span style={{ height: "33px", width: "100px", border: "1px solid #9f9f9f", textAlign: "end", fontWeight: "600", padding: "8px 8px 0px 8px" }}>${priceRange[1]}</span>
                        </Stack>
                    </Stack>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={100}
                        max={5000}
                        step={100}
                        sx={{
                            color: "black"
                        }}
                    />
                </Collapse>
            </Stack>
            <Stack direction={"column"} sx={{ gap: `${!brand ? "0px" : "30px"}` }}>
                <Button
                    variant="contained"
                    onClick={() => setBrand(!brand)}
                    sx={{ borderRadius: "0px", gap: "30px", backgroundColor: "transparent", border: "none ", borderBottom: "1px solid #9f9f9f", color: "black", boxShadow: "none !important", display: "flex", justifyContent: "space-between", padding: "0px", height: "48px", fontSize: "medium", fontWeight: "600" }}
                >
                    Brand {brand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
                <Collapse in={brand}>
                    <Stack direction={"column"} justifyContent={"space-between"}>
                        <TextField
                            variant="outlined"
                            placeholder="Search "
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    width: "100%",
                                    backgroundColor: "#F5F5F5"
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
                        <Box sx={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                            <List>
                                {mobileCompanies.map((item, index) => {
                                    return (
                                        <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkedItems.includes(item)}
                                                        onChange={() => handleToggle(item)}
                                                    />
                                                }
                                                label={item}
                                            />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </Stack>
                </Collapse>
            </Stack>
            <Stack direction={"column"} sx={{ gap: `${!memory ? "0px" : "30px"}` }}>
                <Button
                    variant="contained"
                    onClick={() => setMemory(!memory)}
                    sx={{ borderRadius: "0px", gap: "30px", backgroundColor: "transparent", border: "none ", borderBottom: "1px solid #9f9f9f", color: "black", boxShadow: "none !important", display: "flex", justifyContent: "space-between", padding: "0px", height: "48px", fontSize: "medium", fontWeight: "600" }}
                >
                    Built-in memory {memory ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </Button>
                <Collapse in={memory}>
                    <Stack direction={"column"} justifyContent={"space-between"}>
                        <TextField
                            variant="outlined"
                            placeholder="Search "
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    width: "100%",
                                    backgroundColor: "#F5F5F5"
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
                        <Box sx={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                            <List>
                                {mobileMemories.map((item, index) => {
                                    return (
                                        <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkedItems.includes(item)}
                                                        onChange={() => handleToggle(item)}
                                                    />
                                                }
                                                label={item}
                                            />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </Stack>
                </Collapse>
            </Stack>
        </Box>
    )
}

export default SidebarFilter