function PaySection({prices} : {prices: number[]}) {
    const subtotal = prices.reduce((a, b) => a + b);
    const tax = subtotal * 0.24;
    const total = subtotal + tax;

    return (
        <div className="pay-section">
            <div className="coupon-form">
                <input type="text" placeholder="Enter coupon code" name='coupon-input'/>
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
    );
}

export default PaySection;