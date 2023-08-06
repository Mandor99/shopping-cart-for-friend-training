import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import axios from 'axios'

const Products = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  
  useEffect(() => {
    const getData = async () => {
        setLoading(true)
        setErrMsg('')
        await axios.get('https://fakestoreapi.com/products?limit=8').then(res => {
            setLoading(false)
            setItems(res.data)
        }).catch(err => {
            setLoading(false)
            setErrMsg(err.message)
        })
    }
    getData()
  
  }, [])
// res ==>>  category, description, id, image, price, rating {rate: 3.9, count: 120}, title

  
  return (
    <section className='products'>
        {loading && <p>loading ...</p>}
        {items.length > 0 && items.map((item) => (<Product key={Math.random()} item={item} />))}
        {errMsg.length>0 && <p>{errMsg}</p>}
    </section>
  )
}

export default Products