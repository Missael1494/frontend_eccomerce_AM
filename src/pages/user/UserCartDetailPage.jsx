import React from 'react'
import { Select, Label, TextInput, Checkbox, Button, Alert, ListGroup} from 'flowbite-react'
import CartItemComponent from '../../components/CartItemComponent'


const UserCartDetailsPage = () => {
  return (
    <div className="mt-2 p-5" >
      <h1 className="font-bold text-4xl">Cart Details</h1>
      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-4 mb-2">
          <h2 className="text-xl font-bold mb-4" >Shipping</h2>
          <b>Name</b>: Missael Gallegos <br />
          <b>Address</b>: Dalias #221-A Col.Las Flores Aguascalientes,MX <br />
          <b>Phone</b>: 449 123 7856

          <Alert
            className="mt-2"
            color="failure"
            //icon={HiInformationCircle}
          >
            <span>
              <span className="font-medium">
                Info alert!
              </span>
              {' '}Not delivery. In order to make order, fill out your profile with correct address, city etc.
            </span>
          </Alert>
        </div>
        
        <div className="col-span-4">
          <h2 className="text-xl font-bold mb-4">Payment method</h2>
          <div className="mb-2" id="select">
            <div className="mb-2 block">
              <Label
                htmlFor="payment"
                value="Select your pay method"
              />
            </div>
            <Select
              id="payment"
              required={true}
            >
              <option>
                Paypal
              </option>
              <option>
                Cash On Delivery (delivery may be delayed)
              </option>
              
            </Select>
          </div>
          <Alert color="info">
            <span>
              <span className="font-medium">
                
              </span>
              {' '}Not paid yet.
            </span>
          </Alert>
        </div>
        <div className="col-span-4">
          <h2 className="text-xl font-bold mb-4">Order summary</h2>
          <div className="">
          <ListGroup>
            <ListGroup.Item>
              items price (after tax): <span className="font-bold">{' '}$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="font-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="font-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Total price: <span className="font-bold"> $904</span>
            </ListGroup.Item>
          </ListGroup>
          <div className="mt-3">
            <Button color="failure">
              Pay for the order
            </Button>
          </div>
        </div>
        </div>

        <div className="col-span-8 mt-2">
          <h1 className="text-2xl font-bold">Order items</h1>
          {Array.from({length: 3}).map((item, idx) => (
            <CartItemComponent key={idx} />
          ))} 
        </div>
      </div>
    </div>
  )
}

export default UserCartDetailsPage