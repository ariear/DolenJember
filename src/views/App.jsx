import { useEffect } from "react";
import { Link } from "react-router-dom";
import listDesti from "../api/destination";
import Point from "../components/Point";

function App(){

  useEffect(() => {
    if (!localStorage.getItem('destinations')) {
      localStorage.setItem('destinations', JSON.stringify(listDesti))
    }
  },[])

  return (
    <div className="main">
      <div className="main-content">
        <h1>Selamat Datang Di Wisata Jember</h1>
        <p>habiskan hari liburmu dengan berwisata dengan keluarga</p>
        <div className="wrap-btn">
          <Link to="/destinations" className="btn">Mulai</Link>
          <Link to="/about" className="btn">Tentang</Link>
          <Link to="/close" className="btn">Keluar</Link>
        </div>
      </div>
      <Point />
    </div>
  )
}

export default App