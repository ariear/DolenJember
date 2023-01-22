import { useState } from "react"
import Alert from "./Alert"
import AlertSuccess from "./AlertSuccess"

function CardOleh({oleh}) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalSuccess, setIsOpenModalSuccess] = useState(false)

    const onBuyHandler = (oleh) => {
        let point = JSON.parse(localStorage.getItem('points')).filter(poin => poin.isBg == true).pop()
        point.isBg = false
        
        let points = JSON.parse(localStorage.getItem('points')).filter(poin => poin.id !== point.id)
        points = [...points,point]

        localStorage.setItem('points', JSON.stringify(points))

        setIsOpenModal(false)
        setIsOpenModalSuccess(true)
    }
    
    return (
        <>
        <div className="card-oleh" onClick={() => setIsOpenModal(!isOpenModal)}>
            <img src={oleh.img} className="img-oleh" alt="" />
            <p>{oleh.name}</p>
        </div>
            { isOpenModal &&
                <>
                    <Alert onBuyHandler={onBuyHandler} setIsOpenModal={setIsOpenModal} oleh={oleh}/>
                    <div className="bg-alert" onClick={() => setIsOpenModal(false)}></div>
                </>
            }
            {
                isOpenModalSuccess && <AlertSuccess oleh={oleh} />
            }
        </>
    )
}

export default CardOleh