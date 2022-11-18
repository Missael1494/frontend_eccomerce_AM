import React from 'react'
import { Table, Button, TextInput, Checkbox, Spinner,Alert } from 'flowbite-react'
import { Link } from 'react-router-dom'


const UserOrdersPage = () => {
  return (
    <div>
      <h1>My Orders</h1>

      <div className='p-5'>
        <Table>
          <Table.Head>
            <Table.HeadCell>
              #
            </Table.HeadCell>
            <Table.HeadCell>
              User
            </Table.HeadCell>
            <Table.HeadCell>
              Date
            </Table.HeadCell>
            <Table.HeadCell>
              Total
            </Table.HeadCell>
            <Table.HeadCell>
              Delivered
            </Table.HeadCell>
            <Table.HeadCell>
              Oders details
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                1
              </Table.Cell>
              <Table.Cell>
                Sliver
              </Table.Cell>
              <Table.Cell>
                Laptop
              </Table.Cell>
              <Table.Cell>
                $2999
              </Table.Cell>
              <Table.Cell>
                yes
              </Table.Cell>
              <Table.Cell>
                <Link 
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  to="/user/order-details"
                >
                  go to order
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                2
              </Table.Cell>
              <Table.Cell>
                White
              </Table.Cell>
              <Table.Cell>
                Laptop PC
              </Table.Cell>
              <Table.Cell>
                $1999
              </Table.Cell>
              <Table.Cell>
                yes
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                3
              </Table.Cell>
              <Table.Cell>
                Black
              </Table.Cell>
              <Table.Cell>
                Accessories
              </Table.Cell>
              <Table.Cell>
                $99
              </Table.Cell>
              <Table.Cell>
                No
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      
    </div>
  )
}

export default UserOrdersPage