import React, { useState } from 'react';

import Item from './Item';

function SummarySection() {
    const [imgs] = useState<string[]>(["src/assets/Gold.png", "src/assets/Blue.png", "src/assets/iMac=Front 1.png"]);
    const [prices] = useState<number[]>([999.00, 399.00, 1199.00]);
    const [names] = useState<string[]>(["iPhone 12", "Apple Watch", "iMac"]);
    const [colors] = useState<string[]>(["Gold", "Blue", "Green"]);

    const subtotal = prices.reduce((a, b) => a + b);
    const tax = subtotal * 0.24;
    const total = subtotal + tax;

    return (
        <div className='summary-section'>
            <div className="items">
                {prices.map((price, index) => (
                    <Item img={imgs[index]} name={names[index]} price={price} color={colors[index]} />
                ))}
            </div>
            <div className="line"></div>
            <div className="pay-section">
                <div className="coupon-form">
                    <input type="text" placeholder="Enter coupon code" />
                    <button>Apply Coupon</button>
                </div>
                <div>
                    <div className="bill">
                        <h3 className='subtitle'>Sub total</h3>
                        <h3>${subtotal.toFixed(2)}</h3>
                    </div>
                    <div className="bill">
                        <h3 className='subtitle'>Tax</h3>
                        <h3>${tax.toFixed(2)}</h3>
                    </div>
                    <div className="bill">
                        <h3>Total</h3>
                        <h3>${total.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummarySection;