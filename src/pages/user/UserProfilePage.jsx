import React from 'react'
import { Label, Button, TextInput, Checkbox, Spinner,Alert } from 'flowbite-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserProfilePage = () => {
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
    <div className='mb-5 w-1/2 mx-auto p-3'>
      <h1 className='font-bold text-3xl'>User Profile</h1>

      <Alert
        //color="info"
        color="failure"
        //icon={}
      >
        <span>
          <span className="font-medium">
            Info alert!
          </span>
          {' '}User updated.
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
            defaultValue='Misa'
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
            value="misa@gmail.com if you want to change email, remove account and create new one with new email address"
            required={true}
            disabled
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phone"
              value="Phone Number"
            />
          </div>
          <TextInput
            id="phone"
            type="text"
            required={true}
            //onChange={onChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Address"
              value="Address"
            />
          </div>
          <TextInput
            id="Address"
            type="text"
            required={true}
            //onChange={onChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="country"
              value="Country"
            />
          </div>
          <TextInput
            id="country"
            type="text"
            required={true}
            //onChange={onChange}

          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="zip"
              value="Zip Code"
            />
          </div>
          <TextInput
            id="zip"
            type="text"
            required={true}
            //onChange={onChange}

          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="city"
              value="City"
            />
          </div>
          <TextInput
            id="city "
            type="text"
            required={true}
            //onChange={onChange}

          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="state"
              value="State"
            />
          </div>
          <TextInput
            id="state"
            type="text"
            required={true}
            //onChange={onChange}

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
        
        
        <Button type="submit">
          update
        </Button>
      </form>
    </div>
  )
}

export default UserProfilePage