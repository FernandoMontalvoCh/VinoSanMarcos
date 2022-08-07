import React from 'react';

const ImgDescription = () => {

    return (
        <div className="card-group">
            <div className="card">
                <img src={"https://cdn.shopify.com/s/files/1/0912/7794/products/123140198_3225616544204346_6560444167218724813_n_800x.jpg?v=1645904152"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
            <div className="card">
                <img src={"https://cdn.shopify.com/s/files/1/0912/7794/products/123140198_3225616544204346_6560444167218724813_n_800x.jpg?v=1645904152"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
            </div>
            <div className="card">
                <img src={"https://cdn.shopify.com/s/files/1/0912/7794/products/123140198_3225616544204346_6560444167218724813_n_800x.jpg?v=1645904152"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
            </div>
        </div>
    );
};

export default ImgDescription;
