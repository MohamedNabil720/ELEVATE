
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loading from '../Loading'


export default function Products() {

    let [products, setProducts] = useState([])
    let [loading, setIsLoading] = useState(true)

    async function getProducts() {

        await axios.get('https://fakestoreapi.com/products').then(res => {

            setProducts(res.data)
            setIsLoading(false)
        }).catch(err => console.log(err))

    }

    useEffect(() => {

        getProducts()
    }, [])

    return (

        <>

            {
                !loading ? (<div className='grid grid-cols-12 gap-4   mt-10 container'>
                    {
                        products.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>) : (<Loading />)
            }

        </>

    )
}
