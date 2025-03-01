import React, { useState } from 'react'
import Main1 from './Main1'
var Studentdetail=[
    {
        sname: "Raj", surname:"Verma", age: 21, address:"Khnadwa"
    },
    {
        sname: "Ram", surname:"Verma", age: 21, address:"Khnadwa"
    },
    {
    sname: "Inder", surname:"Parihar", age: 21, address:"Khnadwa"
    }
]
export default function Student() {
    const [listofStudents, setlistofStudents] = useState(Studentdetail)
    const deleteStudent = (index) =>{
        listofStudents.splice(index, 1)
        setlistofStudents([...listofStudents])
    }
  return (
<div>
    {
        listofStudents.map((data, i)=><div>
        <Main1 
        sname={data.sname}
        surname={data.surname}
        age={data.age}
        address={data.address}
        />
        <button onClick={()=>deleteStudent(i)}>Delete</button>
        </div>
        )
    }
</div>
  )
}
