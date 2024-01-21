'use client'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function SmallCard(){
    return(
        <Card sx={{maxWidth:400}}>
            <CardMedia 
            component='img'
            alt={product.name}
            height="150"
            image={product.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Add to Cart</Button>
                <Button size='small'>Product Page</Button>
            </CardActions>

        </Card>
    )
}