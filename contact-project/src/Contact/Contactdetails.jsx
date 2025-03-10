import React, { useState } from 'react'
import Contactmain from './Contactmain'

var showContact =[]

export default function Contactdetails() {
    const [addContact, setAddcontact] = useState(showContact)
    const [searchContact, setSearchcontact] = useState("")
  
      const [firstname, setFirstname] = useState("")
      const [lastname, setLastname] = useState("")
      const [contacts, setContact] = useState("")
      const [gmail, setGmail] = useState("")

      const filterlist = addContact.filter((con)=>
      con.fname.toLowerCase().startsWith(searchContact.toLowerCase())
      )
      
      const deletedata = (index) =>{
        addContact.splice(index, 1)
        setAddcontact([...addContact])
      }
  return (
    <><div className='bg-[#faedcd] h-20 flex items-center shadow-sm shadow-[#d4a373]'>
    <h1 className='ml-5 text-3xl'>Contact</h1>
    <div>
    <input type="text" onChange={(a)=> setSearchcontact(a.target.value)} 
    placeholder='Search' className='ml-24 w-96 p-2 ring-2 ring-[#d4a373] rounded-lg outline-0 
    hover:ring-[#99582a] focus:ring-[#99582a]' value={searchContact}/>
    </div>
  </div>
  
  <div className='flex'>
    <div className='bg-[#d4a373] min-h-screen w-96'>
      <div className='flex flex-col justify-center items-center w-80 
      bg-[#faedcd] h-96 mt-8 ml-8 rounded-lg shadow-xl'>

        <input type="text" 
      onChange={(c)=> setFirstname(c.target.value)}
      placeholder=' Firstname' 
      className='p-2 mb-4 w-72 ring-2 ring-[#d4a373] rounded-lg outline-0 
      hover:ring-[#99582a] focus:ring-[#99582a]'
      value={firstname}/>

        <input type="text" 
      onChange={(c)=> setLastname(c.target.value)}
      placeholder=' Lastname'
      className='p-2 mb-4 w-72 ring-2 ring-[#d4a373] rounded-lg outline-0 
      hover:ring-[#99582a] focus:ring-[#99582a]' 
      value={lastname}/>

        <input type="text" 
      onChange={(c)=> setContact(c.target.value)}
      placeholder=' Contact No.' 
      className='p-2 mb-4 w-72 ring-2 ring-[#d4a373] rounded-lg outline-0 
      hover:ring-[#99582a] focus:ring-[#99582a]'
      value={contacts}/>

        <input type="text" 
      onChange={(c)=> setGmail(c.target.value)}
      placeholder=' Gmail' 
      className='p-2 mb-4 w-72 ring-2 ring-[#d4a373] rounded-lg outline-0 
      hover:ring-[#99582a] focus:ring-[#99582a]'
      value={gmail}/>

       <button
       className='bg-[#d4a373] w-24 h-9 rounded-md hover:bg-[#99582a] hover:text-[#faedcd] mt-3'
       onClick={()=>{
         setAddcontact([...addContact,
          {
            fname:firstname,
            lname:lastname,
            contact:contacts,
            gmail:gmail
          }
        ]);
        setFirstname("")
        setLastname("")
        setContact("")
        setGmail("")
      }}>
        Add Contact</button>
    </div>
        </div>
        <div className='flex flex-col'>

    {
      filterlist.map((data,i) => <div className='bg-[#99582a] m-2 p-2 shadow-lg rounded-lg text-white ml-10 mt-8'>
        <Contactmain
         
         fname={data.fname}
         lname={data.lname}
         contact={data.contact}
         gmail={data.gmail}
         deleteEntry={()=>deletedata(i)}
         />
         {
          localStorage.setItem("conlist", JSON.stringify(addContact))
         }
      </div>)
    }
    </div>
    </div>
         </>
  )
}
