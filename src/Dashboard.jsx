import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import "./Dashboard.css"
import { FaEnvelope, FaUsers, FaHotel } from "react-icons/fa"
import { MdMessage, MdEmail } from "react-icons/md"
import { BsFillFileEarmarkTextFill } from "react-icons/bs"
import { FaP } from "react-icons/fa6"

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="dashboard-header">
          <h2>Bienvenue sur RED Product</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="cards">

          <div className="card">
            <div className="icon purple">
              <BsFillFileEarmarkTextFill />
            </div>
            <div>
              <h3>125</h3>
              <p>Formulaires</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

          <div className="card">
            <div className="icon green">
              
            <FaP />
            </div>
            <div>
              <h3>40</h3>
              <p>Messages</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

          <div className="card">
            <div className="icon yellow">
              <FaUsers />
            </div>
            <div>
              <h3>600</h3>
              <p>Utilisateurs</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

          <div className="card">
            <div className="icon red">
              <MdEmail />
            </div>
            <div>
              <h3>25</h3>
              <p>E-mails</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

          <div className="card">
            <div className="icon violet">
            <FaP />
            </div>
            <div>
              <h3>40</h3>
              <p>Hôtels</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

          <div className="card">
            <div className="icon blue">
              <FaUsers />
            </div>
            <div>
              <h3>02</h3>
              <p>Entités</p>
              <small>Je ne sais pas quoi mettre</small>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard