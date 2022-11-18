import React, { useState } from 'react'
import { Alert } from 'flowbite-react'
import { Link } from 'react-router-dom';


const AddedToCartMessageComponent = () => {
    const [show, setShow] = useState(false);
    console.log("El show", show)

    return(
    
            <div>
                {show && (
                    <Alert
                        color="failure"
                        rounded={false}
                        withBorderAccent={true}
                        onDismiss={() => setShow(false)}
                        additionalContent={
                            <React.Fragment><div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</div>
                                <div className="flex">
                                    <button /*onClick={() => setShow(false)}*/ type="button" className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white">Go back</button>
                                    <Link to='/cart' >
                                        <button /*onClick={() => setShow(false)}*/ type="button" className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white">Go to cart</button>
                                    </Link>
                                </div>
                                
                            </React.Fragment>}
                        // //icon={}
                        >
                        <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
                            This is a info alert
                        </h3>
                    </Alert>
        
                    )
                }
            </div>
                
        

    )
}

export default AddedToCartMessageComponent