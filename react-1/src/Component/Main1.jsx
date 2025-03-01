

export default function Main1({sname, surname, age, address}){
    return(
       <div className=''>
        <h1>Student Name: {sname} {surname}</h1>
        <h2>Age: {age}</h2>
        <h2>Address: {address}</h2>
       </div>
    )
}