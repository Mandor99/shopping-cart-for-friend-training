import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { useCart } from '../context/cartContext';


const Product = ({item}) => {
    const {description, image, price, title} = item
    const {addToCart} = useCart()

  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={image} style={{objectFit: 'contain'}} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='lessTitle'>{title}</Typography>
        <Typography variant="body2" color="text.secondary" className='lessDesc'>{description}</Typography>
        <Typography variant='h5' color="text.secondary" style={{marginTop: '1.5rem', fontWeight:'bold'}}>{price} $</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" style={{width: '100%'}} onClick={() => addToCart(item)} >Add To Cart</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Product