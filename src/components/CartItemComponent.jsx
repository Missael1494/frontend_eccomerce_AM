import React from 'react'
import { Select, Label, Button } from 'flowbite-react'


const CartItemComponent = () => {
  return (
    <div className='grid grid-cols-12 items-center center mr-5 gap-2'>
        <div className='col-span-2'>
            <img src="/images/games-category.png" alt="" />

        </div>
        <div className='col-span-3'>
            Logotech series <br />
            Gaming mouse
        </div>
        <div className='col-span-2'>
            <b>$89</b>
        </div>
        <div className='col-span-3'>
            <div id="select">
                <div className="mb-2 block">
                    <Label
                    htmlFor="quantity"
                    value="Select quantity"
                    />
                </div>
                <Select
                    id="quantity"
                    required={true}
                >
                    <option value="1">
                    1
                    </option>
                    <option value="2">
                    2
                    </option>
                    <option value="3">
                    3
                    </option>
                </Select>
            </div>

        </div>
        <div className='col-span-2 mx-auto'>
            <Button color="gray" onClick={() => window.confirm("Are you sure?")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </Button>
        </div>
    </div>
  )
}

export default CartItemComponent