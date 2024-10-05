import React, { useState } from 'react';

import Item from './Item';
import PaySection from './PaySection';

function SummarySection() {
    const [imgs] = useState<string[]>(["src/assets/Gold.png", "src/assets/Blue.png", "src/assets/iMac=Front 1.png"]);
    const [prices] = useState<number[]>([999.00, 399.00, 1199.00]);
    const [names] = useState<string[]>(["iPhone 12", "Apple Watch", "iMac"]);
    const [colors] = useState<string[]>(["Gold", "Blue", "Green"]);

    return (
        <div className='summary-section'>
            <div className="items">
                {prices.map((price, index) => (
                    <Item img={imgs[index]} name={names[index]} price={price} color={colors[index]} />
                ))}
            </div>
            <div className="line"></div>
            <PaySection prices={prices} />
        </div>
    );
}

export default SummarySection;