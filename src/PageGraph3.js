import { Link } from "react-router-dom";

const PageGraph3 = () => {
    return ( 
        <div className="page-graph">
           <div className="graph-details">
            <h3 class="feature__heading">Wordpress Made Easy</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
            </p>
            <Link to="https://codewithmosh.com" class="link-arrow"
            >Learn More</Link>
            </div>
            <div className="graph"><img src="./wordpress.webp"
             alt=""
             data-aos="zoom-in-left" />
            </div>
            
        </div>
     );
}
 
export default PageGraph3;