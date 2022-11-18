import React from 'react'
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const images = [
    "/images/tablets-category.png",
    "/images/monitors-category.png",
    "/images/games-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",

]

//max-w-sm
const CategoryCardComponent = ({category, idx}) => {
  return (
    <div className=" w-2/6  items-center ">
        <Card imgSrc={images[idx]}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div>
                <Link to='/product-list'>
                    <Button>
                        Go to Category
                    </Button>
                </Link>
                
            </div>
            
        </Card>
    </div>
  )
}

export default CategoryCardComponent