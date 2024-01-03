import React from 'react'

function FilterMobile() {
  return (
    <div className='flex items-center gap-5'>
    <span>
      <select className='cursor-pointer bg-gray-300 text-center rounded-xl px-1 py-1 font-light shadow-inner shadow-gray-600'>
        <option>BRAND</option>
        <option>Samsung</option>
        <option>Xiaomi</option>
        <option>Apple</option>
        <option>Oppo</option>
        <option>Vivo</option>
        <option>Oneplus</option>
        <option>Realme</option>
      </select>
      </span>
      <span>
      <select className='cursor-pointer bg-gray-300 text-center rounded-xl px-1 py-1 font-light shadow-inner shadow-gray-600'>
        <option>PRICE</option>
        <option>Under 10000</option>
        <option>Under 20000</option>
        <option>under 30000</option>
        <option>30000+</option>
      </select>
      </span>
      <span>
      <select className='cursor-pointer bg-gray-300 text-center rounded-xl px-1 py-1 font-light shadow-inner shadow-gray-600'>
        <option>RAM</option>
        <option>2GB</option>
        <option>3GB</option>
        <option>4GB</option>
        <option>8Gb</option>
        <option>12GB</option>
        <option>16GB</option>
        <option>Portable</option>
      </select>
      </span>
      <span>
      <select className='cursor-pointer bg-gray-300 text-center rounded-xl px-1 py-1 font-light shadow-inner shadow-gray-600'>
        <option>STORAGE</option>
        <option>32GB</option>
        <option>64GB</option>
        <option>128GB</option>
        <option>256GB</option>
        <option>Portable</option>
      </select>
      </span>
      <span>
      <select className='cursor-pointer bg-gray-300 text-center rounded-xl px-1 py-1 font-light shadow-inner shadow-gray-600'>
        <option>PROCESSOR</option>
        <option>Mediatek</option>
        <option>Spreadtrum</option>
        <option>Intel</option>
        <option>Google</option>
        <option>Apple</option>
      </select>
      </span>
  
  </div>
  )
}

export default FilterMobile