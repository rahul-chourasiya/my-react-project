import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Skeleton, Stack } from '@mui/material';

function ProductCardSkeleton() {
    return (
        <Card sx={{
            maxWidth: 245,
            padding: "16px",
            backgroundColor: "#F6F6F6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Stack direction={"row"} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Skeleton variant="circle" width={24} height={24} />
            </Stack>

            <CardMedia
                sx={{
                    height: 160,
                    width: 160,
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto"
                }}
            >
                <Skeleton variant="rectangular" width={160} height={160} />
            </CardMedia>

            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Skeleton variant="text" width="80%" height={30} sx={{ margin: "10px auto" }} />
                <Skeleton variant="text" width="60%" height={25} sx={{ margin: "10px auto" }} />
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Skeleton variant="rectangular" width="80%" height={48} />
            </CardActions>
        </Card>
    );
}

export default ProductCardSkeleton;