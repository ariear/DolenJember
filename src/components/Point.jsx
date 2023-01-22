import { useEffect, useState } from "react"

function Point() {
    const [points, setPoints] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('points')) {
            localStorage.setItem('points', JSON.stringify([{ id: 1, isBg: true }, { id: 2, isBg: true }, { id: 3, isBg: true }, { id: 4, isBg: true },]))
        }
        setPoints(JSON.parse(localStorage.getItem('points')))
    },[])

    return (
        <div className="wrap-point">
            <p>Pointmu</p>
            <div className="wrap-circle">
                {
                    points.map((point) => 
                        <div key={point.id} className={`circle ${point.isBg ? 'terbg' : ''}`}></div>
                    )
                }
            </div>
        </div>
    )
}

export default Point