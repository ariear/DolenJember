import { useEffect } from "react"

function Close(){

    useEffect(() => {
      const points = JSON.parse(localStorage.getItem('points')).filter(point => point.isBg == true)
      if (!points.length) {
        localStorage.setItem('points', JSON.stringify([{ id: 1, isBg: true }, { id: 2, isBg: true }, { id: 3, isBg: true }, { id: 4, isBg: true },]))
        window.location.replace('/')
      }
    },[])

    return (
    <div className="main">
      <div className="main-content">
        <h1>Sampai Jumpa Kembali 👏</h1>
      </div>
    </div>
    )
}

export default Close