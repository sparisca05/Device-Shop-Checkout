import React from 'react';

const SummarySection = () => {
    return (
        <div className='summary-section'>
            <div className="items">
                <div className="item">
                    <div className='item-img'>
                        <img src="src/assets/Gold.png" alt="iPhone 12 pro Golden" />
                    </div>
                    <div className="info">
                        <div className='first-row'>
                            <h3>iPhone 12 Pro</h3>
                            <h3>$999.00</h3>
                        </div>
                        <h3>Golden</h3>
                        <div style={{alignSelf: 'flex-end'}}>
                            <span>x 1</span>
                            <img src="src/assets/close-icon.svg" alt="Close" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='item-img'>
                        <img src="src/assets/Blue.png" alt="Apple Watch Blue" />
                    </div>
                    <div className="info">
                        <div className='first-row'>
                            <h3>Apple Watch</h3>
                            <h3>$399.00</h3>
                        </div>
                        <h3>Blue</h3>
                        <div style={{alignSelf: 'flex-end'}}>
                            <span>x 1</span>
                            <img src="src/assets/close-icon.svg" alt="Close" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className='item-img'>
                        <img src="src/assets/iMac=Front 1.png" alt="iMac Green" />
                    </div>
                    <div className="info">
                        <div className='first-row'>
                            <h3>iMac</h3>
                            <h3>$1199.00</h3>
                        </div>
                        <h3>Green</h3>
                        <div style={{alignSelf: 'flex-end'}}>
                            <span>x 1</span>
                            <img src="src/assets/close-icon.svg" alt="Close" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummarySection;