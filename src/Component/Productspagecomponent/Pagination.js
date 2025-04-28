import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import Cardpage from '../Card/Card'


function PaginationComponent({ product}) {
    const [page, setPage] = useState(1);
    const cardsPerPage = 8;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const paginatedCards = product.slice(
        (page - 1) * cardsPerPage,
        page * cardsPerPage
    );

    return (
        <Stack direction={"column"}>
            <Stack 
            direction={"row"}
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "15px",
              }}>
                {paginatedCards.map((item, index) => {
                    return <Cardpage item={item} key={item.id || index}  />
                })}
            </Stack>
            <Stack
            sx={{
                alignItems:"center",
                padding:"1%"
            }}>
                <Pagination
                    count={Math.ceil(product.length / cardsPerPage)}
                    page={page}
                    boundaryCount={2}
                    onChange={handlePageChange}
                    color="primary"
                    sx={{
                         marginTop: "20px",
                        '& .Mui-selected':{
                            backgroundColor:"black !important",
                            borderRadius:"8px"
                        } }}
                />
            </Stack>
        </Stack>
    )
}

export default PaginationComponent;