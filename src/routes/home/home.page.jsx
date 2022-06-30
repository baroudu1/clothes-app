import React from 'react'

const Categories = React.lazy(() => import('../../components/category-list/categories.component'));


const Home = () => {
    return (
        <div className='home'>
            <Categories />
        </div>
    )
}
export default Home;