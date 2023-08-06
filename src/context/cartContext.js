import React, {createContext, useContext, useState} from 'react'

export const cartCtx = createContext({})

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        const ProductIsExist = cart.find((pro) => pro.id === product.id)
        if(ProductIsExist) {
            return ProductIsExist.qty+=1
        }else {
        return setCart([...cart, {...product, qty:1}])
        }
    }
    const clearCart = () => {
        return setCart([])
    }
    const deleteProduct = (id) => {
        const newCart = cart.filter(pro => pro.id !== id)
        return setCart(newCart)
    }
    const incQty = (product) => {
        // const found = cart.find(pro => pro.id === product.id)
        // return found.qty+=1
        const newCart = cart.map(prod => prod.id === product.id ? {...prod, qty: prod.qty + 1} : prod)
        return setCart(newCart)
    }
    const decQty = (product) => {
        if(product.qty > 1) {
            const newCart = cart.map(prod => prod.id === product.id ? {...prod, qty: prod.qty - 1} : prod)
            return setCart(newCart)
        } else {
            return deleteProduct(product.id)
        }
    }

  return (
    <cartCtx.Provider value={{cart, addToCart, clearCart, deleteProduct, incQty, decQty}}>{children}</cartCtx.Provider>
  )
}

export const useCart = () => useContext(cartCtx)

