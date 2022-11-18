import React from 'react'
import { ListGroup, Button } from 'flowbite-react'
import SortOptionsComponent from '../components/SortOptionsComponent'
import PriceFilterComponent from '../components/filterQueryResultOptions/PriceFilterComponent'
import RatingFilterComponent from '../components/filterQueryResultOptions/RatingFilterComponent'
import CategoryFilterComponent from '../components/filterQueryResultOptions/CategoryFilterComponent'
import AttributesFilterComponent from '../components/filterQueryResultOptions/AttributesFilterComponent'
import ProductForListComponent from '../components/ProductForListComponent'
import PaginationComponent from '../components/PaginationComponent'


const ProductListPage = () => {
  return (
    <div className='grid grid-cols-4'>
        <div className="w-48 ">
          <ListGroup>
            <ListGroup.Item className='mb-3 mt-3'>
                <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item >
              <div className='flex flex-col'>
                <p className='block'>FILTER:</p>
                <PriceFilterComponent />
              </div>
                
            </ListGroup.Item>
            <ListGroup.Item>
                <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
                <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
                <AttributesFilterComponent />
            </ListGroup.Item>
            {/* <ListGroup.Item> */}
              <div>
                <Button>
                  Filter
                </Button>
              </div>
              <div>
                <Button color="failure">
                  Reset Filters
                </Button>
              </div>

            {/* </ListGroup.Item> */}
          </ListGroup>
        </div>
        <div className='col-span-3' >
          {Array.from({ length: 5}).map((_, idx) => (
              <ProductForListComponent 
                key={idx} 
                images={
                  ["games", "monitors", "tablets", "games", "monitors"]
                }
                idx={idx}
                />
          ))}
          
          <PaginationComponent />

        </div>
    </div>
    
  )
}

export default ProductListPage