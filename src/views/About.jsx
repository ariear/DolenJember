import { Link } from "react-router-dom";
import Point from "../components/Point";

function About(){
    return (
    <div className="main">
      <div className="main-content">
        <h1>Tentang Website Ini</h1>
        <p>Disini anda bisa  berkunjung virtual ke wisata sekitar jember rek!!, point di pojok kanan bawah adalah sisa point untuk membeli oleh-oleh</p>
        <div className="wrap-btn">
          <Link to="/" className="btn">Kembali</Link>
        </div>
      </div>
      <Point />
    </div>
    )
}

export default About