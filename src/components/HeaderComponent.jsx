import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    //const [nav, setNav] = useState('')

    const navigate = useNavigate();

    const handleChangeUserMenu = (value) => {
        //setNav(value)
        navigate(value)
       
    }

  return (
    <div className='flex w-full bg-slate-800 p-2 items-center justify-between '>
        <div className='flex items-center'>
            <h2 className='text-slate-100 inline-block mr-2'>BEST ONLINE SHOP</h2>
            <div className='flex items-center'>
                <div className='flex'>
                    <form className='m-auto' action="">
                        {/* <label for="" className='bg-sky-700 p-1'>
                            All
                        </label> */}
                            <select className='bg-sky-700 text-white h-auto hover:cursor-pointer inline-block text-xs' name="" id="cars">
                                <option className='hover:cursor-pointer' value="">All</option>
                                <option className='hover:cursor-pointer' value="">Saab</option>
                                <option className='hover:cursor-pointer' value="">Opel</option>
                                <option className='hover:cursor-pointer' value="">Audi</option>
                            </select>
                        
                        {/* <input type="submit" value="Submit" /> */}
                        

                    </form>
                </div>
                
                <input type="text" className='p-1 inline-block ' />
                <div className='bg-amber-500 p-2 h-8 w-8 flex items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </div>
                
            </div>
            
            
        </div>
        <div>
            <ul className='inline-block'>
                <li className='inline-block text-slate-300 hover:text-slate-50 p-4'><Link to='//admin/users'  >Admin</Link></li>
                <li className='inline-block text-slate-300 hover:text-slate-50 p-4'><Link to='/login'  >Login</Link></li>
                <li className='inline-block text-slate-300 hover:text-slate-50 p-4'><Link to='/register'>Register</Link></li>
                <li className='inline-block text-slate-300 hover:text-slate-50 p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block w-6 h-6 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <Link to='/cart'  >Cart</Link></li>
                {/* <li style="float:right"><a className="active" href="#about">About</a></li> */}
            </ul>

            <form className='inline-block' action="">
                    {/* <label for="" className='bg-sky-700 p-1'>
                        All
                    </label> */}
                        <select onChange={e => handleChangeUserMenu(e.target.value)} className='bg-slate-800 text-white h-auto hover:cursor-pointer inline-block' name="" id="cars">
                            <option className='hover:cursor-pointer' value="">Missael</option>
                            <option className='hover:cursor-pointer' value="/user/my-orders"> My orders</option> 
                             
                            <option className='hover:cursor-pointer' value="/user">My Profile</option>
                            <option className='hover:cursor-pointer' value="">Logout</option>
                        </select>
                    
                    {/* <input type="submit" value="Submit" /> */}
                    

            </form>
        </div>
        
    </div>
    
  )
}

export default HeaderComponent


