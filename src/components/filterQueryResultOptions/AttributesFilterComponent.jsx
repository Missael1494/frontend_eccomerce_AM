import React from 'react'
import { Checkbox, Label } from 'flowbite-react'


const AttributesFilterComponent = () => {
  return (

    <>
    {
      [{color: ["red", "blue", "green"]}, {ram: ["1TB", "2TB"]}].map((item, idx) => (
        <div
          className="block gap-4"
          id="checkbox"
          key={idx}
        >
          <div className=''>
            <p className=''>{Object.keys(item)}</p>
            {item[Object.keys(item)].map((i, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Checkbox
                  id={i}
                  defaultChecked={false}
                />

                <Label htmlFor={i}>
                  <b>{i}</b>

                </Label>

              </div>

          ))}

          </div>
            
          
        </div>
      ))
    }
      
    </>
    
    
  )
}

export default AttributesFilterComponent