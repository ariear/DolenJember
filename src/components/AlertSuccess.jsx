
function AlertSuccess({oleh}) {
    return (
        <>
            <div className="alert">
                <p>Selamat anda berhasil membeli {oleh.name}</p>
                <div className="wrap-alert-btn">
                    <button className="btn" style={{background: '#5E9CFA', color: 'white'}} onClick={() => window.location.reload()}>Horee</button>
                </div>
            </div>
            <div className="bg-alert"></div>
        </>
    )
}

export default AlertSuccess