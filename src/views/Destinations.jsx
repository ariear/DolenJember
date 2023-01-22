import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Point from "../components/Point"

function Destinations(){
    const [Destinations, SetDestinations] = useState([])

    useEffect(() => {
      SetDestinations(JSON.parse(localStorage.getItem('destinations')))
    },[])

    return (
    <div className="main-desti">
      <div className="main-content">
        <h1>Pilih Destinasi Wisata </h1>
        <p>Ada banyak wisata di jember yang wajib kamu kunjungi</p>
        <div className="wrap-card-desti">
          {
            Destinations.map((destination) => 
              <Link key={destination.id} to={`/destinations/${destination.id}`} className="card-desti">
                <img src={destination.img} alt="" />
                <p>{destination.name}</p>
              </Link>
            )
          }
        </div>
      </div>
      <Point />
    </div>
    )
}

export default Destinations