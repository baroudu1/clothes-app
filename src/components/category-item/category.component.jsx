import {useNavigate} from 'react-router-dom';

import './category.style.scss';

const Category = ({ category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/${category.routeName}`);
    }
    // console.log(category);
    return (
        <div className="category-container">
            <div className='background-image' style={{ backgroundImage: `url(${category.bgImg})`, }} />

            <div className="category-body-container" onClick={handleClick}>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>

    );
}
export default Category;