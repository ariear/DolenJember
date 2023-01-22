function Alert({setIsOpenModal, oleh, onBuyHandler}) {
    return (
        <div className="alert">
            <p>Anda Akan Membeli {oleh.name}</p>
            <div className="wrap-alert-btn">
                <button className="btn" style={{background: '#5E9CFA', color: 'white'}} onClick={() => onBuyHandler(oleh)}>Oke</button>
                <button className="btn" style={{background: '#FA5E83', color: 'white'}} onClick={() => setIsOpenModal(false)}>Batal</button>
            </div>
        </div>
    )
}

export default Alert