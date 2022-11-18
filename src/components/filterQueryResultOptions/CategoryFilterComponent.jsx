import React from 'react'
import { Checkbox, Label } from 'flowbite-react'


const CategoryFilterComponent = () => {
  return (
    <div>
      
        <legend className='font-bold mb-2'>
          Category
        </legend>
        {
          ["1", "2"].map((name, id)=> (
            <div
              className="flex"
              id="checkbox"
              key={id}
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  id={`category${id}`}
                  defaultChecked={false}
                  
                />
                <Label
                  htmlFor={`category${id}`}
                  className='hover:cursor-pointer w-12'
                  
                >
                  category
                  
                </Label>
              </div>
            </div>
          ))
        }
        
  </div>
  )
}

export default CategoryFilterComponent