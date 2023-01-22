import { useState, useEffect } from "react"
import Point from "../components/Point"
import { useParams } from 'react-router-dom';
import CardOleh from "../components/CardOleh";

function Oleh() {
    const [Destination, setDestination] = useState({})
    const [Oleh, setOleh] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    let { desti } = useParams();

    useEffect(() => {
        const localDesti = JSON.parse(localStorage.getItem('destinations')).filter(destination => destination.id === desti)[0]
        setDestination(localDesti)
        setOleh(localDesti.olehs)

        const points = JSON.parse(localStorage.getItem('points')).filter(point => point.isBg == true)
        if (!points.length) setIsEmpty(true)
    },[])

    return (
        <div className="main-desti">
            <div className="main-content">
                <h1>Anda sudah berada di {Destination.name}</h1>
                <p>Beli barang atau makanan khas untuk oleh-oleh</p>
                <div className="wrap-card-desti">
                    {
                        isEmpty ?
                        <p>Point Anda Sudah Habis, anda bisa mereset point dengan menekan tombol kembali di halaman utama</p>
                        :
                        Oleh.map((oleh) => 
                            <CardOleh key={oleh.id} oleh={oleh} />
                        )
                    }
                </div>
            </div>
            <Point />
        </div>
    )
}

export default Oleh