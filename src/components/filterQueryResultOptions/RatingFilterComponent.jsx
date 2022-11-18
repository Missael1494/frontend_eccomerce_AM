import React from 'react'
import { Rating } from "react-simple-star-rating";
import { Label, Checkbox } from 'flowbite-react'


const RatingFilterComponent = () => {

  // const onPointerMove = (value: number, index: number) => console.log(value, index)
  return (
    <div>
      <span className='font-bold'>Rating</span>
      {
        Array.from({length: 5}).map((_, idx) => (
          
          <div
          className="flex"
          id="checkbox"
          key={idx}
        >
          <div className="flex items-center gap-2">
            <Checkbox
              id={`accept${idx}`}
              defaultChecked={false}
              
            />
            <Label
              htmlFor={`accept${idx}`}
              className='hover:cursor-pointer w-12'
              
            >
              <Rating readonly size={20} initialValue={2} />
              
            </Label>
          </div>
          
        </div>
        ))

      }

      
      
    </div>
  )
}

export default RatingFilterComponent