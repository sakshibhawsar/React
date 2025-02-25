import Header from "./Component/Header"
import Sidebar from "./Component/Sidebar"
import Main1 from "./Component/Main1"
import Footer from "./Component/Footer"
function App() {
 return(
 <>
 <Header/>
 <div className="flex h-96">
 <Sidebar /> 
 <Main1 />
 </div>
 <Footer />
 </>)
}

export default App
