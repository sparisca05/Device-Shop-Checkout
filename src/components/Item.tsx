
const Item = ({img, name, price, color} : {img: string, name: string, price: number, color: string}) => {
    return (
        <div className="item">
            <div className='item-img'>
                <img src={img} alt={name} height='fit-content' />
            </div>
            <div className="info">
                <div>
                    <h3>{name}</h3>
                    <h3>${price.toFixed(2)}</h3>
                </div>
                <h3>{color}</h3>
                <div style={{alignSelf: 'flex-end'}}>
                    <span>x 1</span>
                    <img src="images/close-icon.svg" alt="Close" />
                </div>
            </div>
        </div>
    );
}

export default Item;