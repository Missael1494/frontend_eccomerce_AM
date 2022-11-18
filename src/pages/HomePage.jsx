import React from 'react'
import CategoryCardComponent from '../components/CategoryCardComponent'
import ProductCarouselComponent from '../components/ProductCarouselComponent'

const HomePage = () => {
    const categories = [
        "tablets",
        "Monitors",
        "Games",
        "Printers",
        "Software",
        "Cameras",
        "Books",
        "Videos",
    ];

  return (
    <>
        <ProductCarouselComponent />
        <div className='flex flex-wrap w-screen gap-4 mt-5 justify-center'>

        
        {
            categories.map((category, idx) => <CategoryCardComponent key={idx} category={category} idx={idx}/>)
        }
        </div>
        
    </>
  )
}

export default HomePage