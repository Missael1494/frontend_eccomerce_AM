import { Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCarouselComponent = () => {


    ///*sm:h-64 xl:h- 2xl:h-96 
  return (
    
<div className="h-80 object-cover">
  <Carousel slide={false}>
    <div className="object-cover bg-center h-80 bg-no-repeat bg-[url('/images/carousel/carousel-1.png')]  relative">
        <Link to='/product-details'>
            <h3 className='text-white text-center absolute left-0 right-0 bottom-16'>
                BestSeller in Laptops Category
            </h3>
        </Link>
            <p className='text-white text-center absolute left-0 right-0 bottom-10'>
                Dell Inspiron 15 300 Laptop, 15.5 inch HD
            </p>
    
        {/* // <img
            className='h-80 object-cover'
            src="/images/carousel/carousel-1.png "
            alt="..."
        /> */}
    </div>
    
    <div className="object-cover bg-center h-80 bg-no-repeat bg-[url('/images/carousel/carousel-2.png')]  relative">
        <Link to='/product-details'>
            <h3 className='text-white text-center absolute left-0 right-0 bottom-16'>
                BestSeller in Books Category
            </h3>
        </Link>
            <p className='text-white text-center absolute left-0 right-0 bottom-10'>
                World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book
            </p>
    
        {/* // <img
            className='h-80 object-cover'
            src="/images/carousel/carousel-1.png "
            alt="..."
        /> */}
    </div>
    <div className="object-cover bg-center h-80 bg-no-repeat bg-[url('/images/carousel/carousel-3.png')]  relative">
        <Link to='/product-details'>
            <h3 className='text-white text-center absolute left-0 right-0 bottom-16'>
                BestSeller in Cameras Category
            </h3>
        </Link>
            <p className='text-white text-center absolute left-0 right-0 bottom-10'>
                4K Camcorder Video Camera 60FPS 48MP Vlogging Camera for Youtube
                Wifi 16X Digital Camera
            </p>
    
        {/* // <img
            className='h-80 object-cover'
            src="/images/carousel/carousel-1.png "
            alt="..."
        /> */}
    </div>
    
  </Carousel>
</div>

        

  )
}

export default ProductCarouselComponent