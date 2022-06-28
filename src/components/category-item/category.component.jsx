
import './category.style.scss';

const Category = ({ category }) => {
    // console.log(category);
    return (
        <div className="category-container">
            <div className='background-image' style={{ backgroundImage: `url(${category.bgImg})`, }} />

            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>

    );
}
export default Category;