import React from 'react'
import { Label, Select } from 'flowbite-react'


const SortOptionsComponent = () => {
  return (
    <div id="select">
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="SORT BY"
        />
      </div>
      <Select
        id="countries"
        required={true}
      >
        <option>
          Price: Low To High
        </option>
        <option>
          Price: High To Low
        </option>
        <option>
          Customer Rating
        </option>
        <option>
          Name A-Z
        </option>
        <option>
          Name Z-A
        </option>
      </Select>
    </div>
  )
}

export default SortOptionsComponent