
import Category from "../category-item/category.component";

import MyList from '../../services/categories-list';

import './categories.style.scss';



const Categories = () => {
    
    const categories = MyList.categories;

    return (
        <div className="categories-container">
            {categories.map(category => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
}
export default Categories;