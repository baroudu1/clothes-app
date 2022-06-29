import React from 'react'

import { CategoriesList } from '../../services/categories-list';

const Categories = React.lazy(() => import('../../components/category-list/categories.component'));


const Home = () => {
    return (
        <div className='home'>
            <Categories categories={CategoriesList} />
        </div>
    )
}
export default Home;