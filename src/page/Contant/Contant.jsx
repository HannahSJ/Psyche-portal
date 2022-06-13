import "./contant.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Containtable from "../../components/contanttable/Containtable"

const Contant = () => {
  return (
    <div className="contain">
    <Sidebar/>
    <div className="containContainer">
      <Navbar/>
      <Containtable/>
    </div>
  </div>
  )
}

export default Contant