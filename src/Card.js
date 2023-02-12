const Card = () => {
    return ( 
        <div className="Card">
            <div className="card-entry">
                <div className="card-header" >
                    <p className="entry-level">Entry</p>
                    <div className="card-details">
                        <p className="entry-price">$14</p>
                        <p className="entry-month">/month</p>
                        <span className="entry-badge">10% OFF</span>
                    </div>
                    <p className="entry-theme">Easy start on the cloud</p>
                </div>
                <div className="card-list" >
                    <ul>
                        <li>Unlimited Websites</li>
                        <li>Unlimited bandwidth</li>
                        <li>100 GB SSD Storage</li>
                        <li>3 GB RAM</li>
                    </ul>
                </div>
                <button className="card-btn">BUY NOW</button>
            </div>
            <div className="card-popular">
            <div className="card-header" >
              <p className="entry-level">Entry</p>
                <div className="card-details">
                    <p className="entry-price">$14</p>
                    <p className="entry-month">/month</p>
                    <span className="entry-badge">10% OFF</span>
                </div>
                    <p className="entry-theme">Easy start on the cloud</p>
            </div>
                <div className="card-list" >
                    <ul>
                        <li>Unlimited Websites</li>
                        <li>Unlimited bandwidth</li>
                        <li>100 GB SSD Storage</li>
                        <li>3 GB RAM</li>
                    </ul>
                </div>
                <button className="card-btn">BUY NOW</button>
            </div>
            <div className="card-premium">
            <div className="card-header" >
              <p className="entry-level">Entry</p>
                <div className="card-details">
                    <p className="entry-price">$14</p>
                    <p className="entry-month">/month</p>
                    <span className="entry-badge">10% OFF</span>
                </div>
                    <p className="entry-theme">Easy start on the cloud</p>
            </div>
                <div className="card-list" >
                    <ul>
                        <li>Unlimited Websites</li>
                        <li>Unlimited bandwidth</li>
                        <li>100 GB SSD Storage</li>
                        <li>3 GB RAM</li>
                    </ul>
                </div>
                <button className="card-btn">BUY NOW</button>
            </div>
        </div>
     );
}
 
export default Card;