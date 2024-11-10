import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'

export default function Details() {

    let { id } = useParams()



    let [products, setProducts] = useState([])
    let [loading, setIsLoading] = useState(true)


    async function getProduct() {

        await axios.get('https://fakestoreapi.com/products/' + id).then(res => {
            setProducts(res.data)
            setIsLoading(false)
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {
                !loading ? (<div className='min-h-[80vh] flex justify-center items-center mt-10 container gap-6 lg:flex-row flex-col'>

                    <img src={products.image} alt="" className='w-[400px]' />

                    <div className='flex flex-col gap-4'>

                        <h3 className='text-3xl'>{products.title}</h3>
                        <p>{products.description}</p>
                        <div className='flex justify-between'>
                            <div> <i className="fa-solid fa-star text-yellow-500"></i> {products?.rating?.rate} </div>
                            <span> price : ${products.price}</span>
                        </div>

                        <button
                            type="button"
                            className="focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 relative z-10"
                        >
                            Add to cart
                        </button>
                    </div>

                </div>) : (<Loading />)
            }
        </>
    )
}
