import React from 'react'

function CategoryCard({text}) {
  return (
    <div className='h-18 w-50  border-gray-300 text-l font-semibold text-black pt-[6%] pl-[20%] border-2 rounded-3xl hover:cursor-pointer'>
      <p>{text}</p>


      
    </div>
  )
}

export default CategoryCard
