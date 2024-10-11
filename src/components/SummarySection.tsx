import { useState } from 'react';

import Item from './Item';
import PaySection from './PaySection';

function SummarySection() {
    const [imgs] = useState<string[]>(["src/assets/Gold.webp", "src/assets/Blue.webp", "src/assets/iMac=Front.webp"]);
    const [prices] = useState<number[]>([999.00, 399.00, 1199.00]);
    const [names] = useState<string[]>(["iPhone 12", "Apple Watch", "iMac"]);
    const [colors] = useState<string[]>(["Gold", "Blue", "Green"]);
    const [keys] = useState<string[]>(["1", "2", "3"]);

    return (
        <div className='summary-section'>
            <div className="items">
                {prices.map((price, index) => (
                    <Item img={imgs[index]} name={names[index]} price={price} color={colors[index]} key={keys[index]}/>
                ))}
            </div>
            <div className="line"></div>
            <PaySection prices={prices} />
        </div>
    );
}

export default SummarySection;