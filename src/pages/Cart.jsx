import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const crtCart = useCart()
  const navigate = useNavigate()
  const totalProductPrice = (price, qty) => Number(price) * Number(qty)
  const totalCartPrice = (cart) => cart.reduce((sum, product) => sum + Number(product.price * product.qty), 0)

  return (
    <div className='my'>
      {crtCart.cart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell align="center">image</TableCell>
                <TableCell align="center">description</TableCell>
                <TableCell align="center">quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {crtCart.cart.map((product) => {
                const {id, title, image, description, qty, price} = product
                return (
                  <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{title}</TableCell>
                    <TableCell align="center">
                      <img src={image} alt='product' width='100' height='100' style={{objectFit: 'contain'}} />
                    </TableCell>
                    <TableCell align="center">{description}</TableCell>
                    <TableCell align="center">{qty}</TableCell>
                    <TableCell align="center">{totalProductPrice(price, qty)} $</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" onClick={() => crtCart.incQty(product)}>+</Button>
                      <Button variant="contained" onClick={() => crtCart.decQty(product)}>-</Button>
                      <Button variant="contained" onClick={() => crtCart.deleteProduct(id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
              <TableRow>
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell colSpan={4} align='center'>{totalCartPrice(crtCart.cart)} $</TableCell>
              </TableRow>

            </TableBody>
          </Table>
      </TableContainer>
      ) : (
        <p>Cart is empty</p>
      )}
       <Button variant="contained" type='button' onClick={() => navigate('/')}>continue shopping</Button>
       <Button variant="contained" type='button' onClick={() => crtCart.clearCart()}>clear cart</Button>
    </div>
  )
}

export default Cart