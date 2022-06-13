// import { List, Table } from "@mui/material"
import Table from "../../components/table/Table"
import Chart from "../../components/Chart/Chart"
import Featured from "../../components/Featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/Widget/Widget"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Activity</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home