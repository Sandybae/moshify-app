const Discount = () => {
    return ( 
        <div data-aos="zoom-in-up" className="Discount">
            <h2>Starting at $10 per month</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, corporis?</p>
            <div className="input-group">
            <input className="input"
              type="text" 
              placeholder="Enter domain name here"/>
                <button className="btn">
                <img className="search-icon" 
                src="./search.svg" alt="the search button"/>SEARCH</button>
            </div>
            
                <div className="badges">
                    <span className="badge-blue">.com $9</span>
                    <span className="badge-small">.sg $10</span>
                    <span className="badge-small">.space $11</span>
                    <span className="badge-small">.info $14</span>
                    <span className="badge-small">.net $10</span>
                    <span className="badge-small">.xyz $10</span>
                </div>
        </div>
     );
}
 
export default Discount;