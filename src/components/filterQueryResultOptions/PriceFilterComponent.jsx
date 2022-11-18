import React from 'react'

const PriceFilterComponent = () => {
  return (
    <div className='flex flex-col'>
     
      <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Price no greater than 500$</label>
      <input id="default-range" type="range" min={10} max={1000} step={10} value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>

    </div>
  )
}

export default PriceFilterComponent