import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card, Button, ListGroup, Label, Select, Alert, Textarea, TextInput } from 'flowbite-react'
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent"
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom"


const ProductDetailsPage = () => {
  const { id } = useParams()

  var options = {
    scale: 2,
    offset: {vertical: 0, horizontal: 0},
  }

  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options)
    new ImageZoom(document.getElementById("second"), options)
    new ImageZoom(document.getElementById("third"), options)
    new ImageZoom(document.getElementById("fourth"), options)

  }, [])
  

  return (
    <>
    
      <AddedToCartMessageComponent />
      <div className='grid grid-cols-12 mt-5'>
        <div className='col-span-4' style={{zIndex: 1}}>
          <div id="first">
            <img crossOrigin='anonymous' src="/images/games-category.png" alt="" />

          </div>
          <div id="second">
            <img src="/images/monitors-category.png" alt="" />
            
          </div>
          <div id="third">
            <img src="/images/tablets-category.png" alt="" />
            
          </div>
          <div id="fourth">
            <img src="/images/games-category.png" alt="" />
            
          </div> 

        </div>

        <div className='grid grid-cols-12 col-span-8 p-3 gap-3'>
          <div className='col-span-8 '>
            Product name

            <ListGroup>
                <ListGroup.Item>

                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="font-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis non, sequi nulla cumque cum eius cupiditate voluptas similique quod?

                </ListGroup.Item>
            </ListGroup>
          </div>
          <div className='col-span-4'>
            product status, quantity
            
            <div className="w-48">
              <ListGroup>
                <ListGroup.Item>
                  Status in stock
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="font-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div id="select">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="countries"
                        value="Quantity:"
                      />
                    </div>
                    <Select
                      id="countries"
                      required={true}
                    >
                      <option>
                        1
                      </option>
                      <option>
                        2
                      </option>
                      <option>
                        3
                      </option>
                      <option>
                        4
                      </option>
                    </Select>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                <div>
                  <Button color="failure">
                    Add to Cart
                  </Button>
                </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          <div className='col-start-1 col-end-12 mt-5 p-4 overflow-scroll'>
            <h1>REVIEWS</h1>
                <ListGroup>
                  {Array.from({length: 10}).map((item, idx) => (
                    <ListGroup.Item key={idx}>
                      John Doe 
                      <Rating readonly size={20} initialValue={5} />
                      <br />
                      20-09-2001 <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem esse, accusantium porro culpa, maiores, distinctio error debitis quae sed odio magnam nesciunt excepturi provident suscipit vel quibusdam ex nostrum odit.
                    </ListGroup.Item>
                  ))
                  }
                </ListGroup>

            <hr /> send review form
            <Alert
              color="failure"
              //icon={}
            >
              <span>
                <span className="font-medium">
                  Info alert!
                </span>
                {' '}Change a few things up and try submitting again.
              </span>
            </Alert>

  

            <div id="textarea">
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Write a review"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>

            <div id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="rating"
                    value="Your Rating"
                  />
                </div>
                <Select
                  id="rating"
                  required={true}
                >
                  <option value="5">
                    5 (very good)
                  </option>
                  <option value="4">
                    4 (good)
                  </option>
                  <option value="3">
                    3 (average)
                  </option >
                  <option value="2">
                    2 (bad)
                  </option>
                  <option value="1">
                    1 (awful)
                  </option>
                </Select>
            </div>

            <div>
              <Button>
                Default
              </Button>
            </div>

          </div>

            
          
        </div>
      </div>
    </>
    
  )
}

export default ProductDetailsPage