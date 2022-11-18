import React from 'react'
import { Pagination } from 'flowbite-react'


const PaginationComponent = () => {
  return (
    <div>
      <Pagination
        currentPage={7}
        //onPageChange={}
        showIcons={true}
        totalPages={100}
      />
    </div>
  )
}

export default PaginationComponent