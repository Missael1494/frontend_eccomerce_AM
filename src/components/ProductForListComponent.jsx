import React from 'react'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Rating } from "react-simple-star-rating";


const ProductForListComponent = ({images, idx}) => {
  return (
    <div className=" w-3/4 mt-8 mb-12 mr-20 items-center ">
        <Card imgSrc={`/images/${images[idx]}-category.png`}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            hola
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div>
                <Rating readonly size={20} initialValue={5} /> (1)
                <Link to='/product-list'>
                    <Button>
                        see product
                    </Button>
                </Link>
                
            </div>
            
        </Card>
        {/* <Rating readonly size={20} initialValue={3} /> */}
    </div>
  )
}

export default ProductForListComponent