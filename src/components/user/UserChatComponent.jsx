import React, { useState } from 'react'
import {Button} from 'flowbite-react'
const UserChatComponent = () => {
  const [chatIcon, setchatIcon] = useState(true)

  const chatIconButton = () => {
    setchatIcon(!chatIcon)
  }
  console.log('CHATICON ',chatIcon )

  return (
    <div>
      {/* <input className='peer/check  ' type="checkbox" id='check'/> */}
      {/* <label htmlFor='check'  id='checa' className='peer/checa peer-checked/check:bg-blue-300 peer-checked/check:checked fixed right-3 bottom-8 cursor-pointer bg-blue-800 rounded-full w-12 h-12 z-10 flex justify-center items-center' > */}
      {
        chatIcon ?
        (
          <>
            <div onClick={chatIconButton} htmlFor='check' className='peer-checked/check:hidden fixed right-3 bottom-8 cursor-pointer bg-blue-800 rounded-full w-12 h-12 z-10 flex justify-center items-center' >
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 comment stroke-white stroke-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <span className='absolute top-0 p-2 bg-red-600 border border-white rounded-full -translate-x-2/4 -translate-y-2/4'>

              </span>
            </div>
            <div className='z-10 w-80 fixed right-5 bottom-24 bg-white rounded-md'>
              <div className='bg-blue-800 p-3 mb-2 text-white'>
                <h6>Let's Chat - Online</h6>
              </div>
              <div className='p-4'>
                {/* <p className='m-2'>Chat history</p> */}
                <div className='overflow-auto max-h-72' >
                {
                  Array.from({ length: 20}).map((_, id) => (
                    <div key={id}>
                        <p>
                        <b>You Wrote:</b> Hello, World! This a toast message
                      </p>
                      <p className='bg-cyan-700 p-3 text-slate-100 rounded-3xl ml-9'>
                        <b>Support wrote:</b> Hello World
                      </p>
                    
                    </div>
                      

                  ))
                }
                </div>
                
                <textarea className='m-2 resize-none focus:shadow-inherit' name="" id="" cols="30" rows="3" placeholder='Your Text message'>

                </textarea>
                  <div>
                    <Button className='m-2' color="success">
                      Success
                    </Button>
                  </div>
              </div>
              
            </div>
          </>
          
          
        )
          :
          (
            <div onClick={chatIconButton} htmlFor='check' className=' peer-checked/check:flex fixed right-3 bottom-8 cursor-pointer bg-blue-800 rounded-full w-12 h-12 z-10 justify-center items-center flex' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 close stroke-white stroke-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className='absolute top-0 p-2 bg-red-600 border border-white rounded-full -translate-x-2/4 -translate-y-2/4'>
          </span>
        </div>
        
          )
      }
        {/* <div onClick={chatIconButton} htmlFor='check' className='peer-checked/check:hidden fixed right-3 bottom-8 cursor-pointer bg-blue-800 rounded-full w-12 h-12 z-10 flex justify-center items-center' >
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 comment stroke-white stroke-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        </div>
        <div onClick={chatIconButton} htmlFor='check' className=' peer-checked/check:flex fixed right-3 bottom-8 cursor-pointer bg-blue-800 rounded-full w-12 h-12 z-10 justify-center items-center hidden' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 close stroke-white stroke-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div> */}
        
      {/* </label> */}
      
      </div>
  )
}

export default UserChatComponent