import Company from "./Company"

function Header(){
    return(
        <div className="flex justify-between h-20 bg-pink-500 items-center text-white">
            <h1 className="ml-6">
        <Company />
            </h1>
    <h2 className="mr-4 text-xl">Menu</h2>
        </div>
    )
}
export default Header