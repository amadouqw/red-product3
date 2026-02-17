import { useNavigate } from "react-router-dom"
import "./Topbar.css"
function Topbar() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="topbar shadow bg-dark"> 
      <input type="text" placeholder="Recherche..." />
      
      <div className="right-section">
        <div className="icons"></div>

        <button 
          onClick={handleLogout} 
          className="logout-btn"
        >
          Déconnexion
        </button>
      </div>

    </div>
  )
}

export default Topbar
