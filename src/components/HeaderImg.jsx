import React from 'react';

const HeaderImg = () => {

    return (
        <div className="card text-bg-dark">
            <img src={"https://viniandvinos.net/wp-content/uploads/2020/09/vini-and-vinos-vino-tinto.jpg"} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">Vino San Marcos</h5>
                    <p className="card-text">pon tu texto here pelado.</p>
                </div>
        </div>
    );
};

export default HeaderImg;