import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as MrbooLogo } from '../../assets/logo/mrboo-logo.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <MrbooLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;
