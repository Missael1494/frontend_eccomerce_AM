import React from 'react'
import { Label, Button, TextInput, Checkbox, Spinner,Alert } from 'flowbite-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [validated, setvalidated] = useState(false)

  const handleSubmit = () => {


    setvalidated(true);
  }

  

  return (
    <div>
        <div className='mb-5 w-1/2 mx-auto'>
        <h1 className='font-bold text-3xl'>Login</h1>

        <Alert
          //color="info"
          color="failure"
          //icon={}
        >
          <span>
            <span className="font-medium">
              Info alert!
            </span>
            {' '}User with that email already exists!.
          </span>
        </Alert>

        <form className="flex flex-col gap-4 mt-3 my-3">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Your password"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              required={true}
              //onChange={onChange}
            />
          </div>
          
          <div className='my-3'>
            Don't you have an account?
            <Link className='text-blue-500' to='/register'>
              Register
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Do Not Logout
            </Label>
          </div>
          <Button type="submit">
            <Spinner aria-label="Spinner button example" />
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage