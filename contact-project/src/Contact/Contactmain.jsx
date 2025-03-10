import React from 'react'

export default function Contactmain({fname, lname, contact, gmail, deleteEntry}) {
  return (
        <ul className='w-[700px] flex justify-between items-center'>
          <div className='flex justify-evenly items-center \'>
          <i class="fa-solid fa-circle-user text-3xl" ></i>
          <li className='ml-4'>{fname} {lname}</li>
          </div>
          <li>{contact}</li>
          <li>{gmail}</li>
          <button onClick={deleteEntry}><i class="fa-solid fa-trash text-2xl"></i></button>
          <i class="fa-solid fa-phone text-2xl"></i>
         </ul>
  )
}
