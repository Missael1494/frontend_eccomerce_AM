import React from 'react'
import { Label, Button, TextInput, Checkbox, Spinner,Alert } from 'flowbite-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
  const [validated, setvalidated] = useState(false)

  const handleSubmit = () => {


    setvalidated(true);
  }

  const onChange = () => {
    const password = document.querySelector("input[id=password]")
    const confirm = document.querySelector("input[id=password2]")
    //console.log('confirm', confirm)
    if(confirm.value === password.value) {
      confirm.setCustomValidity("")
      //console.log('es igual')
    } else {
      confirm.setCustomValidity("Passwords do not match")
    }

  }

  return (
    <div className='mb-5 w-1/2 mx-auto'>
      <h1 className='font-bold text-3xl'>Register</h1>

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
              htmlFor="name"
              value="Your Name"
            />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Your name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="lastname"
              value="Your Last Name"
            />
          </div>
          <TextInput
            id="lastname"
            type="text"
            placeholder="Your name"
            required={true}
          />
        </div>
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
            onChange={onChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password2"
              value="Repeat password"
            />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            onChange={onChange}

          />
        </div>
        <div className='my-3'>
          Do you have an account already?
          <Link className='text-blue-500' to='/login'>
            Login
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          <Spinner aria-label="Spinner button example" />
          Submit
        </Button>
      </form>
    </div>
  )
}

export default RegisterPage