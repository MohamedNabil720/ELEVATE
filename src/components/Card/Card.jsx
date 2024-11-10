import { Link } from "react-router-dom"

export default function Card({ item }) {

    let { image, price, title, rating, id } = item


    return (
        <>

            <div className="flex justify-center flex-col items-center col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3   ">

                <div className="relative p-2 hover:border-green-300 overflow-hidden group">


                    <div className="absolute inset-0 border-2 border-green-300 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>

                    <Link to={`/product-details/${id}`}>
                        <img
                            src={image}
                            alt={title}
                            className="w-[300px] h-[300px] object-cover relative z-10"
                        />
                        <div className="flex flex-col gap-2 relative z-10">
                            <h3 className="mt-2 text-center">{title.split(" ").slice(0, 5).join(" ")}</h3>

                            <div className="flex justify-between mb-2">
                                <p>Price: ${price}</p>
                                <div> <i className="fa-solid fa-star text-yellow-500"></i> <span>{rating.rate}</span></div>
                            </div>
                        </div>
                    </Link>

                    <button
                        type="button"
                        className="focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 relative z-10"
                    >
                        Add to cart
                    </button>
                </div>

            </div>

        </>
    )
}
