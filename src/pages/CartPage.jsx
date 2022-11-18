import { Alert, Button, ListGroup } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import CartItemComponent from '../components/CartItemComponent'

const CartPage = () => {
  return (
    <div className='grid grid-cols-12 p-4 gap-4'>
      <div className='col-span-8'>
        <h1>Shopping Cart</h1>
        {Array.from({length: 3}).map((item, idx) => (
          <>
          <ListGroup>
            <ListGroup.Item>
              <CartItemComponent key={idx} />
            </ListGroup.Item>
          </ListGroup>
          </>
        ))}
        <Alert color="info">
          <span>
            <span className="font-medium">
              Info alert!
            </span>
            {' '}Your cart is empty
          </span>
        </Alert>
      </div>
      <div className='col-span-4'>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price <span className="font-bold">{' '}$345</span>
            </ListGroup.Item>
            <ListGroup.Item>
              
              <Link to="/user/cart-details">
                <div>
                  <Button >
                    Proceed to Checkout
                  </Button>
                
                </div>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        
      </div>
    </div>
  )
}

export default CartPage